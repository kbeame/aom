'use strict';

module.exports = function(app) {
  app.controller('HomeController', function() {
    this.home = true;
  });
};