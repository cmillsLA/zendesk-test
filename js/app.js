'use strict';

angular.module('mmdubs', [
  'ngRoute',
  'mmdubs.global'
]).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/home.html',
    controller: 'global'
  });
  $routeProvider.when('/about', {
    templateUrl: 'views/about.html',
    controller: 'global'
  });
  $routeProvider.otherwise({redirectTo: '/'});
  $locationProvider.html5Mode(true);
}]);