(function() {
  'use strict';

  angular
    .module('client')
    .controller('IndexController', IndexController);

  /** @ngInject */
  function IndexController($scope, $rootScope) {
    $rootScope.goodData = [{
      commodity: {
        name: "闪迪（SanDisk）U盘3.0 CZ48/32G",
        id: "48dd7569e994461ba1ec7439f003452c",
        description: "U盘",
        originalPrice: 55,
        vipPrice: 51,
        startDegree: 5,
        comment: 87
      },
      photo: [
        'browsersync.png',
        'jasmine.png',
        'yeoman.png',
        'node-sass.png'
      ],
      msgPhoto: [
        'yeoman.png',
        'jasmine.png',
        'browsersync.png',
        'node-sass.png'
      ],
      category: "电脑办公"
    }, {
      commodity: {
        name: "闪迪（SanDisk）U盘3.0 CZ48/32G",
        id: "48dd7569e994461ba1ec7439f003452d",
        description: "U盘",
        originalPrice: 55,
        vipPrice: 51,
        startDegree: 5,
        comment: 5
      },
      photo: [
        'browsersync.png',
        'jasmine.png',
        'yeoman.png',
        'node-sass.png'
      ],
      msgPhoto: [
        'browsersync.png',
        'jasmine.png',
        'yeoman.png',
        'node-sass.png'
      ],
      category: "电脑办公"
    }, {
      commodity: {
        name: "闪迪（SanDisk）U盘3.0 CZ48/32G",
        id: "48dd7569e994461ba1ec7439f003452c",
        description: "U盘",
        originalPrice: 27,
        vipPrice: 51,
        startDegree: 5,
        comment: 16
      },
      photo: [
        'jasmine.png',
        'browsersync.png',
        'yeoman.png',
        'node-sass.png'
      ],
      msgPhoto: [
        'browsersync.png',
        'jasmine.png',
        'node-sass.png',
        'yeoman.png'
      ],
      category: "电脑办公"
    }, {
      commodity: {
        name: "闪迪（SanDisk）U盘3.0 CZ48/32G",
        id: "48dd7569e994461ba1ec7439f003452c",
        description: "U盘",
        originalPrice: 55,
        vipPrice: 51,
        startDegree: 2,
        comment: 5
      },
      photo: [
        'yeoman.png',
        'jasmine.png',
        'browsersync.png',
        'node-sass.png'
      ],
      msgPhoto: [
        'yeoman.png',
        'jasmine.png',
        'browsersync.png',
        'node-sass.png'
      ],
      category: "电脑办公"
    }, {
      commodity: {
        name: "闪迪（SanDisk）U盘3.0 CZ48/32G",
        id: "48dd7569e994461ba1ec7439f003452c",
        description: "U盘",
        originalPrice: 55,
        vipPrice: 51,
        startDegree: 5,
        comment: 7
      },
      photo: [
        'node-sass.png',
        'jasmine.png',
        'browsersync.png',
        'yeoman.png',
      ],
      msgPhoto: [
        'jasmine.png',
        'yeoman.png',
        'browsersync.png',
        'node-sass.png'
      ],
      category: "电脑办公"
    }, {
      commodity: {
        name: "闪迪（SanDisk）U盘3.0 CZ48/32G",
        id: "48dd7569e994461ba1ec7439f003452s",
        description: "U盘",
        originalPrice: 55,
        vipPrice: 51,
        startDegree: 3,
        comment: 5
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
    }, {
      commodity: {
        name: "闪迪（SanDisk）U盘3.0 CZ48/32G",
        id: "48dd7569e994461ba1ec7439f003452b",
        description: "U盘",
        originalPrice: 55,
        vipPrice: 51,
        startDegree: 5,
        comment: 16
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
    }, {
      commodity: {
        name: "闪迪（SanDisk）U盘3.0 CZ48/32G",
        id: "48dd7569e994461ba1ec7439f003452c",
        description: "U盘",
        originalPrice: 55,
        vipPrice: 51,
        startDegree: 3,
        comment: 8
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
    }, {
      commodity: {
        name: "闪迪（SanDisk）U盘3.0 CZ48/32G",
        id: "48dd7569e994461ba1ec7439f003452w",
        description: "U盘",
        originalPrice: 7,
        vipPrice: 42,
        startDegree: 6,
        comment: 8
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
    }, {
      commodity: {
        name: "闪迪（SanDisk）U盘3.0 CZ48/32G",
        id: "48dd7569e994461ba1ec7439f003452s",
        description: "U盘",
        originalPrice: 55,
        vipPrice: 51,
        startDegree: 2,
        comment: 6
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
    }, {
      commodity: {
        name: "闪迪（SanDisk）U盘3.0 CZ48/32G",
        id: "48dd7569e994461ba1ec7439f003452b",
        description: "U盘",
        originalPrice: 62,
        vipPrice: 51,
        startDegree: 1,
        comment: 5
      },
      photo: [
        'browsersync.png',
        'jasmine.png',
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
    }, {
      commodity: {
        name: "闪迪（SanDisk）U盘3.0 CZ48/32G",
        id: "48dd7569e994461ba1ec7439f003452a",
        description: "U盘",
        originalPrice: 23,
        vipPrice: 15,
        startDegree: 10,
        comment: 11
      },
      photo: [
        'browsersync.png',
        'jasmine.png',
        'yeoman.png',
        'node-sass.png'
      ],
      msgPhoto: [
        'browsersync.png',
        'yeoman.png',
        'jasmine.png',
        'node-sass.png'
      ],
      category: "电脑办公"
    }];
  }
})();
