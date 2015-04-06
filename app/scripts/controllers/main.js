'use strict';

/**
 * @ngdoc function
 * @name thtReservaMapaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the thtReservaMapaApp
 */
angular.module('thtReservaMapaApp')
  .controller('MainCtrl', function ($scope, Mesa) {
    $scope.name = "hola";
    $scope.mesa = '';
    $scope.currentMesa = {};
    $scope.mesas = [
    ];
    $scope.drop = function(event, element){
      $(element.draggable[0]).css('left',element.position.left);
      $(element.draggable[0]).css('top',element.position.top);
      var mesa = _.find($scope.mesas, {"id":element.draggable[0].id});
      mesa.x = element.position.left;
      mesa.y = element.position.top;
      $scope.currentMesa = mesa;
    };
    $scope.addButton = function() {
      if(_.isUndefined(_.find($scope.mesas, {id:$scope.mesa}))) {
        $scope.mesas.push(Mesa.new($scope.mesa));
      } else {
        //Poner mensaje de repetido
      }
      $scope.mesa = '';
    };
  });
