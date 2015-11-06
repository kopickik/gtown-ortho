(function() {
    'use strict';
    function ServicesController($log) {
        var vm = this;
        $log.debug('Services Controller');
    }

    angular.module('gtoApp').controller('servicesCtrl', ServicesController);
})();