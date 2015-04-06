'use strict';

describe('Directive: mesa', function () {

  // load the directive's module
  beforeEach(module('thtReservaMapaApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<mesa></mesa>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the mesa directive');
  }));
});
