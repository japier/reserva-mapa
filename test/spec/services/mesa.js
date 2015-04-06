'use strict';

describe('Service: mesa', function () {

  // load the service's module
  beforeEach(module('thtReservaMapaApp'));

  // instantiate service
  var mesa;
  beforeEach(inject(function (_mesa_) {
    mesa = _mesa_;
  }));

  it('should do something', function () {
    expect(!!mesa).toBe(true);
  });

});
