(function () {
    'use strict';
    var gtoApp = angular.module('gtoApp', ['ngAnimate', 'ngCookies', 'ngSanitize', 'ngTouch', 'ui.router']);
    gtoApp.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider.state('home', { // Home
            url: '/home',
            templateUrl: './views/home.html',
            data: { pageTitle: 'Welcome' },
            controller: 'homeCtrl',
            controllerAs: 'ctrl'
        }).state('about', { // About
            url: '/about-the-office',
            templateUrl: './views/about/aboutTheOffice.html',
            data: { pageTitle: 'About the Office' },
            controller: 'aboutCtrl',
            controllerAs: 'ctrl'
        }).state('contact', { // Contact Us
            url: '/contact-us',
            templateUrl: './views/contact.html',
            data: { pageTitle: 'Contact Us' },
            controller: 'contactCtrl',
            controllerAs: 'ctrl'
        });
    });

    gtoApp.config(function ($logProvider) {
        $logProvider.debugEnabled(true);
    });

    gtoApp.run(['$rootScope', '$state', '$log', function ($rootScope, $state, $log) {
        $rootScope.$state = $state;
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            $rootScope.loading = true;
            $rootScope.navOpen = false;
            $log.debug('$stateChangeStart:', event, toState, toParams, fromState, fromParams);
        });

        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            $rootScope.loading = false;
            if (!ga) { return; }
            $log.debug('$stateChangeSuccess:', event, toState, toParams, fromState, fromParams);

            //ga('send', 'pageview', { page: toState.data.pageTitle }); // Google Analytics
        });
    }]);

})();