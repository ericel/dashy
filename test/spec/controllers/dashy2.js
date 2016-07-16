'use strict';

describe('Controller: Dashy2Ctrl', function () {

  // load the controller's module
  beforeEach(module('dashyAppApp'));

  var Dashy2Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Dashy2Ctrl = $controller('Dashy2Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Dashy2Ctrl.awesomeThings.length).toBe(3);
  });
});
