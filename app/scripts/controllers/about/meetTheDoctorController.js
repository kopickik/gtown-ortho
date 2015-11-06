(function() {
    'use strict';
    function TheDoctorController($log) {
        var vm = this;
        $log.debug('Meet The Doctor Controller');
    }

    angular.module('gtoApp').controller('theDoctorCtrl', TheDoctorController);
})();