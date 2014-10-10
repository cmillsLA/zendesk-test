'use strict';

angular.module('portfolio.home', ['ngRoute'])
.controller('home', ['$scope', function($scope) {

	$scope.init = function() {
		var bodyClass = $scope.getBodyClass();
		bodyClass = bodyClass.indexOf('home-loaded');
		// Animate on first visit.
		if(bodyClass < 0) {
			var fade = 'fade load';
			var fadeDelay = 'fade-delay load';
			$scope.appendBodyClass(' home-loaded');
		// Don't animate.
		} else {
			var fade = fadeDelay = 'load';
		}
		var video = document.getElementsByTagName('video');
		video[0].className = fade;
		var p = document.getElementsByTagName('p');
		p[0].className = fadeDelay;	
	}
	// setTimeout to use CSS3 transitions.
	setTimeout($scope.init, 0);

}]);