(function() {
  'use strict';

  angular
    .module('client')
    .directive('changeHtml', changeHtml);

  /** @ngInject */
  function changeHtml() {
    //   console.log('haha');
    var directive = {
      restrict: 'AE',
      link: linkFunc
    };

    return directive;

    /** @ngInject */
    function linkFunc(scope, elem, attrs, ctrl) {
        var loginMsg = attrs.changeHtml;
        // console.log(attrs);
        elem.html(loginMsg);
        // console.log(loginMsg);
        // console.log(scope);
    }
  }

})();
