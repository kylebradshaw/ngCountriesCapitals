(function() {
    'use strict';

    angular
        .module('app.admin')
        .run(appRun);

    appRun.$inject = ['$routeProvider'];
    /* @ngInject */
    function appRun($routeProvider) {
        $routeProvider.when("/countries/:country/capital", {
          templateUrl : "./coutries/capital.html",
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
