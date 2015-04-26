(function(){
    'use strict';
    
    angular
        .module('app.countries')
        .controller('CapitalController', CapitalController);

    CapitalController.$inject = ['$scope'];

    function CapitalController($scope) {
        $scope.content = 'capital info here';
    }
}());