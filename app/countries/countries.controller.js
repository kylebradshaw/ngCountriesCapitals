(function(){
    'use strict';
    
    angular
        .module('app.countries')
        .controller('CountriesController', CountriesController);

    CountriesController.$inject = ['$scope', 'dataservice'];

    function CountriesController($scope, dataservice) {
        $scope.pageClass = "countries";
        $scope.content = 'countries list here';
        var data = dataservice.getCountries();
        console.log(data, 'THE DATA');
    }
}());