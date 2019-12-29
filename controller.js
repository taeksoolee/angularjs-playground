angular.module('todo').controller('TodoCtrl', ['$scope', 'todoStorage', function($scope, todoStorage){
  $scope.todos = todoStorage.get();

  
  $scope.remove = todoStorage.remove;
  
  
  $scope.add = function(newTodoTitle){
    todoStorage.add(newTodoTitle);
    // view control
    $scope.newTodoTitle = "";
  };
  
  $scope.update = function(){
    todoStorage.update();
  }
  
}])