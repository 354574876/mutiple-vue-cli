const HtmlWebpackPlugin = require('html-webpack-plugin');
const _ = require('lodash')
const ViewRouter = require('../config/view-router');
const development = process.env.NODE_ENV === 'development';

let pluginList = [];
ViewRouter.forEach(item => {
	pluginList.push(new HtmlWebpackPlugin(FormatHtmlPlugin(item.filename)));
})
function FormatHtmlPlugin (filename, option = {}){
	const ext = !development
		? {
			minify: {
		        removeComments: true,
		        collapseWhitespace: true,
		        removeAttributeQuotes: true,
		        minifyCSS: true,
		        minifyJS: true
		    },
		    chunksSortMode: 'manual'
		}
		: {};
	return Object.assign(ext, {
	    filename: development ? 'index.html' : filename+'.html',
	    template: development ? `./src/views/${filename}/index.html` : 'index.html',
	    inject: true,
	    chunks: ['manifest', 'vendor', 'config', filename]
	},option)
}

/**
 * [MyPlugin description]
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
      // htmlPluginData.html = _.template(htmlPluginData.html);
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