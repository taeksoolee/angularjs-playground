// service(), factory(), provider()

function setServcies(app) {
  app.factory(
    'todoStorage', 
    function(){
      const storageKey = 'TODO_DATA';

      return {
        _todos: [],
        _saveToLocalStorage(d) { localStorage.setItem(storageKey, JSON.stringify(d)); },
        _getFromLocalStorage() { console.log(localStorage.getItem(storageKey) || '[]'); return JSON.parse(localStorage.getItem(storageKey) || '[]')},
        get() {
          // angular.copy(this._getFromLocalStorage(), this._todos);
          let todos = [];
          angular.copy(this._getFromLocalStorage(), todos); // angular hash값을 제외하고 복사한다.
          this._todos = todos
          return todos;
        },
        remove(todo) {
          const findedIdx = this._todos.findIndex((v) => v.title === todo.title);
    
          if(findedIdx > -1) {
            this._todos.splice(findedIdx, 1);
          }
          this._saveToLocalStorage(this._todos);
        },
        add(title) {
          const todo = {
            idx: this._todos.length,
            title: title,
            completed: false,
            createdAt: Date.now(),
          }

          this._todos.push(todo);
          this._saveToLocalStorage(this._todos);
        },
        update() {
          this._saveToLocalStorage(this._todos);
        }
      }
    }
  );
}
