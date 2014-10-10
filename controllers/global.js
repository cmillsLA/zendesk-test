'use strict';

angular.module('portfolio.global', ['ngRoute'])
.controller('global', ['$scope', function($scope) {
	$scope.getBodyClass = function() {
		return document.getElementsByTagName('body')[0].className;
	}
	$scope.appendBodyClass = function(addClass) {
		document.getElementsByTagName('body')[0].className += addClass;
	}
}]);