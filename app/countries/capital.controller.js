(function(){
    'use strict';

    angular
        .module('app.countries')
        .controller('CapitalController', CapitalController);

    CapitalController.$inject = ['$q', '$scope', '$routeParams', 'dataservice'];

    function CapitalController($q, $scope, $routeParams, dataservice) {
        $scope.countryData = {};
        // $scope.country = $routeParams.country;
        $scope.content = 'capital info here';

        activate();

        //rethink this activate()
        // do a request for getcountry, get geonameId, pass that to getNeighbours(), do whatever's next

        function activate() {
            var promises = [getCountry()];
            return $q.all(promises).then(function(){
                console.log('data retrieved');
                console.log($scope.countryData, 'countryData');
            })
        }

        function getCountry() {
            return dataservice.getCountry($routeParams.country).then(function (data) {
                $scope.countryData = data.geonames[0];
                return $scope.countryData;
            });
        }
    }
}());