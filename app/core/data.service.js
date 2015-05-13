(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$q', 'API_PREFIX',
        'API_AUTH', 'API_COUNTRY_INFO', 'API_SEARCH', 'API_NEIGHBOURS'];

    /* @ngInject */
    function dataservice($http, $q, API_PREFIX, API_AUTH,
        API_COUNTRY_INFO, API_SEARCH, API_NEIGHBOURS) {

        var service = {
            getCountries: getCountries,
            getCountry: getCountry,
            getNeighbours: getNeighbours,
            getCities: getCities,
            getCountryDetail: getCountryDetail
        };

        return service;

        function success(response) {
            return response.data;
        }

        function fail(error, type) {
            var msg = 'query for ' + type + ' failed. ' + error.data.description;
            return $q.reject(msg);
        }

        function getCountries() {
            return $http({
                    cache: true,
                    method: 'GET',
                    url: API_PREFIX + API_COUNTRY_INFO + '?' + API_AUTH
                })
                .then(success)
                .catch(fail, 'countries');
        }

        function getCountry(name) {
            return $http({
                    cache: true,
                    method: 'GET',
                    url: API_PREFIX + API_SEARCH + '?name_equals=' + name + '&' + API_AUTH
                })
                .then(success)
                .catch(fail, 'country');
        }

        function getCountryDetail(countryCode) {
            //all this to get sq area? :|
            return $http({
                    cache: true,
                    method: 'GET',
                    url: API_PREFIX + API_COUNTRY_INFO + '?country=' + countryCode + '&' + API_AUTH
                })
                .then(success)
                .catch(fail, 'country details');
        }

        function getCities(countryName) {
            return $http({
                    cache: true,
                    method: 'GET',
                    url: API_PREFIX + API_SEARCH + '?q=' + countryName + '&cities=cities1000&' + API_AUTH
                })
                .then(success)
                .catch(fail, 'city');
        }

        function getNeighbours(id) {
            return $http({
                    cache: true,
                    method: 'GET',
                    url: API_PREFIX + API_NEIGHBOURS + '?geonameId=' + id + '&isNameRequired=true&' + API_AUTH
                })
                .then(success)
                .catch(fail);
        }
    }
})();