/** @jsx React.DOM */

var React = require('react')
  , Layout = require('../../share/layout/index.js')
  , Content = require('../../share/about/view.js');

/**
 * Expose
 */

module.exports = React.createClass({displayName: 'exports',

  render: function () {
    return (
      Layout(null, 
        Content(null )
      )
    );
  }

});