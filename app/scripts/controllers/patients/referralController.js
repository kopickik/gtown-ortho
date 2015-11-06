(function() {
    'use strict';
    function ReferralController($log) {
        var vm = this;
        $log.debug('Referral Controller');
    }

    angular.module('gtoApp').controller('referralCtrl', ReferralController);
})();