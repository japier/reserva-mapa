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
      new : function(id){
        return {
          "id":id,
          "x":"10",
          "y":"10",
          "w":"0",
          "h":"0",
          "color":0,
          "color2":0
        }
      }
    };
  });
