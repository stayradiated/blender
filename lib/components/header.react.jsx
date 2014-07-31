var React = require('react');

var Input = require('./input.react');

var Header = React.createClass({

  render: function () {
    /* jshint ignore: start */
    return (
      <header>
        <Input key='start' />
        <Input key='end' />
      </header>
    );
    /* jshint ignore: end */
  }

});

module.exports = Header;
