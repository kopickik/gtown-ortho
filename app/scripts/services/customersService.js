(function () {
  'use strict';

  function CustomersService($resource) {
    return $resource('http://localhost:8080/api/customers/:id', {
      id: '@_id'
    }, {
        'get': {
          method: 'GET',
          isArray: false
        }
      }, {
        'update': {
          method: 'PUT'
        }
      });
  }

  function PopupService($window) {
    this.showPopup = function (msg) {
      return $window.confirm(msg)
    }
  }
  angular.module('gtoApp').factory('Customer', CustomersService)
    .service('popupService', PopupService);
})()