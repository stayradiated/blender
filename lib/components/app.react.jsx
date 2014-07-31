var React = require('react');

var Header = require('./header.react');
var Gradient = require('./gradient.react');

var App = React.createClass({

  render: function () {
    /* jshint ignore: start */
    return (
      <div className='app'>
        <Header />
        <Gradient />
      </div>
    );
    /* jshint ignore: end */
  }

});

module.exports = App;
