(function() {
  'use strict';

  angular
    .module('client')
    .service('extend', extend);

  /** @ngInject */
  function extend() {
    //简单深度复制对象
    return function(dst, src) {
      for (var i in src) {
        dst[i] = src[i];
      }
    };
  }

})();
