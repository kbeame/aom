'use strict';
require('!!file?name=[name].[ext]!./html/index.html');
// require('./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
const alphaApp = angular.module('alphaApp', [require('angular-route')]);

require('./controller')(alphaApp);


alphaApp.config(['$routeProvider', function($routing) {
  $routing
  .when('/', {
    templateUrl: 'app/templates/home_view.html',
    controller: 'HomeController',
    controllerAs: 'homeCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
}]);


var isVisible = false;
$(window).scroll(function(){
     var shouldBeVisible = $(window).scrollTop()<2400;
     if (shouldBeVisible && !isVisible) {
          isVisible = true;
          $('.booknowButton').show();
     } else if (isVisible && !shouldBeVisible) {
          isVisible = false;
          $('.booknowButton').hide();
    }
});
