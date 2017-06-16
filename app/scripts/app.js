(function () {
    'use strict';
    var gtoApp = angular.module('gtoApp', ['ngAnimate', 'ngResource', 'ngCookies', 'ngSanitize', 'ngTouch', 'ui.router']);
    gtoApp.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider.state('home', { // Home
            url: '/home',
            templateUrl: './views/home.html',
            data: { pageTitle: 'Welcome' },
            controller: 'homeCtrl',
            controllerAs: 'ctrl'
        }).state('contact', { // Contact Us
            url: '/contact-us',
            templateUrl: './views/contact.html',
            data: { pageTitle: 'Contact Us' },
            controller: 'contactCtrl',
            controllerAs: 'ctrl'
        })
        .state('customers', {
            url: '/customers',
            templateUrl: './views/customers/customers.html',
            data: { pageTitle: 'Customers'},
            controller: 'customersListCtrl',
            controllerAs: 'ctrl'
        })
        .state('viewCustomer', {
            url: '/customers/:id/view',
            templateUrl: './views/customers/customer-view.html',
            data: { pageTitle: 'Customers'},
            controller: 'customersViewCtrl',
            controllerAs: 'ctrl'
        })
        .state('editCustomer', {
            url: '/customers/:id/edit',
            templateUrl: './views/customers/customer-edit.html',
            data: { pageTitle: 'Customers'},
            controller: 'customersEditCtrl',
            controllerAs: 'ctrl'
        })
        .state('createCustomer', {
            url: '/customers/create',
            templateUrl: './views/customers/customer-create.html',
            data: { pageTitle: 'Customers - Create'},
            controller: 'customersCreateCtrl',
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

            $log.debug('$stateChangeSuccess:', event, toState, toParams, fromState, fromParams);

            //ga('send', 'pageview', { page: toState.data.pageTitle }); // Google Analytics
        });
    }]);

})();