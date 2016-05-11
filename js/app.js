'use strict';

angular.module('mmdubs', [
  'ngRoute',
  'mmdubs.global'
]).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/hc/en-us', {
    templateUrl: '//p6.zdassets.com/hc/theme_assets/928510/200215297/home.html',
    controller: 'global'
  });
  $routeProvider.when('/hc/en-us/about', {
    templateUrl: '//p6.zdassets.com/hc/theme_assets/928510/200215297/about.html',
    controller: 'global'
  });
  $routeProvider.otherwise({redirectTo: '/'});
  $locationProvider.html5Mode(true);
}]);