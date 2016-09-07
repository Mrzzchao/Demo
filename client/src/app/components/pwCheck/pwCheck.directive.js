(function() {
  'use strict';

  angular
    .module('client')
    .directive('pwCheck', pwCheck);

  /** @ngInject */
  function pwCheck() {
    var directive = {
      require: 'ng-Model',
      link: linkFunc
    };

    function linkFunc(scope, elem, attrs, ctrl) {
      var firstPassword = '#' + attrs.pwCheck;
      elem.add(firstPassword).on('keyup', function() {
        scope.$apply(function() {
            var v = true;
            if(elem.val()) {
                v = elem.val() === $(firstPassword).val();
            }
          ctrl.$setValidity('pwmatch', v);
        });
      });
    }
    return directive;
    /** @ngInject */
  }

})();
