'use strict';

module.exports = function(app) {
  app.controller('HomeController', [
    '$scope', '$location', '$anchorScroll',
    function($scope, $location, $anchorScroll) {
      $scope.scrollTo = function(id) {
        $location.hash(id);
        $anchorScroll();
      };

    }]);
};
