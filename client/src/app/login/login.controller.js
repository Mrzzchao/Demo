(function() {
    'use strict';

    angular
      .module('client')
      .controller('LoginController', LoginController);

    // LoginController.$inject = ['$scope', '$http', '$interval', '$timeout', '$window', 'extend', 'pattern', 'user'];

    /** @ngInject */
    function LoginController($scope, $http, $interval, $timeout, $window, $state, extend, pattern, user) {
      var baseUrl = '/user';
      var isMe = false;      // 判断服务器是否存在
      var count = 3;        // 倒计时
      $scope.msg = '';
      $scope.toShow = false;
      $scope.toUrl = 'home';
      $scope.pattern = pattern;
      $scope.user = user.getData();


      $http.get(baseUrl + '/login').error(function(result) {
          isMe = true;
      });

      // 登录
      $scope.signin = function() {
          if(isMe) {
              successLogin();
          }
          else {
              (function() {
                  var tmp = {};
                  var dataStr = '';
                  extend(tmp, $scope.user);
                  dataStr = $.param(tmp);
                  $http.post(baseUrl + '/login', dataStr, {
                      headers: {
                          'Content-Type': 'application/x-www-form-urlencoded'
                      }
                  }).success(function(data) {
                      if (data.err) {
                          $scope.msg = data.err;
                          console.log(data);
                          $('#mymodal').modal('show');

                      } else {
                          successLogin();
                      }

                  }).error(function(data) {
                      $scope.msg = '未知错误, 请重试';
                      $('#mymodal').modal('show');
                  });
              })();

          }
      }

      function successLogin() {
          user.setStatu(1);
          $scope.msg = '登录成功, ' + 　count + '秒后自动跳转主页面';
          $scope.toShow =true;
          $('#mymodal').modal('show');
            $scope.timer = $interval(function() {
                $scope.msg = '登录成功, ' + 　count + '秒后自动跳转主页面';
                if (count === 0) {
                    $interval.cancel($scope.timer);

                }
                count--;
                console.log(count);
                if(count === -1) {
                    $timeout(function() {
                        $state.go('home');
                    },1000);
                    $('#mymodal').modal('hide');
                }
            }, 1000);
            console.log(count);
      }
    }
})();
