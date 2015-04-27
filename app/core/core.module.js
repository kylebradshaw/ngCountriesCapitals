(function() {
    'use strict';

    angular
        .module('app.core', [
            'ngRoute', 
            'ngAnimate'
        ])
        .constant('API_PREFIX', 'http://api.geonames.org')
        .constant('API_AUTH', 'username=somedirection')
        .constant('API_COUNTRY_INFO', '/countryInfoJSON')
        .constant('API_SEARCH', '/searchJSON');
})();
