 var express = require('express');
 var path = require('path');
 var config = require('../webpack.config.js');
 var webpack = require('webpack');
 var webpackDevMiddleware = require('webpack-dev-middleware');
 var webpackHotMiddleware = require('webpack-hot-middleware');
 var publicPath = path.resolve(__dirname, '/../client');

 var app = express();

 var compiler = webpack(config);

 app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
 app.use(webpackHotMiddleware(compiler));


 app.use(express.static(publicPath));

 app.use('/', function (req, res) {
   res.sendFile(path.resolve('client/index.html'));
 });

 var port = process.env.PORT || 8000;

 app.listen(port, function(error) {
   if (error) { throw error; }
   console.log('Express server listening on port', port);
 });  