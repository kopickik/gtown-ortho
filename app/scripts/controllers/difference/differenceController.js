(function() {
    'use strict';
    function DifferenceController($log) {
        var vm = this;
        $log.debug('Difference Controller');
    }

    angular.module('gtoApp').controller('differenceCtrl', DifferenceController);
})();