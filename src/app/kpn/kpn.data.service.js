(function() {
	'use strict';

	function DataService(CONST, $http, $log) {
		function getData() {
			var promise = $http.get(CONST.dataPath)
				.then(function(response) {
					return response.data;
				})
				.catch(function(err) {
					$log.warn('DataService warning:', err);

					return {
						isError: true,
						errorMsg: 'Error occured! Please try again later.'
					};
				});

			return promise;
		}

		return {
			getData: getData
		};
	}

	angular
		.module('kpn')
		.service('DataService', DataService);
}());
