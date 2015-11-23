import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType,
  //rootURL: '/examples/emberjs_ember-cli/dist/index.html/',
});

Router.map(function() {
  this.route('root', {path: '/index.html'});
});

export default Router;
