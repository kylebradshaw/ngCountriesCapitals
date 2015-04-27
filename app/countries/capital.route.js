(function() {
    'use strict';

    angular
        .module('app.countries')
        .config(appRun);

    appRun.$inject = ['$routeProvider'];

    /* @ngInject */
    function appRun($routeProvider) {
        $routeProvider.when("/countries/:country/capital", {
          templateUrl : "./countries/capital.html",
          controller : 'CapitalController',
          // resolve : {
          //   cityDetails : [
          //     'owmFindCity', 
          //     '$route', 
          //     function(owmFindCity, $route) {
          //       return owmFindCity($route.current.params.city);
          //     }
          //   ]
          // }
        });
    }
})();


// resolve: {
//     city: function(owmCities, $route, $location) {
//         var city = $route.current.params.city;
//         if (owmCities.indexOf(city) == -1) {
//             $location.path('/error');
//             return;
//         }
//         return city;
//     }
// }