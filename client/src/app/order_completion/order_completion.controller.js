(function() {
  'use strict';

  angular
    .module('client')
    .controller('Order_completionController', Order_completionController);

  /** @ngInject */
  function Order_completionController($scope, orderManage) {
      $scope.result = orderManage.getResultMsg();
      console.log($scope.result);
  }
})();
