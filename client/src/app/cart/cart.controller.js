(function() {
  'use strict';

  angular
    .module('client')
    .controller('CartController', CartController);

  /** @ngInject */
  function CartController($scope, $state, orderManage, goodManage) {
    var self = this;
    var data = orderManage.getOrder();
    self.priceAll = 0;
    $scope.selectOne = false;
    $scope.selectAll = false;
    $scope.orders = data.length != 0 ? data : orderManage.getDefaultData();
    console.log($scope.orders);
    console.log($scope.orders[0].good.photo[0]);
    self.setGoodData = function(data) {
      goodManage.setGoodData(data.good);
    }

    // 增加数量
    $scope.countAdd = function(order) {
        order.count++;
        orderManage.clearOrder();
        orderManage.setOrder($scope.orders);
        setPriceAll();
      }
      // 减少数量
    $scope.countSub = function(order) {
        order.count--;
        orderManage.clearOrder();
        orderManage.setOrder($scope.orders);
        setPriceAll();
      }
      // 设置购买标志
    $scope.setIsBuy = function(order, flag) {
      order.isBuy = flag;
      orderManage.clearOrder();
      orderManage.setOrder($scope.orders);
      setPriceAll();
    }

    // 全选购买
    $scope.setBuyAll = function(flag) {
      $scope.selectOne = flag;            // 让全选与单选同步
      $scope.orders.forEach(function(ele) {
        ele.isBuy = flag;
      });
      orderManage.clearOrder();
      orderManage.setOrder($scope.orders);
      setPriceAll();
    //   console.log($scope.orders);
    }

    // 提交到下一步
    $scope.orderStep1 = function() {
        if(orderManage.getBuyOrder().length != 0) {
            $state.go('order');
        }
    }

    // 删除订单
    $scope.delete = function(idx) {
        $scope.orders = $scope.orders.splice(idx+1, 1);
        orderManage.setOrder($scope.orders);
        // console.log('the new orders is');
        // console.log($scope.orders);
    }

    function setPriceAll() {
      self.priceAll = orderManage.getPriceAll();
    //   console.log('this priceAll is');
    //   console.log(self.priceAll);
    }
  }
})();
