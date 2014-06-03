/** @jsx React.DOM */

var _log = require ('../log')
  , Router = require('../router')
  , React = require('React')
  , About = require('../../share/about/view.jsx');

_log('[ client] index boot');

setTimeout(function () {
	//React.renderComponent(<Router />, document.querySelector('#page'));
	console.log('render about');
	React.renderComponent(<About />, document.querySelector('#content'));
}, 10000);
