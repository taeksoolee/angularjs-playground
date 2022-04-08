function setController(app) {
  app
  .controller(
    'TodoCtrl', 
    [
      '$scope', 'todoStorage', 
      async function($scope, todoStorage) {
        console.log($scope, todoStorage.get());
        $scope.todos = todoStorage.get();

        $scope.remove = (todo) => {
          todoStorage.remove(todo);
        }

        $scope.add = (title) => {
          todoStorage.add(title);
          // view control
          $scope.newTodoTitle = "";

          $scope.todos = todoStorage.get();
        }

        $scope.update = () => {
          todoStorage.update();
        }
      }
    ],
  );
}