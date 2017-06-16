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
    $scope.deleteAllCustomers = function () {
      if (popupService.showPopup('Really delete ALL Customers? There is no magic seed button..')) {
        // customers.$delete(function () {
        //   $window.location.href = '';
        // });
      }
    };
  }

  function customersViewCtrl($scope, $stateParams, Customer) {
    Customer.get({ id: $stateParams.id })
      .$promise.then(function (customer) {
        $scope.customer = customer
      })
  }

  function customersCreateCtrl($scope, $state, $stateParams, Customer) {
    $scope.customer = new Customer();

    $scope.addCustomer = function () {
      $scope.customer.$save(function () {
        $state.go('customers');
      }, function () {
        $scope.formMessage = 'Problem saving new customer.'
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
    // var customers = Customer.query({ id: $stateParams.id }, function () {
    //   var customer = customers[0];
    //   $scope.customer = customer;
    // });

    $scope.loadCustomer();

    $scope.updateCustomer = function () {
      $scope.customer.$update(function () {
        $state.go('customers')
      })
    }
  }


  angular.module('gtoApp').controller('customersCreateCtrl', customersCreateCtrl);
  angular.module('gtoApp').controller('customersListCtrl', customersListCtrl);
  angular.module('gtoApp').controller('customersViewCtrl', customersViewCtrl);
  angular.module('gtoApp').controller('customersEditCtrl', customersEditCtrl);
})();