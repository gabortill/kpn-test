(function() {
	'use strict';

	function dataFormatter() {
		return function (input) {
			return (input >= 1024) ? input / 1024 + ' GB' : input + ' MB';
		};
	}

	angular
		.module('kpn')
		.filter('dataFormatter', dataFormatter);
}());
