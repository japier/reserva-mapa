'use strict';

/**
 * @ngdoc function
 * @name thtReservaMapaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the thtReservaMapaApp
 */
angular.module('thtReservaMapaApp')
  .controller('AboutCtrl', function ($scope) {

    $scope.drop = function(event, element){
      console.log('drop');
      console.log(element);

      $('.block').css('left',element.position.left);
    };
    $scope.name = "hola";
  });
