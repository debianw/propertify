/**
 *
 */

var express = require('express')
  , app = express()
  , port = process.env.PORT || 4001
  , env = process.env.NODE_ENV || 'development';

var homeRoutes = require('./lib/server/home/routes')
  , aboutRoutes = require('./lib/server/about/routes');


app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.static(__dirname + '/build/'+env));
app.use(homeRoutes);
app.use(aboutRoutes);

app.listen(port, function () {
  console.log('[%s] Propertify listening on port %d', env, port);
});
