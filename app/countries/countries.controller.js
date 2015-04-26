(function(){
    'use strict';
    
    angular
        .module('app.countries')
        .controller('CountriesController', CountriesController);

    CountriesController.$inject = ['$scope'];

    function CountriesController($scope) {
        $scope.content = 'countries list here';
    }
}());