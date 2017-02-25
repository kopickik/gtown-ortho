(function() {
    'use strict';
    function TheDoctorController($log, $state, $document) {
        var vm = this;
        $log.debug('Meet The Doctor Controller');

        var theParentLink = $document.find('.dropdown');

        if ($state.current.name === '') {}

        $log.debug($state.current);

        
    }

    angular.module('gtoApp').controller('theDoctorCtrl', TheDoctorController);
})();
