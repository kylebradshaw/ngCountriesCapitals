(function(){
    'use strict';

    angular
        .module('ccApp', ['ngAnimate', 'ngRoute'])
        .run(['$rootScope', '$location', '$timeout', function($rootScope, $location, $timeout) {
            $rootScope.$on('$routeChangeError', function() {
                $location.path("/error");
            });
            $rootScope.$on('$routeChangeStart', function() {
                $rootScope.isLoading = true;
            });
            $rootScope.$on('$routeChangeSuccess', function() {
              $timeout(function() {
                $rootScope.isLoading = false;
              }, 1000);
            });
        }])
        .config(['$routeProvider', function($routeProvider){
            $routeProvider.when('/', {
                templateUrl: 'components/home.html',
                controller: 'HomeCtrl'
            })
            .when('/countries', {
                templateUrl: 'components/countries.html',
                controller: 'CountriesCtrl'
                // resolve : {
                //     city: function(owmCities, $route, $location) {
                //         var city = $route.current.params.city;
                //         if(owmCities.indexOf(city) == -1 ) {
                //             $location.path('/error');
                //             return;
                //         }
                //         return city;
                //     }
                // }
            })
            .when('/countries/:country/capital', {
                templateUrl: 'components/country-detail.html',
                controller: 'CountriesCapitalCtrl'
            })
            .when('/error', {
                template: '<p>Error - Page Not Found</p>' //inline template
            })
        }]);
}());