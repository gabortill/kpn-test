(function() {
	'use strict';

	function KpnController(CONST, DataService) {
		var vm = this;

		function calcDiscountPrice(price, discount) {
			return price - discount;
		}

		function addCalcValues(deviceOrigPrice, subsArray) {
			subsArray.forEach(function(elem) {
				elem.calc = {
					deviceDiscPrice: calcDiscountPrice(deviceOrigPrice, elem.deviceDiscount),
					subsDiscPrice: calcDiscountPrice(elem.subsPrice, elem.subsDiscount)
				};
			});
		}

		DataService
			.getData()
			.then(function (data) {
				if (!data.isError) {
					vm.product = data;

					addCalcValues(data.deviceOrigPrice, data.subscriptions);

					vm.selected = data.subscriptions[0];
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
