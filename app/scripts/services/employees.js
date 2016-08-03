'use strict';

/**
 * @ngdoc service
 * @name dashyAppApp.employees
 * @description
 * # employees
 * Service in the dashyAppApp.
 */
angular.module('dashyAppApp')
  .service('employees', function ($http) {
    this.getEmployees = function() {
      return $http.get( './data/employee.json' );
    };
    this.getCountries = function() {
      return $http.get( './data/countries.csv' );
    };
  });
