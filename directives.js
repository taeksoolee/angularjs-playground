angular.module('todo').directive('todoTitle', function(){
  return {
    template: '<h1>Todo list</h1>'
    
  }
});

angular.module('todo').directive('todoItem', function(){
  return{
    templateUrl: 'todoItem.tpl.html'
  }
});

angular.module('todo').directive('todoFilter', function(){
  return {
    templateUrl: 'todoFilter.tpl.html'
  }
});

angular.module('todo').directive('todoForm', function(){
  return{
    templateUrl: 'todoForm.tpl.html'
  }
});