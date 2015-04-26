(function(){
    'use strict';
    
    angular
        .module('app.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope'];

    function HomeController($scope) {
        $scope.content = "What an epic homepage!";
    }
}());