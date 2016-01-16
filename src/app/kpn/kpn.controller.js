(function() {
	'use strict';

	function KpnController(DataService) {
		var vm = this;

		DataService
			.getData()
			.then(function (data) {
				if (!data.isError) {
					vm.product = data;
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
