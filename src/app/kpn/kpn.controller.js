(function() {
	'use strict';

	function KpnController() {
		this.msg = 'lorem ipsum dolor sit amet';
	}

	angular
		.module('kpn')
		.controller('KpnController', KpnController);
}());
