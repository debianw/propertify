/** @jsx React.DOM */

var React = require('react')
  , is = require('../is');

/**
 * Expose
 */

module.exports = React.createClass({
  render: function () {
    
    // client
    /*if (is.client()) {
      console.log('serving client layout');
      return (
        <div>
          <nav>
            <ul>
              <li> <a href="/">Home</a> </li>
              <li> <a href="/about-us">About us</a> </li>
            </ul>
          </nav>

          <div id="content"> {this.props.children} </div>
        </div>
      );
    }*/
    // server
    //else {
      console.log('serving server layout');
      return (
        <html>
          <head>
            <title>Propertify [ Development ]</title>
          </head>

          <body>
            <div id="page">

              <nav>
                <ul>
                  <li> <a href="/">Home</a> </li>
                  <li> <a href="/about-us">About us</a> </li>
                </ul>
              </nav>

              <div id="content"> {this.props.children} </div>
            </div>

            <script src="js/client.js"></script>
          </body>
        </html>
      );
    //}
  }
})