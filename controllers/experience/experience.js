'use strict';

angular.module('portfolio.experience', ['ngRoute'])
.controller('experience', ['$scope', function($scope) {

	$scope.init = function() {
		var bodyClass = $scope.getBodyClass();
		bodyClass = bodyClass.indexOf('experience-loaded');
		// Animate on first visit.
		if(bodyClass < 0) {
			var fade = 'fade load';
			var fadeDelay = 'fade-delay load';
			$scope.appendBodyClass(' experience-loaded');
		// Don't animate.
		} else {
			var fade = fadeDelay = 'load';
		}
		var h1 = document.getElementsByTagName('h1');
		h1[0].className = fade;
		var p = document.getElementsByTagName('p');
		p[0].className = fadeDelay;	
	}
	// setTimeout to use CSS3 transitions.
	setTimeout($scope.init, 0);

}]);