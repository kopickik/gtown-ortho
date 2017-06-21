(function () {
  'use strict';
  function customersListCtrl($scope, $rootScope, $state, popupService, $window, Customer) {
    $scope.customers = Customer.query();

    $scope.deleteCustomer = function (customer) {
      if (popupService.showPopup('Really delete this?')) {
        customer.$delete(function () {
          $window.location.href = '';
        });
      }
    };
  }

  function customersViewCtrl($scope, $stateParams, Customer) {
    Customer.get({ id: $stateParams.id })
      .$promise.then(function (customer) {
        $scope.customer = customer
      }, function(err) {
        $state.go('customers')
      })
  }

  function customersCreateCtrl($scope, $rootScope, $state, $stateParams, Customer) {
    $scope.customer = new Customer();

    $scope.addCustomer = function () {
      $scope.customer.$save(function (resp) {
        // success callback
        $state.go('customers', resp)
      }, function (resp) {

      });
    };

  }

  function customersEditCtrl($scope, $state, $stateParams, Customer) {
    function loadCustomer () {
      $scope.customer = Customer.get({ id: $stateParams.id })
    }
    function updateCustomer () {
      $scope.customer.$update(function(resp) {
        $state.go('customers')
      }, function (resp) {
        // error handler
      })
    }

    loadCustomer()
    $scope.updateCustomer = updateCustomer
  }

  angular.module('dgmApp').controller('customersCreateCtrl', customersCreateCtrl);
  angular.module('dgmApp').controller('customersListCtrl', customersListCtrl);
  angular.module('dgmApp').controller('customersViewCtrl', customersViewCtrl);
  angular.module('dgmApp').controller('customersEditCtrl', customersEditCtrl);
})();