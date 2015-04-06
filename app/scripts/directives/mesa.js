'use strict';

/**
 * @ngdoc directive
 * @name thtReservaMapaApp.directive:mesa
 * @description
 * # mesa
 */
angular.module('thtReservaMapaApp')
  .directive('mesa', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the mesa directive');
      }
    };
  });
