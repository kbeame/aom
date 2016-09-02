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
  .when('/about', {
    templateUrl: 'app/templates/about_view.html',
    controller: 'AboutController',
    controllerAs: 'aboutCtrl'
  })
  .when('/services', {
    templateUrl: 'app/templates/services_view.html',
    controller: 'ServicesController',
    controllerAs: 'servicesCtrl'
  })
  .when('/book-now', {
    templateUrl: 'app/templates/book_now_view.html',
    controller: 'BookNowController',
    controllerAs: 'bookNowCtrl'
  })
  .when('/gift-card', {
    templateUrl: 'app/templates/giftcard_view.html',
    controller: 'GiftcardController',
    controllerAs: 'giftcardCtrl'
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
