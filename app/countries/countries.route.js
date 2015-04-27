(function() {
    'use strict';

    angular
        .module('app.countries')
        .config(appRun);

    appRun.$inject = ['$routeProvider'];

    /* @ngInject */
    function appRun($routeProvider) {
        $routeProvider.when("/countries", {
            templateUrl: "./countries/countries.html",
            controller: 'CountriesController',
        });
    }
})();