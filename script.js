angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this;
    todoList.data = new Date().getTime();
    todoList.flag = true;
    setInterval(function(){
      todoList.flag = (new Date().getTime()%3 == 0);
      console.log(todoList.flag);
  },1000);
  todoList.get =function(){
     return todoList.flag;
  }
   
  });