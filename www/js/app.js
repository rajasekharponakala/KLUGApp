// Ionic Starter App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('KLUG', ['ionic', 'ngStorage', 'ui.router', 'firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
      if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    if(window.Connection) {

  if(navigator.connection.type == Connection.NONE) {
      alert('There is no internet connection available');
  }else{
      alert(navigator.connection.type);
  }
 }else{
   window.location.href = ('#/app/home.html');
  }

// window.plugins.PushbotsPlugin.initialize("5845ab7e4a9efaf1728b4567",{"android":{"sender_id":"573096612337"}});
 /* window.plugins.PushbotsPlugin.getRegistrationId(function(token){
    console.log("Registration Id:" + token);
});
    //Set user alias
window.plugins.PushbotsPlugin.setAlias("Test");
//Remove alias
window.plugins.PushbotsPlugin.removeAlias();

//Add tag
window.plugins.PushbotsPlugin.tag("tag1");
//Remove tag
window.plugins.PushbotsPlugin.untag("tag1");

//Add array of tags
window.plugins.PushbotsPlugin.setTags(["tag1"]);
//Remove array of tags
window.plugins.PushbotsPlugin.removeTags(["tag1"]);
  */
});
})

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "views/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.home', {
      url: "/home",
      views: {
        'menuContent' :{
          templateUrl: "views/home.html"
        }
      }
    })

    .state('app.browse', {
      url: "/browse",
      views: {
        'menuContent' :{
          templateUrl: "views/browse.html"
        }
      }
    })
    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent' :{
          templateUrl: "views/playlists.html"
           }
      }
    })
    .state('app.login', {
      url: "/login",
      views: {
        'menuContent' :{
          templateUrl: "views/login/login.html",
          controller: 'LoginController'
        }
      }
    })
    .state('app.register', {
      url: "/register",
      views: {
        'menuContent' :{
          templateUrl: "views/register/register.html",
          controller: 'LoginController'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
  }]);


