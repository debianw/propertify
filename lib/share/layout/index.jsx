/** @jsx React.DOM */

var React = require('react')
  , is = require('../is');

/**
 * Expose
 */

module.exports = React.createClass({
  render: function () {
    
    // client
    if (is.client()) {
      return (
        <div>
          <nav>
            <ul>
              <li> <a href="/">Home</a> </li>
              <li> <a href="/about-us">About us</a> </li>
            </ul>
          </nav>

          {this.props.children}
        </div>
      );
    }
    // server
    else {
      return (
        <html>
          <head>
            <title>Propertify [ Development ]</title>
          </head>

          <body>
            <div id="page">

              <div>
                <nav>
                  <ul>
                    <li> <a href="/">Home</a> </li>
                    <li> <a href="/about-us">About us</a> </li>
                  </ul>
                </nav>

                {this.props.children}
              </div>
            </div>
          </body>
        </html>
      );
    }
  }
})