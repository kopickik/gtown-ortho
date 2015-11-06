(function() {
    'use strict';
    function OfficeTourController($log) {
        var vm = this;
        $log.debug('OfficeTour Controller');
    }

    angular.module('gtoApp').controller('officeTourCtrl', OfficeTourController);
})();