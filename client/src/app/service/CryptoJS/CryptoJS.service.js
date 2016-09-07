(function() {
  'use strict';

  angular
    .module('client')
    .service('CryptoJS', CryptoJS);

  /** @ngInject */
  function CryptoJS() {
    //加密模块
    return window.CryptoJS;
  }
})();
