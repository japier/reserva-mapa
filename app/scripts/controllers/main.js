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
    $scope.create = false;
    $scope.currentMesa = {};
    $scope.mesas = [
    ];
    $scope.sideVisible = function(){
      return !_.isEmpty($scope.currentMesa);
    };
    $scope.drop = function(event, element){
      $(element.draggable[0]).css('left',element.position.left);
      $(element.draggable[0]).css('top',element.position.top);
      var mesa = _.find($scope.mesas, {"id":element.draggable[0].id});
      mesa.x = element.position.left;
      mesa.y = element.position.top;
      $scope.currentMesa = mesa;
    };
    $scope.save = function() {
      if(_.isUndefined(_.find($scope.mesas, {id:$scope.currentMesa.id}))) {
        $scope.mesas.push($scope.currentMesa);
        $scope.create = false;
      };
    };
    $scope.addButton = function() {
      $scope.create = true;
      $scope.currentMesa = Mesa.new();
    };
  });
