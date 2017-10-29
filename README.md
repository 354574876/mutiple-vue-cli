# 基于vue-cli 构建的多页面应用
> 根据不同的入口路径生成对应的 '文件名.html'，可以自定义为每个页面添加不同的引用文件(例如：css,js)和Title
## 启动项目

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## 全局配置

### 修改 webpack.base.conf.js
```javascript
// 以下是修改的部分
const getMultiEntry = require('./utils.js').getMultiEntry;
const Pages = getMultiEntry('./src/views/**/*.js');
function getEntry () {
  let entry = {};
    for (var pathname in Pages) {
      entry[pathname] = Pages[pathname];
    }
  // 额外添加的配置文件
  entry.config = './src/assets/js/config.js';
  return entry;
}

module.exports = {
  entry: getEntry()
}
```

### utils.js 添加获取入口路径的方法
```javascript
// 获取多级的入口文件
exports.getMultiEntry = function (globPath) {
  var entries = {},
    basename, tmp, pathname;

  glob.sync(globPath).forEach(function (entry) {
    basename = path.basename(entry, path.extname(entry));
    tmp = entry.split('/').splice(-4);

  var pathsrc = tmp[0]+'/'+tmp[1];
  if( tmp[0] == 'src' ){
    pathsrc = tmp[1];
  }
  //console.log(pathsrc)
    pathname = pathsrc + '/' + basename; // 正确输出js和html的路径
    entries[pathname] = entry;
    //console.log(pathname+'-----------'+entry);
  });

  return entries;
}
```
## 添加 html-plugin.local.js 文件
```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');
const _ = require('lodash')
const ViewRouter = require('../config/view-router');
const development = process.env.NODE_ENV === 'development';
const getMultiEntry = require('./utils.js').getMultiEntry;
const Pages = getMultiEntry('./src/views/**/*.js');

let pluginList = [];
for (var pathname in Pages) {
  pluginList.push(new HtmlWebpackPlugin(FormatHtmlPlugin(pathname, Pages[pathname])));
}

function FormatHtmlPlugin (pathname, fullpath){
	const ext = !development
		? {
			minify: {
		        removeComments: true,
		        collapseWhitespace: true,
		        removeAttributeQuotes: true,
		        minifyCSS: true,
		        minifyJS: true
		    }
		}
		: {};
  const filename = pathname.split('/');
	return Object.assign(ext, {
      // 生成后的文件名称
	    filename: development ? `${pathname}.html` : `${filename[filename.length - 1]}.html`,
	    // 模板路径
      template: 'index.html',
	    inject: true,
      /**
       * 依赖文件排序
       */
      chunksSortMode: function (a, b) {
          var chunksort = ['manifest', 'vendor', 'config'];
          var aIndex =chunksort.indexOf(a.names[0]);
          var bIndex =chunksort.indexOf(b.names[0]);
          aIndex = aIndex < 0 ? chunksort.length + 1 : aIndex;
          bIndex = bIndex < 0 ? chunksort.length + 1 : bIndex;
          return aIndex - bIndex;
      },
	    chunks: ['manifest', 'vendor', 'config', pathname]
	})
}
/**
 * 根据 html-webpack-plugin 提供的事件，在HTML生成之前可以为每个页面添加需要的Tiltle 以及引用文件
 * 给需要的页面添加插件和title
 * @param {[type]} options [description]
 */
function MyPlugin(options) {
  // Configure your plugin with options...
  this.options = options || ''
}
MyPlugin.prototype.apply = function(compiler) {
  // ...
  compiler.plugin('compilation', function(compilation) {
    // Allow plugins to change the html before assets are injected
    compilation.plugin('html-webpack-plugin-before-html-processing', function(htmlPluginData, callback) {
      let $route = ViewRouter.filter(item => htmlPluginData.assets.chunks.hasOwnProperty(item.filename))[0];
      htmlPluginData.html = _.template(htmlPluginData.html,{
      	escape: /{%-([\s\S]+?)%}/g,
      	evaluate: /{%([\s\S]+?)%}/g,
      	interpolate: /{%=([\s\S]+?)%}/g
      })({
      	CssLib: $route.CssLib || [],
      	JsLib: $route.JsLib || [],
      	title: $route.title || '',
      	NODE_ENV: ''
      })
      callback(null, htmlPluginData);
    });
  });
};
// https://github.com/jantimon/html-webpack-plugin
// To allow other plugins to alter the HTML this plugin executes
pluginList.push(new MyPlugin())

module.exports = pluginList;
```
## dev 开发环境配置修改

### webpack.dev.conf.js，webpack.pro.conf.js 修改
添加 HtmlWebpackPlugin 可以给每个页面添加配置
```javascript
    // html-plugin.local 文件是根据入口文件写的配置
    const HtmlLoadPlugin = require('./html-plugin.local');
    plugin.concat(HtmlLoadPlugin)
```