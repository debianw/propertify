var express = require('express')
  , app = module.exports = express();

app.set('views', __dirname);

app.get('/', function (req, res) {
  console.log('Home Route ====> ');
  res.render('view');
});