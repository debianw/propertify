/** @jsx React.DOM */

/**
 *
 */

var React = require('react')
  , View = require ('../../share/home/view.jsx')
  , Layout = require('../../share/layout/index.jsx');

/**
 * Expose
 */

module.exports = function (page, router) {

  /**
   * @route /
   */

  page('/', function (ctx) {
    router.setState({
      component: <Layout> <View /> </Layout>
    });
  });

};