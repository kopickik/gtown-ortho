(function () {
  'use strict';

  function ErrorsService() {
    var errList = [];

    function addError(newError) {
      errList.push(newError);
    }

    function getErrors() {
      return errList;
    }

    function purgeErrors(errList) {
      errList = [];
      return null;
    }

    return {
      addError: addError,
      getErrors: getErrors,
      purgeErrors: purgeErrors
    }
  }

  angular.module('gtoApp').service('Errors', ErrorsService);
})()