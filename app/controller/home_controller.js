'use strict';

module.exports = function(app) {
  app.controller('HomeController',
  ['$anchorScroll', '$location', '$scope',
  function($anchorScroll, $location, $scope) {
    $scope.scrollTo = function(id) {
      console.log(id);
      $location.hash(id);
      $anchorScroll();
    };
  }
]);
};
