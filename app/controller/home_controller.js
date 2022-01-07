'use strict';

module.exports = function(app) {
  app.controller('HomeController', function($scope, $location, $anchorScroll) {
    $scope.scrollTo = function(id) {
          $location.hash(id);
          $anchorScroll();
       }

  });
};
