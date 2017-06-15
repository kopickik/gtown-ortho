(function () {
  'use strict';
  function customersListCtrl($scope, $state, popupService, $window, Customer) {
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
    $scope.customer = Customer.query({ id: $stateParams.id });
  }

  function customersCreateCtrl($scope, $state, $stateParams, Customer) {
    $scope.customer = new Customer();

    $scope.addCustomer = function () {
      $scope.customer.$save(function () {
        $state.go('customers');
      });
    };

  }

  function customersEditCtrl($scope, $state, $stateParams, Customer) {
    $scope.updateCustomer = function () {
      $scope.customer.$update(function () {
        $state.go('customers');
      });
    };

    $scope.loadCustomer = function () {
      $scope.customer = Customer.query({ id: $stateParams.id });
    };

    $scope.loadCustomer();
  }

  angular.module('gtoApp').controller('customersCreateCtrl', customersCreateCtrl);
  angular.module('gtoApp').controller('customersListCtrl', customersListCtrl);
  angular.module('gtoApp').controller('customersViewCtrl', customersViewCtrl);
  angular.module('gtoApp').controller('customersEditCtrl', customersEditCtrl);
})();