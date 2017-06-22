(function () {
  'use strict'

  function AlertsService($timeout) {

    const alertsService = {
      alerts: [],
      add: function (type, msg, timeout) {
        alertsService.alerts.push({
          type: type,
          msg: msg,
          close: function (){
            return alertsService.closeAlert(this)
          }
        });

        if (timeout) {
          $timeout(function(){
            alertsService.closeAlert(this)
          }, timeout)
        }
      },

      closeAlert: function (alert) {
        return this.closeAlertIndex(alertsService.alerts.indexOf(alert))
      },

      closeAlertIndex: function(idx) {
        return alertsService.alerts.splice(idx, 1)
      }
    }

    return alertsService

  }
  angular.module('dgmApp').factory('alertsService', AlertsService)
})()