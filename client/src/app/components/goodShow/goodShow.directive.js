(function() {
  'use strict';

  angular
    .module('client')
    .directive('goodShow', goodShow);

  /** @ngInject */
  function goodShow() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/goodShow/goodShow.tpl.html',
      controller: GoodShowController,
      controllerAs: 'goodCtrl'
    };

    return directive;

    /** @ngInject */
    function GoodShowController($scope, $state, goodManage, cateManage) {
      var self = this;
      self.floors = [{
        title: '企业办公',
        name: '1F',
        color: 'floor1',
        color2: 'good-top1'
      }, {
        title: '员工福利',
        name: '2F',
        color: 'floor2',
        color2: 'good-top2'
      }, {
        title: '商务礼赠',
        name: '3F',
        color: 'floor3',
        color2: 'good-top3'
      }];

      $scope.setGoodData = function(data) {
          goodManage.setGoodData(data);
          cateManage.setCateTitle({             // 设置路径导航
              good: data.commodity.name
          });
           $state.go('good');
      }
    }


  }

})();
