/** @jsx React.DOM */

var _log = require ('../log')
  , Router = require('../router')
  , React = require('React');

_log('[ client] index boot');

React.renderComponent(<Router />, document.querySelector('#page'));
