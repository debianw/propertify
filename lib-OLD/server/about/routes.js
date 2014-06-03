/**
 *
 */

var express = require('express')
  , app = module.exports = express()
  , React = require('react')
  , View = require('./view.jsx');

app.set('views', __dirname);

app.get('/about-us', function (req, res) {
  res.send(React.renderComponentToString(View()));
});