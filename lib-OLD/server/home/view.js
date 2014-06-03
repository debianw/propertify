/** @jsx React.DOM */

var React = require('react')
  , Layout = require('../../share/layout/index.jsx')
  , Content = require('../../share/home/view.jsx');

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
