/** @jsx React.DOM */

/**
 *
 */

var React = require('react')
  , page = require('page');

var routes = {
  home: require('../home/routes'),
  about: require('../about/routes')
};

/**
 * Expose
 */

module.exports = React.createClass({

  /**
   *
   */

  getInitialState: function () {
    return { component: <div /> };
  },

  /**
   *
   */

  componentDidMount: function () {
    var self = this;

    // Home
    routes.home(page, this);

    // About
    routes.about(page, this);

    // Default
    page('*', function (ctx) {
      self.setState({
        component: <div> Page Not Found 404 </div>
      });
    });

    page();
  },

  /**
   *
   */

  render: function () {
    return this.state.component;
  }

});
