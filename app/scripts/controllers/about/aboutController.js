(function() {
    'use strict';
    function AboutController($log) {
        var vm = this;
        $log.debug('About Controller');

        vm.something = 'something';
    }

    angular.module('gtoApp').controller('aboutCtrl', AboutController);
})();