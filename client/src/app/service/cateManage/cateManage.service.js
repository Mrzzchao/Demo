(function() {
  'use strict';

  angular
    .module('client')
    .service('cateManage', cateManage);

  /** @ngInject */
  function cateManage($http, $state, $timeout) {
    var cateUrl = '/commodity/list';
    var haveGood = true; // 是否有商品
    var cateTitle = { // 路径导航
      description: "通讯工具",
      name: "手机数码",
      good: 'IPhone7 Plus'
    };
    var cateData = []; // 类别商品数据
    var errorMsg = ''; // 错误显示

    var cateMsg = [{ // 类别信息
      description: "化装类用品",
      id: "23dc4d38c3504e388e283cdd28be14bd",
      name: "个护美妆清洁用品",
      icoUrl: 'assets/images/home/gehumeizhuang.jpg'
    }, {
      description: "衣服穿用类",
      id: "32bc90a954164f04bf6554645d564c3a",
      name: "服装鞋冒箱包",
      icoUrl: 'assets/images/home/clothing.jpg'
    }, {
      description: "家居产品",
      id: "8907d7fcd5704c45b91717fb29eb1d4e",
      name: "家居生活服务",
      icoUrl: 'assets/images/home/jiaju.jpg'
    }, {
      description: "家用电器类别",
      id: "8f04a785b7e242a0b594dd21d8445dcf",
      name: "家用电器",
      icoUrl: 'assets/images/home/jiayongdianqi.jpg'
    }, {
      description: "食用用品类",
      id: "9395c022903e4dc4a7114547ecaecc31",
      name: "食品酒饮生鲜特产",
      icoUrl: 'assets/images/home/food.jpg'
    }, {
      description: "办公类用品",
      id: "aef2c80737324d23aeb6a7c25a216c7a",
      name: "电脑办公",
      icoUrl: 'assets/images/home/computer.jpg'
    }, {
      description: "母婴用具类",
      id: "fb41306b15934d74abaf5ff7d6a2b37b",
      name: "母婴玩具",
      icoUrl: 'assets/images/home/muying.jpg'
    }, {
      description: "通讯工具",
      id: "fd30ee5aeec74d4582ae933fde6d1b7a",
      name: "手机数码",
      icoUrl: 'assets/images/home/phone.jpg'
    }];

    function testConn(id) {
      var data = {
        id: '23dc4d38c3504e388e283cdd28be14bd'
      };
      data = $.param(data);
      $http.post(cateUrl, data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).success(function(res) {
        haveGood = false;
        submitConn(id);
      }).error(function(res) {
        console.log('haveGood is');
        haveGood = true;
        console.log(haveGood);
        submitConn(id);
      });
    }

    function submitConn(id) {
      if (!haveGood) {
        (function() {
          console.log(id);
          id = $.param(id);
          console.log(id);
          $http.post(cateUrl, id, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }).success(function(result) {
            if (result != null) {
              console.log('result1:');
              console.log(result);
              cateData = result;
              haveGood = true;
              successCate();
            } else {
              console.log('result2:');
              console.log(result);
              errorMsg = '未找到商品';
              haveGood = false;
              successCate();
            }
          }).error(function(result) {
            console.log('result3:');
            console.log(result);
            errorMsg = '服务器错误';
            haveGood = false;
            $timeout(function() {
              $state.go('category', {}, {
                reload: true
              });
            }, 1000);
          });
        })();
      } else {
        successCate();
      }

      function successCate() {
        $timeout(function() {
          console.log('timeout');
          $state.go('category', {}, {
            reload: true
          });
        }, 1000);
      }
    }
    return {
      getCateMsg: function() {
        return cateMsg;
      },
      queryCateData: function(id) {
        console.log('test');
        console.log(haveGood);
        testConn(id);

      },
      getCateData: function() {
        return cateData;
      },
      getCateTitle: function() {
        return cateTitle;
      },
      setCateTitle: function(obj) {
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            cateTitle[key] = obj[key];
          }
        }
      },
      getHaveGood: function() {
        return haveGood;
      },
      getErrorMsg: function() {
        return errorMsg;
      },
      setCateData: function(data) {
        console.log('the data is ');
        console.log(data);
        haveGood = true;
        cateData = data;
        $timeout(function() {
          console.log('timeout');
          $state.go('category', {}, {
            reload: true
          });
        }, 1000);
      }
    };
  }

})();
