'use strict';

describe('Controller: Dashy3Ctrl', function () {

  // load the controller's module
  beforeEach(module('dashyAppApp'));

  var Dashy3Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Dashy3Ctrl = $controller('Dashy3Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Dashy3Ctrl.awesomeThings.length).toBe(3);
  });
});
