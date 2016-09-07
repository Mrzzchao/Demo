(function() {
  'use strict';

  angular
    .module('client')
    .controller('PayController', PayController);

  /** @ngInject */
  function PayController($scope, $http, orderManage) {
      var self = this;
      var orderUrl = '/order/commodity'
      self.priceAll = orderManage.getPriceAll();
      self.pay = function() {
          orderManage.submitData();          
      };
  }
})();
