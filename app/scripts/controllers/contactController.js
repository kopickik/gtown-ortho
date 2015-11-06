(function() {
    'use strict';
    function ContactController ($log) {
         var vm = this;
         $log.debug('Contact Controller');
    }

    angular.module('gtoApp').controller('contactCtrl', ContactController);
}());