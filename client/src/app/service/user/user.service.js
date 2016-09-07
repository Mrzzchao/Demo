(function() {
  'use strict';

  angular
    .module('client')
    .service('user', user);

  /** @ngInject */
  function user() {
      var data = {
          username: '',
          password: '',
          status: 0     // 0 未登录， 1 已登录
      }

      return {
          getData: function() {
              return data;
          },
          setUser: function(username, password) {
              data.username = username;
              data.password = password;
          },
          setStatu: function(status) {
              data.status = status;
          },
          getStatus: function() {
              return data.status;
          }
      }
  }

})();
