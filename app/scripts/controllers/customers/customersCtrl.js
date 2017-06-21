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

  function customersViewCtrl($scope, $stateParams, Customer, Errors) {
    Customer.get({ id: $stateParams.id })
      .$promise.then(function (customer) {
        $scope.customer = customer
      }, function(err) {
        $state.go('customers')
      })
  }

  function customersCreateCtrl($scope, $rootScope, $state, $stateParams, Customer, Errors) {
    $scope.customer = new Customer();

    $scope.addCustomer = function () {
      $scope.customer.$save(function (resp) {
        // success callback
        $state.go('customers', resp)
      }, function (resp) {
         $scope.statusMessage = resp.statusText;
         $scope.status = resp.status;
         $scope.errorMessage = resp.data.messages;
      });
    };

  }

  function customersEditCtrl($scope, $state, $stateParams, Customer) {

    $scope.loadCustomer = function () {
      Customer.get({ id: $stateParams.id })
        .$promise.then(function (customer) {
          $scope.customer = customer
        })
    }

    $scope.loadCustomer();

    $scope.updateCustomer = function () {
      $scope.customer.$update(function (resp) {
        $state.go('customers')
      }, function (resp) {
        Errors.addError(resp.updateError)
      })
    }
  }


  angular.module('gtoApp').controller('customersCreateCtrl', customersCreateCtrl);
  angular.module('gtoApp').controller('customersListCtrl', customersListCtrl);
  angular.module('gtoApp').controller('customersViewCtrl', customersViewCtrl);
  angular.module('gtoApp').controller('customersEditCtrl', customersEditCtrl);
})();