import TodoListItem from "components/TodoListItem";

import "./styles.css";

const TodoList = () => {
  // const handleDelete = (todoId) => {
  //   // Fix an ability to delete task
  // };

  // const toggleCheck = (todoId, isChecked) => {
  //   // Fix an ability to toggle task
  // };

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      <div className="todo-list-content">
        <TodoListItem />
      </div>
      <div className="no-todos">
        Looks like you&apos;re absolutely free today!
      </div>
    </div>
  );
};

export default TodoList;
