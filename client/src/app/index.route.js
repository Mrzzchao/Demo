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
          controller: 'LoginController'
      })
      .state('good', {                    // 商品
          url:'/good',
          templateUrl: 'app/good/good.html',
          controller: 'GoodController',
          controllerAs: 'goodCtrl'
      })
      .state('cart', {                    // 商品
          url:'/cart',
          templateUrl: 'app/cart/cart.html',
          controller: 'CartController',
          controllerAs: 'CartCtrl'
      })
      .state('order', {                    // 订单
          url:'/order',
          templateUrl: 'app/order/order.html',
          controller: 'OrderController',
          controllerAs: 'OrderCtrl'
      })

	  .state('pay', {                    // 支付
          url:'/pay',
          templateUrl: 'app/pay/pay.html',
          controller: 'PayController',
          controllerAs: 'PayCtrl'
      })
	  .state('order_completion', {                    //订单完成
          url: '/order_completion',
          templateUrl: 'app/order_completion/order_completion.html',
          controller: 'Order_completionController',
          controllerAs: 'Order_completionCtrl'
      })
    .state('myorders', {                    //订单完成
          url: '/myorders',
          templateUrl: 'app/myorders/myorders.html',
          controller: 'MyordersController',
          controllerAs: 'MyordersCtrl'
      })
      .state('category', {                // 分类
          url:'/category',
          templateUrl: 'app/category/category.html',
          controller: 'CategoryController',
          controllerAs: 'cateCtrl'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
