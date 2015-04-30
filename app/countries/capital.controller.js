(function(){
    'use strict';

    angular
        .module('app.countries')
        .controller('CapitalController', CapitalController);

    CapitalController.$inject = ['$q', '$scope', '$routeParams', 'dataservice'];

    function CapitalController($q, $scope, $routeParams, dataservice) {
        $scope.country = {};
        // $scope.country = $routeParams.country;

        // activate();

        // function activate() {
        //     var promises = [getCountryData()];
        //     return $q.all(promises).then(function(){
        //         console.log('data retrieved');
        //         console.log($scope.countryData, 'countryData');
        //     });
        // }
        // function getCountry() {
        //     return dataservice.getCountry($routeParams.country).then(function (data) {
        //         $scope.countryData = data.geonames[0];
        //         return $scope.countryData;
        //     });
        // }

        getCountryData();

        // do a request for getcountry, get geonameId, pass that to getNeighbours(), do whatever's next
        function getCountryData() {
            dataservice.getCountryDetail($routeParams.country)
                .then(function (data) {
                    $scope.country = data.geonames[0];
                    dataservice.getCities(data.geonames[0].countryName)
                        .then(function(data){
                            $scope.capital = data.geonames[0];
                        });
                    //Turkey issue
                    dataservice.getCountry(data.geonames[0].countryName)
                        .then(function(data){
                            $scope.detail = data.geonames[0];
                        })
                    dataservice.getNeighbours(data.geonames[0].geonameId)
                        .then(function(data){
                            $scope.neighbourData = data.geonames;
                        });
                })
        }

    }
}());