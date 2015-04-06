'use strict';

/**
 * @ngdoc overview
 * @name thtReservaMapaApp
 * @description
 * # thtReservaMapaApp
 *
 * Main module of the application.
 */
angular
  .module('thtReservaMapaApp', [
    'ngAnimate',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
