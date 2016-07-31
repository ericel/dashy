'use strict';

/**
 * @ngdoc service
 * @name dashyAppApp.employees
 * @description
 * # employees
 * Service in the dashyAppApp.
 */
angular.module('dashyAppApp')
  .service('employees', function () {
    this.getEmployees = function() {
      return $.get( './data/employee.json' );
    };
    this.getEmployees01 = function() {
      return $.get( './data/employee01.json' );
    };
  });
