(function() {
  'use strict';

  angular
    .module('client')
    .controller('CategoryController', CategoryController);

  /** @ngInject */
  function CategoryController($scope, $state, cateManage, goodManage) {
    var data = cateManage.getCateData();
    $scope.col = 'name';
    $scope.desc = true;
    $scope.cateTitle = cateManage.getCateTitle();
    $scope.haveGood = cateManage.getHaveGood();
    $scope.goods = (data.length != 0 ? data : $scope.goodData);
    console.log('this length is:');
    console.log(data.length);
    console.log('the goods is :');
    console.log($scope.goods);
    $scope.errorMsg = cateManage.getErrorMsg();
    console.log(cateManage.getErrorMsg());

    $scope.setGoodData = function(data) { 
        goodManage.setGoodData(data);
    }

    $scope.getNumber = function(num) {        // 生成数组，星星评价
      return new Array(num);
    }
  }
})();
