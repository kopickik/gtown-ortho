(function() {
    'use strict';
    function ContactController ($log) {
         var vm = this;
         $log.debug('Contact Controller');

         vm.something = 'something2';
    }

    angular.module('dgmApp').controller('contactCtrl', ContactController);
}());