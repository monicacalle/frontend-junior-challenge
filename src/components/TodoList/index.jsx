import TodoListItem from "components/TodoListItem";
import { getTasks } from "features/tasks/taskSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./styles.css";

let todoItemKey = 1;
const TodoList = () => {
  const { list } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);
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
        {list?.length &&
          list.map((task) => <TodoListItem task={task} key={todoItemKey++} />)}
      </div>
      {!list?.length && (
        <div className="no-todos">
          Looks like you&apos;re absolutely free today!
        </div>
      )}
    </div>
  );
};

export default TodoList;
