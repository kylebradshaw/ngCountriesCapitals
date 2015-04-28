(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$q', 'API_PREFIX',
        'API_AUTH', 'API_COUNTRY_INFO', 'API_SEARCH'];

    /* @ngInject */
    function dataservice($http, $q, API_PREFIX, API_AUTH, API_COUNTRY_INFO, API_SEARCH) {

        var service = {
            getCountries: getCountries,
            getCountry: getCountry
        };

        return service;

        function getCountries() {
            return $http({
                    cache: true,
                    method: 'GET',
                    url: API_PREFIX + API_COUNTRY_INFO + '?' + API_AUTH
                })
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(error) {
                var msg = 'query for people failed. ' + error.data.description;
                return $q.reject(msg);
            }
        }

        function getCountry(name) {
            return $http({
                    cache: true,
                    method: 'GET',
                    url: API_PREFIX + API_SEARCH + '?name_equals=' + name + '&' + API_AUTH
                })
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(error) {
                var msg = 'query for people failed. ' + error.data.description;
                return $q.reject(msg);
            }
        }

        function getNeighbours(id) {
            return $http({
                    cache: true,
                    method: 'GET',
                    url: API_PREFIX + API_NEIGHBOURS + '?geonameId=' + id + '&' + API_AUTH
                })
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(error) {
                var msg = 'query for people failed. ' + error.data.description;
                return $q.reject(msg);
            }
        }
    }
})();

// angular.module('owmLibrary', [])

//   .constant('OWM_API_PREFIX', 'http://api.openweathermap.org/data/2.5/forecast')
//   .constant('OWM_LAT_LNG_PATH', '/?lat={{ lat }}&lon={{ lng }}')
//   .constant('OWM_CITY_PATH', '/?id={{ id }}')
//   .constant('OWM_FIND_CITY_PATH', '/?q={{ q }}')
//   .constant('OWM_CITIES_JSON_FILE', './owm-cities.json')

//   .factory('owmUSCities', function($http, $q, OWM_CITIES_JSON_FILE) {
//     return function() {
//       return $http({
//         cache : true,
//         method: 'GET',
//         url: OWM_CITIES_JSON_FILE
//       })
//     }
//   })

//   .factory('owmRequest', function($http, $q, OWM_API_PREFIX) {
//     return function(path) {
//       var defer = $q.defer();
//       $http.get(OWM_API_PREFIX + path)
//         .success(function(data) {
//           defer.resolve(data);
//         })
//       return defer.promise;
//     }
//   })

//   .factory('owmFindCity', function(
//       owmRequest, $interpolate, OWM_FIND_CITY_PATH, OWM_CITY_PATH
//     ) {
//     return function(q) {
//       var path;
//       if(q.match(/^\d+$/)) {
//         path = $interpolate(OWM_CITY_PATH)({
//           id : q
//         });
//       } else {
//         path = $interpolate(OWM_FIND_CITY_PATH)({
//           q : q
//         });
//       }
//       return owmRequest(path);
//     }
//   })

//   .factory('owmNearby', function(owmRequest, $interpolate, OWM_LAT_LNG_PATH) {
//     return function(lat, lng) {
//       var path = $interpolate(OWM_LAT_LNG_PATH)({
//         lat : lat,
//         lng : lng
//       });
//       return owmRequest(path);
//     }
//   })
