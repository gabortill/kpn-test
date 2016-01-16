(function() {
	'use strict';

	function KpnController(DataService) {
		var vm = this;

		DataService
			.getData()
			.then(function (data) {
				if (!data.isError) {
					vm.msg = data.test;
				} else {
					vm.isDataError = true;
					vm.errorMsg = data.errorMsg;
				}
			});
	}

	angular
		.module('kpn')
		.controller('KpnController', KpnController);
}());
