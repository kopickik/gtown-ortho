(function() {
    'use strict';
    var gtoApp = angular.module('gtoApp', ['ngAnimate', 'ngCookies', 'ngSanitize', 'ngTouch', 'ui.router']);
    gtoApp.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider.state('home', { // Home
            url : '/home',
            templateUrl : './views/home.html',
            data: { pageTitle : 'Welcome' },
            controller : 'homeCtrl',
            controllerAs : 'ctrl'
        }).state('about', { // About
            url : '/about-the-office',
            templateUrl : './views/about/aboutTheOffice.html',
            data : { pageTitle : 'About the Office' },
            controller : 'aboutCtrl',
            controllerAs : 'ctrl'
        }).state('about.meetTheDoc', { // About: Meet the Doctor
            url : '/meet-the-doctor',
            templateUrl : './views/about/meetTheDoc.html',
            data : { pateTitle : 'About the Office: Meet the Doctor' },
            controller : 'theDoctorCtrl',
            controllerAs : 'ctrl'
        }).state('.about.officeTour', { // About: Office Tour
            url : '/office-tour',
            templateUrl : './vies/about/officeTour.html',
            data : { pageTitle : 'Aobut the Office: Office Tour' },
            controller : 'officeTourCtrl',
            controllerAs : 'ctrl'
        }).state('newPatients', { // New Patients
            url : '/new-patients',
            templateUrl : './views/patients/newPatients.html',
            data : { pageTitle : 'New Patients' },
            controller : 'newPatientsCtrl',
            controllerAs : 'ctrl'
        }).state('newPatients.expectations', { // New Patients: What to Expect
            url : '/expectations',
            templateUrl : './views/patients/expectations.html',
            data : { pateTitle : 'New Patients: What to Expect' },
            controller : 'expectationsCtrl',
            controllerAs : 'ctrl'
        }).state('newPatients.paymentInsurance',  { // New Patients: Payments and Insurance
            url : '/payments-and-insurance',
            templateUrl : './views/patients/paymentsInsurance.html',
            data : { pateTitle : 'New Patients: Payments and Insurance' },
            controller : 'paymentsInsuranceCtrl',
            controllerAs : 'ctrl'
        }).state('newPatients.forms', { // New Patients: Forms
            url : '/forms',
            templateUrl : './views/patients/forms.html',
            data : { pateTitle : 'New Patients: Forms' },
            controller : 'formsCtrl',
            controllerAs : 'ctrl'
        }).state('newPatients.referral', { // New Patients: Referral Program
            url : '/referral-program',
            templateUrl : './views/patients/referral.html',
            data : { pageTitle : 'New Patients: Referral Program' },
            controller : 'referralCtrl',
            controllerAs : 'ctrl'
        }).state('ortho101', {
            url : '/orthodontics-101',
            template : './views/orthodontics/orthodontics101.html',
            data : { pageTitle : 'Orthodontics 101' },
            controller : 'orthodonticsCtrl',
            controllerAs : 'ctrl'
        }).state('ortho101.servicesOffered', {
            url : '/services-offered',
            template : './views/orthodontics/servicesOffered.html',
            data : { pageTitle : 'Orthodontics 101: Services Offered' },
            controller : 'servicesCtrl',
            controllerAs : 'ctrl'
        }).state('ortho101.applianceCare', {
            url : '/appliance-care',
            template : './views/orthodontics/applianceCare.html',
            data : { pageTitle : 'Orthodontics 101: Appliance Care' },
            controller : 'applianceCareCtrl',
            controllerAs : 'ctrl'
        }).state('ortho101.faq', {
            url : '/faq',
            template : './views/orthodontics/faq.html',
            data : { pageTitle : 'Orthodontics 101: FAQ\'s' },
            controller : 'faqCtrl',
            controllerAs : 'ctrl'
        }).state('ortho101.treatmentTiming', {
            url : '/timing-of-treatment',
            template : './views/orthodontics/treatmentTiming.html',
            data : { pageTitle : 'Orthodontics 101: Timing of Treatment' },
            controller : 'timingCtrl',
            controllerAs : 'ctrl'
        }).state('difference', {
            url : '/the-kopicki-difference',
            template : './views/difference/difference.html',
            data : { pageTitle : 'The Kopicki Difference' },
            controller : 'differenceCtrl',
            controllerAs : 'ctrl'
        }).state('difference.beforeAndAfter', {
            url : '/before-and-after',
            template : './views/difference/beforeAndAfter.html',
            data : { pageTitle : 'The Kopicki Difference: Before and After' },
            controller : 'beforeAfterCtrl',
            controllerAs : 'ctrl'
        }).state('difference.testimonials', {
            url : '/patient-testimonials',
            template : './views/difference/patientTestimonials.html',
            data : { pageTitle : 'The Kopicki Difference: Patient Testimonials' },
            controller : 'testimonialsCtrl',
            controllerAs : 'ctrl'
        }).state('difference.setUsApart', {
            url : '/what-sets-us-apart',
            template : './views/difference/setsUsApart.html',
            data : { pageTitle : 'The Kopicki Difference: What Sets Us Apart' },
            controller : 'apartCtrl',
            controllerAs : 'ctrl'
        });
    });

    gtoApp.config(function($logProvider) {
        $logProvider.debugEnabled(true);
    });

    gtoApp.run(['$rootScope', '$state', '$log',  function ($rootScope, $state, $log) {
        $rootScope.$state = $state;
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
            $rootScope.loading = true;
            $rootScope.navOpen = false;
            $log.debug(event, toState, toParams, fromState, fromParams);
        });

        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            $rootScope.loading = false;
            if (!ga) { return; }
            $log.debug(event, toState, toParams, fromState, fromParams);

            //ga('send', 'pageview', { page: toState.data.pageTitle }); // Google Analytics
        });
    }]);

})();