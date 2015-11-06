(function() {
    'use strict';
    function HomeController($log) {
        var vm = this;
        $log.debug('Home Controller');
    }

    angular.module('gtoApp').controller('homeCtrl', HomeController);
})();