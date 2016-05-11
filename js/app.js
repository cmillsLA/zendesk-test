'use strict';

angular.module('mmdubs', [
  'ngRoute',
  'mmdubs.global'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/home.html',
    controller: 'global'
  });
  $routeProvider.when('/about', {
    templateUrl: 'views/about.html',
    controller: 'global'
  });
  $routeProvider.otherwise({redirectTo: '/'});
}]);