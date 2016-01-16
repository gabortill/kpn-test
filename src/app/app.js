(function() {
    'use strict';

    function config($routeProvider) {
        $routeProvider
        .when('/', {
            controller: 'KpnController',
            controllerAs: 'kpn',
            templateUrl: '/kpn/kpn.html'
        })
        .otherwise({
            redirectTo: '/'
        });
    }

    angular
        .module('kpn', [
            'ngRoute'
        ])
        .config(config);
}());
