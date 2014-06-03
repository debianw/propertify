/** @jsx React.DOM */

var React = require('react')
  , Layout = require('../../share/layout/index.jsx')
  , Content = require('../../share/about/view.jsx');

/**
 * Expose
 */

module.exports = React.createClass({

  render: function () {
    return (
      <Layout>
        <Content />
      </Layout>
    );
  }

});