(function() {
    'use strict';
    function BeforeAfterController($log) {
        var vm = this;
        $log.debug('Before and After Controller');
    }

    angular.module('gtoApp').controller('beforeAfterCtrl', BeforeAfterController);
})();