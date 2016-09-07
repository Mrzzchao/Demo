(function() {
  'use strict';

  angular
    .module('client')
    .directive('tipBox', tipBox);

  /** @ngInject */
  function tipBox() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/tipBox/tipBox.tpl.html',
      controller: TipBoxController
    };

    return directive;

    // TipBoxController.$inject = ['$scope', '$interval', '$timeout', '$window', '$state'];

    /** @ngInject */
    function TipBoxController($scope, $interval, $timeout, $window, $state) {
      console.log('tipbox');

      $scope.clearTimer = function(timer) {
          console.log($scope.toUrl);
          $interval.cancel(timer);
          $timeout(function() {
              $state.go($scope.toUrl);
          },1000);
          $('#mymodal').modal('hide');

      }
    }
  }

})();
