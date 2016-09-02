'use strict';
// require('!!file?name=[name].[ext]!./html/index.html');
require('html/index.html');
require('./scss/base.scss');

const angular = require('angular');
const alphaApp = angular.module('alphaApp', [require('angular-route')]);

require('./controller')(alphaApp);
// $('.carousel').carousel();

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


// $(window).scroll(function(){
//     $(".booknowButton").css("top", Math.max(0, 550 - $(this).scrollTop()));
//     // $(".booknowButton").css("top", Math.max(0, 250 - $(this).scrollTop())
// });



// $.fn.followTo = function (pos) {
//     var $this = this,
//         $window = $(window);
//
//     $window.scroll(function (e) {
//         if ($window.scrollTop() > pos) {
//             $this.css({
//                 position: 'absolute',
//                 top: pos
//             });
//         } else {
//             $this.css({
//                 position: 'fixed',
//                 top: 0
//             });
//         }
//     });
// };
//
// $('.booknowButton').followTo(250);



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
