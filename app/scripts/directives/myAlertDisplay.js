(function() {
    'use strict';

    function MyAlertDisplay(AlertsService) {
        const myAlertDisplay = {
            restrict: 'AE',
            templateUrl: './views/partials/alert-display.html',
            controller: function () {
                const vm = this;
                vm.alertsService = AlertsService
                vm.alerts = vm.alertsService.alerts
                vm.closeAlert = (index) => {
                    vm.alertsService.closeAlert(index)
                }
            },
            controllerAs: 'vm'
        }
        return myAlertDisplay
    }

    angular.module('dgmApp').directive('myAlertDisplay', MyAlertDisplay);
})();
