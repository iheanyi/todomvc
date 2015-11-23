/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var fs = require('fs');
var path = require('path');
var stew = require('broccoli-stew');
var merge = require('broccoli-merge-trees');
var Funnel = require('broccoli-funnel');

var CSS_FILES = [
  (require.resolve('todomvc-common/base.css')),
  (require.resolve('todomvc-app-css/index.css'))
]//.map(function(file) { return path.join(__dirname, file)});

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  var todoCSS = CSS_FILES.map(function(file) {
    var watched = new Funnel(path.dirname(file), {
      srcDir: '/',
      include: [path.basename(file)]
    });
    return stew.mv(watched, path.dirname(file), 'styles');
  });
  
  // app.import('node_modules/todomvc-common/base.css');
  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return merge(todoCSS.concat(app.toTree()), {merge: true});
};
