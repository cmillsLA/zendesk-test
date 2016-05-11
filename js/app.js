'use strict';

angular.module('mmdubs', [
  'ngRoute',
  'mmdubs.global'
]).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/hc/en-us', {
    templateUrl: 'https://cmillsla.github.io/zendesk-test/views/home.html',
    controller: 'global'
  });
  $routeProvider.when('/hc/en-us/about', {
    templateUrl: 'https://cmillsla.github.io/zendesk-test/views/about.html',
    controller: 'global'
  });
  $routeProvider.otherwise({redirectTo: '/'});
  $locationProvider.html5Mode(true);
}]);