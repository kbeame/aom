'use strict';

module.exports = function(app) {
  app.controller('headerCtrl',
  ['$anchorScroll', '$location', '$scope',
  function($anchorScroll, $location, $scope) {
    $scope.gotoAnchor = function(id) {
      $location.hash(id);
      $anchorScroll();
    };
  }
]);
};
