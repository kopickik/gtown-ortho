(function() {
    'use strict';
    function TimingController($log) {
        var vm = this;
        $log.debug('Timing Controller');
    }

    angular.module('gtoApp').controller('timingCtrl', TimingController);
})();