(function() {
  'use strict';

  angular
    .module('client')
    .controller('OrderController', OrderController);

  /** @ngInject */
  function OrderController($scope, orderManage, pattern) {
    var self = this;
    var data = orderManage.getBuyOrder();        // 获得购买清单
    console.log('the buy is');
    console.log(data);
    $scope.pattern = pattern;
    self.logistics = {
      name: '',
      province: '',
      detail: '',
      phone: '',
      tel: ''
    }
    self.priceAll = 0;
    self.orders = data.length != 0 ? data : orderManage.getDefaultData();
    orderManage.setOrder(self.orders);
    self.priceAll = orderManage.getPriceAll();

    self.submitOrder = function() {                  // 封装订单提交格式
      var orderData = self.orders.map(function(ele) {
        return {
          id: ele.good.commodity.id,
          count: ele.count,
          originalPrice: ele.good.commodity.originalPrice
        }
      });
      var submitData = {
        good: orderData,
        logistics: self.logistics
      };
      orderManage.setSubmitData(submitData);
      console.log('submitData is');
      console.log(submitData);
    }

    console.log(self.priceAll);
    console.log('the buy order is ');
    console.log(self.orders);
  }
})();
