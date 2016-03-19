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
            controllerAs : 'ctrl',
            parentInfo: { 'about': 'parent__active' }
        }).state('about.meetTheDoc', { // About: Meet the Doctor
            url : '/meet-the-doctor',
            templateUrl : './views/about/meetTheDoc.html',
            data : { pageTitle : 'About the Office: Meet the Doctor' },
            controller : 'theDoctorCtrl',
            controllerAs : 'ctrl',
            parentInfo: { 'about': 'parent__active' }
        }).state('about.officeTour', { // About: Office Tour
            url : '/office-tour',
            templateUrl : './views/about/officeTour.html',
            data : { pageTitle : 'About the Office: Office Tour' },
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
            data : { pageTitle : 'New Patients: What to Expect' },
            controller : 'expectationsCtrl',
            controllerAs : 'ctrl'
        }).state('newPatients.paymentInsurance',  { // New Patients: Payments and Insurance
            url : '/payments-and-insurance',
            templateUrl : './views/patients/paymentsInsurance.html',
            data : { pageTitle : 'New Patients: Payments and Insurance' },
            controller : 'paymentsInsuranceCtrl',
            controllerAs : 'ctrl'
        }).state('newPatients.forms', { // New Patients: Forms
            url : '/forms',
            templateUrl : './views/patients/forms.html',
            data : { pageTitle : 'New Patients: Forms' },
            controller : 'formsCtrl',
            controllerAs : 'ctrl'
        }).state('newPatients.referral', { // New Patients: Referral Program
            url : '/referral-program',
            templateUrl : './views/patients/referral.html',
            data : { pageTitle : 'New Patients: Referral Program' },
            controller : 'referralCtrl',
            controllerAs : 'ctrl'
        }).state('ortho', { // Orthodontics 101
            url : '/orthodontics-101',
            templateUrl : './views/orthodontics/orthodontics101.html',
            data : { pageTitle : 'Orthodontics 101' },
            controller : 'orthodonticsCtrl',
            controllerAs : 'ctrl'
        }).state('ortho.servicesOffered', { // Services Offered
            url : '/services-offered',
            templateUrl : './views/orthodontics/servicesOffered.html',
            data : { pageTitle : 'Orthodontics 101: Services Offered' },
            controller : 'servicesCtrl',
            controllerAs : 'ctrl'
        }).state('ortho.applianceCare', { // Appliance Care
            url : '/appliance-care',
            templateUrl : './views/orthodontics/applianceCare.html',
            data : { pageTitle : 'Orthodontics 101: Appliance Care' },
            controller : 'applianceCareCtrl',
            controllerAs : 'ctrl'
        }).state('ortho.faq', { // FAQ's
            url : '/faq',
            templateUrl : './views/orthodontics/faq.html',
            data : { pageTitle : 'Orthodontics 101: FAQ\'s' },
            controller : 'faqCtrl',
            controllerAs : 'ctrl'
        }).state('ortho.treatmentTiming', { // Timing of Treatment
            url : '/timing-of-treatment',
            templateUrl : './views/orthodontics/treatmentTiming.html',
            data : { pageTitle : 'Orthodontics 101: Timing of Treatment' },
            controller : 'timingCtrl',
            controllerAs : 'ctrl'
        }).state('difference', { // The Kopicki Difference
            url : '/the-kopicki-difference',
            templateUrl : './views/difference/difference.html',
            data : { pageTitle : 'The Kopicki Difference' },
            controller : 'differenceCtrl',
            controllerAs : 'ctrl'
        }).state('difference.beforeAndAfter', { // Before and After
            url : '/before-and-after',
            templateUrl : './views/difference/beforeAndAfter.html',
            data : { pageTitle : 'The Kopicki Difference: Before and After' },
            controller : 'beforeAfterCtrl',
            controllerAs : 'ctrl'
        }).state('difference.testimonials', { // Patient Testimonials
            url : '/patient-testimonials',
            templateUrl : './views/difference/patientTestimonials.html',
            data : { pageTitle : 'The Kopicki Difference: Patient Testimonials' },
            controller : 'testimonialsCtrl',
            controllerAs : 'ctrl'
        }).state('difference.setUsApart', { // What Sets Us Apart
            url : '/what-sets-us-apart',
            templateUrl : './views/difference/setsUsApart.html',
            data : { pageTitle : 'The Kopicki Difference: What Sets Us Apart' },
            controller : 'apartCtrl',
            controllerAs : 'ctrl'
        }).state('contact', { // Contact Us
			url : '/contact-us',
			templateUrl : './views/contact.html',
			data : { pageTitle : 'Contact Us' },
			controller : 'contactCtrl',
			controllerAs : 'ctrl'
		});
    });

    gtoApp.config(function($logProvider) {
        $logProvider.debugEnabled(true);
    });

    gtoApp.run(['$rootScope', '$state', '$log',  function ($rootScope, $state, $log) {
        //$rootScope.$state = $state;
        //$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
            // $rootScope.loading = true;
            // $rootScope.navOpen = false;
            //$log.debug('INFOS:', event, toState, toParams, fromState, fromParams);
        //});

        // $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        //     $rootScope.loading = false;
        //     if (!ga) { return; }
        //     $log.debug('$stateChangeSuccess:',event, toState, toParams, fromState, fromParams);

        //     //ga('send', 'pageview', { page: toState.data.pageTitle }); // Google Analytics
        // });
    }]);

})();
