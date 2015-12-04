// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

    .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html'
      }
    }
  })

  .state('app.registration', {
    url: '/registration',
    views: {
      'menuContent': {
        templateUrl: 'templates/registration.html'
      }
    }
  })

  .state('app.schedule', {
      url: '/schedule',
      views: {
        'menuContent': {
          templateUrl: 'templates/schedule.html'
        }
      }
    })
    .state('app.price', {
      url: '/price',
      views: {
        'menuContent': {
          templateUrl: 'templates/price.html',
        }
      }
    })
    .state('app.hotel', {
      url: '/hotel',
      views: {
        'menuContent': {
          templateUrl: 'templates/hotel.html',
        }
      }
    })
    .state('app.dj', {
      url: '/dj',
      views: {
        'menuContent': {
          templateUrl: 'templates/dj.html',
        }
      }
    })
    .state('app.bio', {
      url: '/bio',
      views: {
        'menuContent': {
          templateUrl: 'templates/bio.html',
        }
      }
    })


  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
