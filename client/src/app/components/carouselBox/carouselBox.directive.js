(function() {
  'use strict';

  angular
    .module('client')
    .directive('carouselBox', carouselBox);

  /** @ngInject */
  function carouselBox() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/carouselBox/carouselBox.tpl.html',
      controller: CarouselBoxController
    };

    return directive;

    /** @ngInject */
    function CarouselBoxController(moment) {

    }
  }

})();
