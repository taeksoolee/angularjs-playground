function setDirectives(app) {
  // directiveHelper
  const dh = { 
    // templateURL 설정
    sourceMap: {
      todoItem: 'todoItem',
      todoFilter: 'todoFilter',
      todoForm: 'todoForm',
      todoList: 'todoList',
    },
    _template_prefix: '../templates/',
    _teamplte_sufix: '.tpl.html',
    generateTemplate(key) {
      if(!this.sourceMap[key]) {
        throw new Error('throw in setDirectives :: unknown templateType');
      }

      return {
        templateUrl: this._template_prefix 
                    + this.sourceMap[key] 
                    + this._teamplte_sufix,
      }
    },
    // template 설정
    htmls: [
      ['todoTitle', '<h1>Todo list</h1>'],
    ],
    generateHTML(template) {
      return {
        template,
      }
    }
  }

  for(const html of dh.htmls) {
    app.directive(html[0], () => (dh.generateHTML(html[1])));
  }

  for(const key in dh.sourceMap) {
    app.directive(key, () => (dh.generateTemplate(key)));
  }
}