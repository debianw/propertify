/** @jsx React.DOM */

/**
 *
 */

var React = require('react')
  , View = require('../../share/about/view.jsx')
  , Layout = require('../../share/layout/index.jsx');

/**
 * Expose
 */

module.exports = function (page, router) {

  /**
   * @route /about-us
   */

  page('/about-us', function (ctx) {
    console.log('about page');
    
    router.setState({
      component: <Layout> <View /> </Layout>
    });
  });

};