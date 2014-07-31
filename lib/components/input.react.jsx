var React = require('react');
var Reflux = require('reflux');

var appActions = require('../actions/app');
var appStore = require('../stores/app');

var Input = React.createClass({

  mixins: [Reflux.ListenerMixin],

  propTypes: {
    key: React.PropTypes.string.isRequired
  },

  getInitialState: function () {
    return {
      value: appStore.input[this.props.key]
    };
  },

  onAppChange: function () {
    this.setState(this.getInitialState());
  },

  componentDidMount: function () {
    this.listenTo(appStore, this.onAppChange);
  },

  handleInputChange: function (event) {
    var value = event.target.value;
    appActions.setColor(this.props.key, value);
  },

  render: function () {
    /* jshint ignore: start */
    return (
      <input
        value={this.state.value}
        onChange={this.handleInputChange}
      />
    );
    /* jshint ignore: end */
  }

});

module.exports = Input;
