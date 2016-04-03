(function() {
    'use strict';
    function NewPatientsController($log) {
        var vm = this;
        $log.debug('New Patients Controller');
    }

    angular.module('gtoApp').controller('newPatientsCtrl', NewPatientsController);
})();
