(function() {
  'use strict';

  angular
    .module('client')
    .controller('RegisterController', RegisterController);

  // RegisterController.$inject = ['$scope', '$http', '$interval', '$timeout', '$window', 'extend', 'pattern', 'user'];
  /** @ngInject */
  function RegisterController($scope, $http, $interval, $timeout, $window, $state, extend, pattern, user) {
    var baseUrl = '/user';
    var isMe = false; // 判断服务器是否存在
    var count = 3;        // 倒计时
    console.log(pattern);
    if (user.getData().status === 1) {
      $scope.loginMsg = '' // 登录后
    } else {
      $scope.loginMsg = '已注册，请<a href="#/login" >登录&gt;</a>'
    }
    $scope.pattern = pattern; // 验证
    $scope.regForm = {}; // 注册表单
    $scope.logForm = {}; // 登录表单
    $scope.codeUrl = baseUrl + '/verification'; // 验证码路径
    $scope.codeShow = false; // 验证码错误显示
    $scope.msg = ''; // 提交后显示信息
    $scope.toShow = false; // 直接进入显示
    $scope.toUrl = 'login'; // 跳转链接
    $scope.user = { // 表单信息
      username: '',
      password: '',
      captcha: ''
    }

    // 加入找不到，就用默认的验证码图
    $http.get($scope.codeUrl).error(function(result) {
      $scope.codeUrl = 'assets/images/home/YZM.png';
    });

    $http.get(baseUrl + '/register').error(function(result) {
      isMe = true;
    });

    // 注册
    $scope.signup = function() {

      if (isMe) {
        successRegister();
      } else {
        (function() {
          var tmp = {};
          var dataStr = '';
          extend(tmp, $scope.user);
          delete tmp.repeatPassword;
          dataStr = $.param(tmp);
          $http.post(baseUrl + '/register', dataStr, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }).success(function(data) {
            if (data.err) {
              if (data.err.code) {
                $scope.codeShow = true;
              } else {
                $scope.msg = data.err.name;
                $('#mymodal').modal('show');
              }
              //   console.log(data);

            } else {
              successRegister();
            }

          }).error(function(data) {
            $scope.msg = '未知错误, 请重试';
            $('#mymodal').modal('show');

          });
        })();
      }
    }

    // 验证码
    $scope.changeCode = function() {
      console.log($scope.codeUrl);
      var tmp = $scope.codeUrl.split('?')[0];
      $scope.codeUrl = tmp + '?' + Math.random();
    }

    function successRegister() {
      $scope.logForm.username = $scope.regForm.username;
      $scope.logForm.password = $scope.regForm.password;
      user.setUser($scope.user.username, $scope.user.password);


      $scope.msg = '注册成功, ' + 　count + '秒后自动跳转登录页面';
      $scope.toShow = true;
      $('#mymodal').modal('show');
      var timer = $interval(function() {
        $scope.msg = '注册成功, ' + 　count + '秒后自动跳转登录页面';
        if (count === 0) {
          $interval.cancel(timer);
        }
        count--;
        console.log(count);
        if (count === -1) {
          $timeout(function() {
            $state.go('login');
          }, 1000);
          $('#mymodal').modal('hide');
        }
      }, 1000);
      console.log(count);
    }

  }
})();
