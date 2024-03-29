'use strict';
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
const alphaApp = angular.module('alphaApp', [require('angular-route')]);

require('./controller')(alphaApp);


alphaApp.config(['$routeProvider', function($routing) {
  $routing
  .when('/home', {
    template: require('./templates/home_view.html'),
    controller: 'HomeController',
    controllerAs: 'homeCtrl'
  })
  .otherwise({
    redirectTo: '/home'
  });
}]);

alphaApp.run(['$rootScope', '$location', '$anchorScroll', '$routeParams',
  function($rootScope, $location, $anchorScroll, $routeParams) {
  //when the route is changed scroll to the proper element.
    $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
      $location.hash($routeParams.scrollTo);
      $anchorScroll();
    });
  }]);
