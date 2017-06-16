(function () {
  'use strict';

  function CustomersService($resource) {
    function resourceErrorHandler(resp) {
      console.debug(resp);
      throw new Error('Houston, we have a problem.')
    }
    return $resource('http://localhost:8080/api/customers/:id', {
      id: '@_id'
    }, {
        'update': { method: 'PUT' }
    }
  )};

  function PopupService($window) {
    this.showPopup = function (msg) {
      return $window.confirm(msg)
    }
  }
  angular.module('gtoApp').factory('Customer', CustomersService)
    .service('popupService', PopupService);
})()