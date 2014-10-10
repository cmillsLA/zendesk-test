'use strict';

angular.module('portfolio.contact', ['ngRoute'])
.controller('contact', ['$scope', function($scope) {

	$scope.init = function() {
		var bodyClass = $scope.getBodyClass();
		bodyClass = bodyClass.indexOf('contact-loaded');
		// Animate on first visit.
		if(bodyClass < 0) {
			var fade = 'fade load';
			var fadeDelay = 'fade-delay load';
			$scope.appendBodyClass(' contact-loaded');
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