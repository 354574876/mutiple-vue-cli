# 基于vue-cli 构建的多页面应用

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
// utile.js 添加获取入口文件方法
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
// 以下是修改的部分
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