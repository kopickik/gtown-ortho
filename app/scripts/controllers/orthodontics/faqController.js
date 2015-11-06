(function() {
    'use strict';
    function FAQController($log) {
        var vm = this;
        $log.debug('FAQ Controller');
    }

    angular.module('gtoApp').controller('faqCtrl', FAQController);
})();