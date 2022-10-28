/**
 * Title: Todo reducer actions
 * Description: Execute operations on a todo through local-storage
 * Author: Hasibul Islam
 * Date: 28/10/2022
 */

// add a todo to local-storage
function pushTodo(todo) {
  const todoItems = getTodo();
  todoItems.push(todo);
  localStorage.setItem("simpleTodo", JSON.stringify(todoItems));
}

// get todo from local-storage
function getTodo() {
  let todoItems = [];
  if (localStorage.getItem("simpleTodo"))
    todoItems = JSON.parse(localStorage.getItem("simpleTodo"));
  return todoItems;
}

// delete a todo from local-storage
function popTodo(todoId) {
  const todoItems = JSON.parse(localStorage.getItem("simpleTodo")).filter(
    (todo) => todo._id !== todoId
  );
  localStorage.setItem("simpleTodo", JSON.stringify(todoItems));
}

export { pushTodo, popTodo };
