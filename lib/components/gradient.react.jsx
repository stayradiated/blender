var React = require('react');
var Reflux = require('reflux');

var appStore = require('../stores/app');
var Panel = require('./panel.react');

var Gradient = React.createClass({

  mixins: [Reflux.ListenerMixin],

  getInitialState: function () {
    return {
      start: appStore.colors.start,
      end: appStore.colors.end
    };
  },

  onAppChange: function () {
    this.setState(this.getInitialState());
  },

  componentDidMount: function () {
    this.listenTo(appStore, this.onAppChange);
  },

  render: function () {
    /* jshint ignore: start */

    var panels = [];
    for (var i = 0; i <= 1; i += 0.1) {
      var color = [
        (this.state.end[0] * i) + (this.state.start[0] * (1- i)),
        (this.state.end[1] * i) + (this.state.start[1] * (1- i)),
        (this.state.end[2] * i) + (this.state.start[2] * (1- i)),
      ];
      console.log(color);
      panels.push(<Panel key={i} color={color} />);
    }

    return (
      <div className='gradient'>
        {panels}
      </div>
    );
    /* jshint ignore: end */
  }

});

module.exports = Gradient;
