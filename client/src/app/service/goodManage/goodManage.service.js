(function() {
  'use strict';

  angular
    .module('client')
    .service('goodManage', goodManage);

  /** @ngInject */
  function goodManage($state, cateManage) {
    var goodData = {};
    var defaultData = {
      commodity: {
        path: 'jasmine.png',
        name: "闪迪（SanDisk）U盘3.0 CZ48/32G",
        description: "U盘",
        originalPrice: 55,
        vipPrice: 51,
        startDegree: 5,
        comment: 0
      },
      photo: [
        'jasmine.png',
        'browsersync.png',
        'yeoman.png',
        'node-sass.png'
      ],
      msgPhoto: [
          'jasmine.png',
          'browsersync.png',
          'yeoman.png',
          'node-sass.png'
      ],
      category: "电脑办公"
    }
    return {
      getGoodData: function() {
        return goodData;
      },
      setGoodData: function(data) {
        goodData = data;
        cateManage.setCateTitle({             // 设置路径导航
            description: data.commodity.description,
            name: data.category,
            good: data.commodity.name
        });
         $state.go('good');
      },
      getDefaultData: function() {
        return defaultData;
    }
    };
  }

})();
