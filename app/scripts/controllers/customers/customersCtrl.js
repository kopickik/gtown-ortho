(function () {
  'use strict';
  function customersListCtrl($scope, $rootScope, $state, popupService, $window, Customer, Errors) {
    $scope.customers = Customer.query();
    var errorListener = $rootScope.$on('error:saveError', function (event, data) {
      $scope.errors = true;
      $scope.errorMessage = data;
    });

    $scope.deleteCustomer = function (customer) {
      if (popupService.showPopup('Really delete this?')) {
        customer.$delete(function () {
          $window.location.href = '';
        });
      }
    };

    $scope.$on('destroy', errorListener);
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
      $scope.customer.$save(function (err) {
        if (err) {
          $rootScope.$emit('error:saveError', err)
        }
        $state.go('customers');
      }, function (resp) {
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