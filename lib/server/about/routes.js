/**
 *
 */

var express = require('express')
  , app = module.exports = express();

app.set('views', __dirname);

app.get('/about-us', function (req, res) {
  res.render('view');
});