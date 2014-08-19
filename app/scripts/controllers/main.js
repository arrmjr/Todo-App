'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = ['Item 1','Item 2','Item 3','Item 4'];
    $scope.addTodo = function(){
  	  $scope.todos.push($scope.todo);
  	  $scope.todo = '';
    };
    $scope.removeTodo = function (index) {
  	  $scope.todos.splice(index, 1);
	};
  });
