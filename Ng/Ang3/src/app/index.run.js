(function() {
  'use strict';

  angular
    .module('ang3')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
