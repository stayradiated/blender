var React = require('react');
var husl = require('husl');

var Panel = React.createClass({

  propTypes: {
    color: React.PropTypes.array.isRequired
  },

  render: function () {
    var hex = husl.toHex.apply(husl, this.props.color);
    /* jshint ignore: start */
    return (
      <div className='panel' style={{ background: hex}}>
        <div>{hex}</div>
      </div>
    );
    /* jshint ignore: end */
  }

});

module.exports = Panel;
