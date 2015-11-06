(function() {
    'use strict';
    function ExpectationsController($log) {
        var vm = this;
        $log.debug('Expectations Controller');
    }

    angular.module('gtoApp').controller('expectationsCtrl', ExpectationsController);
})();