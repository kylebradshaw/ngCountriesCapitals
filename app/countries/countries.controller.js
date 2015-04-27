(function(){
    'use strict';
    
    angular
        .module('app.countries')
        .controller('CountriesController', CountriesController);

    CountriesController.$inject = ['$q', '$scope', 'dataservice'];

    function CountriesController($q, $scope, dataservice) {
        $scope.pageClass = "countries";
        $scope.countryList = [];

        activate();

        function activate() {
            var promises = [getCountries()];
            return $q.all(promises).then(function(){
                console.log('data retrieved');
                console.log($scope.countryList, 'countries');
            })
        }

        function getCountries() {
            return dataservice.getCountries().then(function (data) {
                $scope.countryList = data.geonames;
                return $scope.countryList;
            });
        }

    }
}());