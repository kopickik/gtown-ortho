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

  function customersViewCtrl($scope, $state, $stateParams, Customer, AlertsService) {
    Customer.get({ customerId: $stateParams.id })
      .$promise.then(function (customer) {
        $scope.customer = customer
        $scope.$parent.$broadcast('customerFetchedSuccessfully', customer)
      }, function() {
        AlertsService.add('danger', 'Error fetching Customer.', 'exclamation-circle', 1500)
      })
  }



  function customersCreateCtrl($scope, $state, Customer, AlertsService) {
    $scope.customer = new Customer()
    $scope.phoneRegex = /(?:(\+?\d{1,3}) )?(?:([\(]?\d+[\)]?)[ -])?(\d{1,5}[\- ]?\d{1,5})/g

    $scope.addCustomer = function () {
      $scope.customer.$save(function (resp) {
        // success callback
        $state.go('customers', resp)
      }, function (resp) {
      });
    };
  }





  function customersEditCtrl($scope, $stateParams, Customer, AlertsService) {
    $scope.$on('customerFetchedSuccessfully', function(e, data) {
      console.log(data);
    });
    $scope.customer = Customer.get({customerId: $stateParams.id});
    $scope.updateCustomer = (customer) => {
      customer.$update(function(data, callback, status) {
        if (status === 200) {
          AlertsService.add('success', 'Updated customer.', 'thumbs-up', 1500)
        }
      })
    }
  }

  // function customersEditCtrl($scope, $stateParams, Customer) {
  //   const customer = Customer.get({ customerId: $stateParams.id })
  //   const idParam = customer.id
  //   Customer.$update({id: idParam}, customer)
  // }

  angular.module('dgmApp').controller('customersCreateCtrl', customersCreateCtrl);
  angular.module('dgmApp').controller('customersListCtrl', customersListCtrl);
  angular.module('dgmApp').controller('customersViewCtrl', customersViewCtrl);
  angular.module('dgmApp').controller('customersEditCtrl', customersEditCtrl);
})();