// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.directive('rotate', function() {
    return {
        link: function(scope, element, attrs) {
            // watch the degrees attribute, and update the UI when it changes
            scope.$watch(attrs.degrees, function(rotateDegrees) {
                console.log(rotateDegrees);
                //transform the css to rotate based on the new rotateDegrees
                element.css({
                    '-moz-transform': 'rotate(' + rotateDegrees + 'deg)',
                    '-webkit-transform': 'rotate(' + rotateDegrees + 'deg)',
                    '-o-transform': 'rotate(' + rotateDegrees + 'deg)',
                    '-ms-transform': 'rotate(' + rotateDegrees + 'deg)'
                });
            });
        }
    };
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:

    .state('tab.budapest', {
      url: '/budapest',
      views: {
        'tab-budapest': {
          templateUrl: 'templates/tab-budapest.html',
          controller: 'BudapestCtrl'
        }
      }
    })

    .state('tab.tokyo', {
      url: '/tokyo',
      views: {
        'tab-tokyo': {
          templateUrl: 'templates/tab-tokyo.html',
          controller: 'TokyoCtrl'
        }
      }
    })

    .state('tab.newyork', {
      url: '/newyork',
      views: {
        'tab-newyork': {
          templateUrl: 'templates/tab-newyork.html',
          controller: 'NewYorkCtrl'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/budapest');

});

