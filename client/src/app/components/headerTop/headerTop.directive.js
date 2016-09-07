(function() {
  'use strict';

  angular
    .module('client')
    .directive('headerTop', headerTop);

  /** @ngInject */
  function headerTop() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/headerTop/headerTop.tpl.html',
      controller: HeaderTopController
    };

    return directive;

    // headerTop.$inject = ['$scope', 'user'];

    /** @ngInject */
    function HeaderTopController($scope, user) {
        var data = user.getData();
        if(data.status === 0) {
            $scope.loginMsg = '<a href="#/login">登录</a><a href="#/register">注册</a>'
        }
        else {
            $scope.loginMsg = '<span class="welcome" > 欢迎您，尊贵的' + data.username  + '</span> <a href="#/register">   注册新用户</a>';
        }
    }
  }

})();
