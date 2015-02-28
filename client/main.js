var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var AppView = Backbone.View.extend({
  initialize: function(){
    console.log('initialize');
  },
  render: function() {
    console.log('render');
    $('main').append('<h1>Browserify is mathematical.</h1>');
  }
});

var appView = new AppView();
appView.render();
