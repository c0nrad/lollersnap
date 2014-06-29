'use strict';

describe('Service: Snap', function () {

  // load the service's module
  beforeEach(module('lollersnapsApp'));

  // instantiate service
  var Snap;
  beforeEach(inject(function (_Snap_) {
    Snap = _Snap_;
  }));

  it('should do something', function () {
    expect(!!Snap).toBe(true);
  });

});
