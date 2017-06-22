(function() {
    'use strict';

    function MyAlertDisplay(alertsService) {
        return {
            restrict: 'AE',
            template: '<div ng-repeat="alert in vm.alerts" class="alert alert-{{alert.type}}" role="alert"><button ng-click="vm.closeAlert($idx)" type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>{{alert.msg}}</div>',
            controller: function () {
                var vm = this;
                vm.alertsService = alertsService
                vm.alerts = vm.alertsService.alerts
                vm.closeAlert = (index) => {
                    vm.alertsService.closeAlert(index)
                }
            },
            controllerAs: 'vm'
        }
    }

    angular.module('dgmApp').directive('myAlertDisplay', MyAlertDisplay);
})();
