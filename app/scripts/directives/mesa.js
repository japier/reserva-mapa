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
    templateUrl: '/partials/mesa.html',
    restrict: 'E',
    link: function postLink(scope, element, attrs) {
      scope.$watchGroup(['mesa.x','mesa.y','mesa.h','mesa.w'], function() {
        var style = {
          //'background':scope.bck,
          'width':scope.mesa.w + 'px',
          'height':scope.mesa.h + 'px',
          'top':scope.mesa.y + 'px',
          'left':scope.mesa.x + 'px',
        };
        $('#'+scope.mesa.id).css(style);
      });
    }
  };
});
