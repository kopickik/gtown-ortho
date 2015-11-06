(function() {
    'use strict';
    function ApartController($log) {
        var vm = this;
        $log.debug('Sets Us Apart Controller');
    }

    angular.module('gtoApp').controller('apartCtrl', ApartController);
})();