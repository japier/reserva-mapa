'use strict';

/**
 * @ngdoc service
 * @name thtReservaMapaApp.mesa
 * @description
 * # mesa
 * Service in the thtReservaMapaApp.
 */
angular.module('thtReservaMapaApp')
  .factory('Mesa', function () {
    return {
      new : function(){
        return {
          "id":'',
          "x":"0",
          "y":"0",
          "w":"10",
          "h":"10",
          "color":0,
          "color2":0
        }
      }
    };
  });
