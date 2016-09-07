(function() {
  'use strict';

  angular
    .module('client')
    .directive('shopBox', shopBox);

  /** @ngInject */
  function shopBox() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/shopBox/shopBox.tpl.html',
      controller: ShopBoxController
    };

    return directive;

    /** @ngInject */
    function ShopBoxController($scope) {

        $scope.shop = {
            name: '米米乐商城',
            pingfen: {
                all: 4.7,
                miaoshu: 4.9,
                serve: 4.7,
                speed: 5.0
            },
            contact: {

            },
            address: {
                province: '四川',
                city: '成都',
                area: '武侯区'
            }
        }
    }
  }

})();
