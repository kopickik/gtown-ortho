(function() {
    'use strict';
    function aboutController($log) {
        var vm = this;
        $log.debug('About Controller');
    }

    angular.module('gtoApp').controller('aboutCtrl', aboutController);
})();