(function() {
	'use strict';

	function priceFormatter() {
		return function (input) {
			return '€ ' + parseInt(input).toFixed(2).replace('.', ',');
		};
	}

	angular
		.module('kpn')
		.filter('priceFormatter', priceFormatter);
}());
