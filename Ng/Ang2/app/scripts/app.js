'use strict';

/**
 * @ngdoc overview
 * @name ang2App
 * @description
 * # ang2App
 *
 * Main module of the application.
 */
angular
  .module('ang2App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
