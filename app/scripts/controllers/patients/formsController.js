(function() {
    'use strict';
    function FormsController($log) {
        var vm = this;
        $log.debug('Forms Controller');
    }

    angular.module('gtoApp').controller('formsCtrl', FormsController);
})();