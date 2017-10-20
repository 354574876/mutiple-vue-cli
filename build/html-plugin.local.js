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