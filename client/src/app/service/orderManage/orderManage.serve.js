(function() {
  'use strict';

  angular
    .module('client')
    .service('orderManage', orderManage);

  /** @ngInject */
  function orderManage($http, $state) {
    var orders = []; // 购物车订单列表
    var submitData = []; // 最后提交的数据
    var buyOrder = []; // 要购买的订单
    var isMe = false; // 判断服务器是否存在
    var orderUrl = '/order/commodity';
    var resultData = { // 返回的结果处理
      cs: '',
      msg: ''
    };

    var tmp = {
      good: [{
        id: '48dd7569e994461ba1ec7439f003452c',
        count: 5,
        originalPrice: 6
      }],
      logistics: {
        name: '张三',
        province: '广东省',
        detail: 'sadf',
        phone: '18825085447',
        tel: '69447'
      }
    };
    tmp = JSON.stringify(tmp);
    $http.post(orderUrl, tmp, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).error(function(res) {
      isMe = true;
    });
    var ordersDefault = [{
      good: {
        commodity: {
          path: 'jasmine.png',
          id: "48dd7569e994461ba1ec7439f003452d",
          name: "闪迪（SanDisk）U盘3.0 CZ48/32G",
          description: "U盘",
          originalPrice: 55,
          vipPrice: 51,
          startDegree: 5,
          comment: 0
        },
        photo: [
          'jasmine.png',
          'browsersync.png',
          'yeoman.png',
          'node-sass.png'
        ],
        msgPhoto: [
          'jasmine.png',
          'browsersync.png',
          'yeoman.png',
          'node-sass.png'
        ],
        category: "电脑办公"
      },
      count: 2,
      isBuy: true,
      logistics: {
        name: '张三',
        province: '广东省',
        detail: '广州市',
        phone: '18825085447',
        tel: '69447'
      }
    }];
    return {
      getOrder: function() {
        return orders;
      },

      // 添加到订单列表
      addOrder: function(data, num) {
        console.log(orders);
        var flag = orders.every(function(ele) {
          if (ele.good.commodity.id === data.commodity.id) {
            ele.count += num;
            return false;
          } else {
            return true;
          }
        });

        if (flag) {
          var obj = {
            good: data,
            count: num,
            isBuy: false
          }
          orders.push(obj);
        }
      },

      // 处理需要立即购买的商品
      addBuy: function(obj) {
        console.log('addBuy');
        console.log(obj);
        orders.push(obj);
      },

      getDefaultData: function() {
        return ordersDefault;
      },
      clearOrder: function() {
        orders = [];
      },
      setOrder: function(data) {
        orders = data;
      },

      // 获得订单总价
      getPriceAll: function() {
        var priceAll = 0;
        orders.forEach(function(ele) {
          if (ele.isBuy) {
            var price = ele.good.commodity.originalPrice * ele.count;
            priceAll += price;
          }
        });
        return priceAll;
      },

      // 获得选择购买的订单
      getBuyOrder: function() {
        if (!buyOrder.length) {
          buyOrder = orders.filter(function(ele) {
            return ele.isBuy;
          });
        }
        return buyOrder;
      },

      // 增加要购买的订单
      addBuyOrder: function(obj) {
        buyOrder = [];
        buyOrder.push(obj);
      },

      // 保存要提交到后台的信息
      setSubmitData: function(data) {
        submitData = data;
        $state.go('pay');
      },

      // 提交订单
      submitData: function(data) {
        if (isMe) {
          successSubmit();
        } else {
          (function() {
            var tmp = JSON.stringify(submitData);
            $http.post(orderUrl, tmp, {
              headers: {
                'Content-Type': 'application/json'
              }
            }).success(function(result) {
              if (result.err) {
                resultData.cs = 'glyphicon glyphicon-remove error';
                resultData.msg = '支付失败！';
                $state.go('order_completion');
              } else {
                console.log('success');
                successSubmit();
              }
            }).error(function(result) {
              console.log('error');
              resultData.cs = 'glyphicon glyphicon-remove error';
              resultData.msg = '服务器错误';
              $state.go('order_completion');
            });
          })();
        }


        function successSubmit() {
          resultData.cs = 'glyphicon glyphicon-ok success';
          resultData.msg = '支付成功！';
          $state.go('order_completion');
        }
      },

      // 获得成功标志
      getResultMsg: function() {
        return resultData;
      }

    }
  }

})();
