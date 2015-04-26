(function(){
    'use strict';

    angular
        .module('app', [
            'app.core',
            'app.home',
            'app.countries'
        ])
        .config(function($locationProvider, $routeProvider) {
            // $locationProvider.hashPrefix('!');
            $routeProvider.otherwise({
                redirectTo : '/'
            });
        });

}());