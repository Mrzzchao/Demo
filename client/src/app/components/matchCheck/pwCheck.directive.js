(function() {
  'use strict';

  angular
    .module('client')
    .directive('pwCheck', pwCheck);

  /** @ngInject */
  function pwCheck() {
    var directive = {
      require: 'ng-Model',
      restrict: 'AE',
      link: linkFunc
    };

    function linkFunc(scope, elem, attrs, ctrl) {
      console.log(attrs);
      var firstPassword = '#' + attrs.name;
      var confirmPassword = '#' + attrs.pwCheck;
      console.log(elem);
      //鼠标离开触发验证事件
      //有人会问假如我用$(elem).add也是对的，的确，其实elem就是jquery对象，所以两种就对
      //可以通过 elem instanceOf jQuery 看返回结果是否为true来判别
      elem.add(firstPassword).on('mouseout', function() {
        scope.$apply(function() {
          ctrl.$setValidity('pwmatch', $(confirmPassword).val() === $(firstPassword).val());
        });
      });
    }
    return directive;
    /** @ngInject */
  }

})();
