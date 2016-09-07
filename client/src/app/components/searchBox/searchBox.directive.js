(function() {
  'use strict';

  angular
    .module('client')
    .directive('searchBox', searchBox);

  /** @ngInject */
  function searchBox() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/searchBox/searchBox.tpl.html',
      controller: SearchBoxController
    };

    return directive;

    /** @ngInject */
    function SearchBoxController($scope, $http, $state, cateManage) {
      var queryUrl = '/commodity/query';
      $scope.query = '';
      $scope.msg = '未查询到相应信息'; // 提交后显示信息
      $scope.toShow = false; // 直接进入显示
      $scope.toUrl = 'good'; // 跳转链接

      $scope.queryGood = function(key) {
        if (key != '') {
          var data = {
            name: key
          };
          data = $.param(data);
          $http.post(queryUrl, data, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }).success(function(result) {
            if (result.err) {
              $scope.msg = '未查询到相应信息';
              $('#mymodal').modal('show');
            } else {
                console.log('the search is ');
                console.log(result);
                cateManage.setCateData(result);
                cateManage.setCateTitle({             // 设置路径导航
                    description: result[0].commodity.description,
                    name: result[0].commodity.name
                });
                $state.go('category');

            }
          }).error(function(result) {
            $scope.msg = '未知错误, 请重试';
            $('#mymodal').modal('show');
          });
        }
      }
    }
  }

})();
