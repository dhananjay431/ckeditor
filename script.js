angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this;
    todoList.data = new Date().getTime();
  });