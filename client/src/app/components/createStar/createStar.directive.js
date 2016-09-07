(function() {
  'use strict';

  angular
    .module('client')
    .directive('createStar', createStar);

  /** @ngInject */
  function createStar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/createStar/createStar.tpl.html',
      controller: CreateStarController,
      scope: {
          countStar: '=countStar'
      },
      link: linkFunc
    };

    return directive;

    /** @ngInject */
    function CreateStarController($scope) {
        $scope.getNumber = function(num) {
          return new Array(num);
        }
        $scope.good = $scope.$parent.good;
    }

    function linkFunc(scope) {
        alert(scope.countStar);
    }
  }

})();
