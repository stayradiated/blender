var Reflux = require('reflux');
var husl = require('husl');

var appActions = require('../actions/app');

var appStore = Reflux.createStore({

  init: function () {
    this.input = {
      start: '#ffffff',
      end: '#000000'
    };

    this.colors = {
      start: husl.fromHex(this.input.start),
      end: husl.fromHex(this.input.end)
    };

    this.listenTo(appActions.setColor, this.setColor);
  },

  setColor: function (key, color) {
    this.input[key] = color;
    this.colors[key] = husl.fromHex(color);
    this.trigger();
  }

});

module.exports = appStore;
