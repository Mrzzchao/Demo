(function() {
  'use strict';

  angular
    .module('client')
    .controller('GoodController', GoodController);

  /** @ngInject */
  function GoodController($scope, $state, cateManage, goodManage, orderManage, user) {
    var self = this;
    self.goodNum = 1;
    self.good = $.isEmptyObject(goodManage.getGoodData()) ? goodManage.getDefaultData() : goodManage.getGoodData();
    self.cateTitle = cateManage.getCateTitle();
    self.mainImageUrl = self.good.photo[0];

    $scope.toShow = false; // 提示框显示标志
    $scope.msg = '';

    $scope.getNumber = function(num) {
      return new Array(num);
    }

    self.setImage = function setImage(imageUrl) {
      self.mainImageUrl = imageUrl;
    };

    // 添加商品到订单
    self.addCart = function() {
        if(user.getStatus() === 0) {
            $state.go('login');
        }
        else {
            orderManage.addOrder(self.good, self.goodNum);
            $scope.msg = '已成功添加商品到订单';
            $('#mymodal').modal('show');

        }
    }

    // 立即购买
    self.buy = function() {
        if(user.getStatus() === 0) {
            $state.go('login');
        }
        else {
            (function() {
                var obj = {
                  good: self.good,
                  count: self.goodNum,
                  isBuy: true
                };
                console.log(obj);
                orderManage.addBuyOrder(obj);
                $state.go('order');
            })();
        }
    }

    // 评论
    self.pingluns = [{
      name: '张三',
      pingfen: 8,
      detail: '很不错，下次不买了',
      time: '[2016-06-21]'
    }, {
      name: '张三',
      pingfen: 8,
      detail: '很不错，下次不买了',
      time: '[2016-06-21]'
    }, {
      name: '张三',
      pingfen: 8,
      detail: '很不错，下次不买了',
      time: '[2016-06-21]'
    }, {
      name: '张三',
      pingfen: 8,
      detail: '很不错，下次不买了',
      time: '[2016-06-21]'
    }, {
      name: '张三',
      pingfen: 8,
      detail: '很不错，下次不买了',
      time: '[2016-06-21]'
    }, {
      name: '张三',
      pingfen: 8,
      detail: '很不错，下次不买了',
      time: '[2016-06-21]'
    }, {
      name: '张三',
      pingfen: 8,
      detail: '很不错，下次不买了',
      time: '[2016-06-21]'
    }]

  }
})();
