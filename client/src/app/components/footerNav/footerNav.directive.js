(function() {
  'use strict';

  angular
    .module('client')
    .directive('footerNav', footerNav);

  /** @ngInject */
  function footerNav() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/footerNav/footerNav.tpl.html',
      controller: FootNavController
    };

    return directive;

    /** @ngInject */
    function FootNavController(moment) {

    }
  }

})();
