(function() {
    'use strict';
    function HomeController($log) {
        var vm = this;
        $log.debug('Home Controller');
    }

    angular.module('dgmApp').controller('homeCtrl', HomeController);
})();