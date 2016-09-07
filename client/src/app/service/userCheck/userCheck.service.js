(function() {
  'use strict';

  angular
    .module('client')
    .service('userCheck', userCheck);

  /** @ngInject */
  function userCheck() {
    //检查用户登陆和注册时填写的格式
    function checkUserName(str, minLen, maxLen) {
      var reg = /^[(\u4e00-\u9fa5)a-z][(\u4e00-\u9fa5)a-zA-Z0-9_]{1,20}$/;
      var len = str.length;
      return reg.test(str) && len >= minLen && len <= maxLen;
    }

    function checkEmail(str) {
      var reg = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
      return reg.test(str) && str.length >= 6 && str.length <= 64;
    }

    function checkPhone(str) {
        var reg = /^(13[0-9]|15[0|1|3|6|7|8|9]|18[8|9])\d{8}$/;
        return reg.test(str);
    }

    function checkCode(str) {
        return str === '6T5S';
    }

    return function(form, option) {
      if (!form.username) return '用户名缺省';
      if (!form.password) return '密码缺省';
    //   if (!checkUserName(form.username, 4, 8)) return '用户名格式有误';
      if (!checkPhone(form.username)) return '请输入11位手机号'
      if (!checkUserName(form.password, 6, 20)) return '6-20位字符，可由英文、数字及标点符号组成';
      if (option == 'signup') {
        // if (!form.email) return 'Email缺省';
        if (!form.repeatPassword) return '重复密码缺省';
        // if (!checkEmail(form.email)) return 'Email格式错误';
        if (form.password !== form.repeatPassword) return '密码不一致';

        // if (checkCode(form))
      }
      return null;
    };
  }

})();
