(function() {
  'use strict';

  angular
    .module('client')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {                    // 主页
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('register', {                // 注册
          url:'/register',
          templateUrl: 'app/register/register.html',
          controller: 'RegisterController'
      })
      .state('login', {                   // 登录
          url:'/login',
          templateUrl: 'app/login/login.html',
          controller: 'RegisterController'
      })
      .state('good', {                    // 商品
          url:'/good',
          templateUrl: 'app/good/good.html',
          controller: 'RegisterController'
      })
      .state('category', {                // 分类
          url:'/category',
          templateUrl: 'app/category/category.html',
          controller: 'RegisterController'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
