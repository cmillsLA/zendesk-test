'use strict';

angular.module('portfolio', [
  'ngRoute',
  'portfolio.global',
  'portfolio.home',
  'portfolio.work',
  'portfolio.experience',
  'portfolio.contact',
  'portfolio.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/home/index.html',
    controller: 'home'
  });
  $routeProvider.when('/work', {
    templateUrl: 'views/work/index.html',
    controller: 'work'
  });
  $routeProvider.when('/experience', {
    templateUrl: 'views/experience/index.html',
    controller: 'experience'
  });
  $routeProvider.when('/contact', {
    templateUrl: 'views/contact/index.html',
    controller: 'contact'
  });
  $routeProvider.otherwise({redirectTo: '/'});
}]);