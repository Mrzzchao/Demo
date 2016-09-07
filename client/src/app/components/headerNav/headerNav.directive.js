(function() {
  'use strict';

  angular
    .module('client')
    .directive('headerNav', headerNav);

  /** @ngInject */
  function headerNav() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/headerNav/headerNav.tpl.html',
      controller: HeaderNavController
    };

    return directive;

    /** @ngInject */
    function HeaderNavController($scope, cateManage, $state) {
        $scope.cateMsg = cateManage.getCateMsg();
        $scope.getCateData = function(cate) {
            console.log('cata id is ');
            console.log(cate.id);
            cateManage.queryCateData({id:cate.id});    // 请求分类数据
            cateManage.setCateTitle({             // 设置路径导航
                description: cate.description,
                name: cate.name
            });
        };
    }
  }

})();
