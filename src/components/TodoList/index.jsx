import TodoListItem from "components/TodoListItem";
import {
  getTasks,
  deleteSelectedTask,
  toggleCheckTask,
} from "features/tasks/taskSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./styles.css";

const TodoList = () => {
  const { list, counter } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  const handleDelete = (todoId) => {
    dispatch(deleteSelectedTask(todoId));
  };

  const toggleCheck = (todoId, isChecked) => {
    dispatch(toggleCheckTask(todoId, isChecked));
    // Fix an ability to toggle task
  };

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      <div className="todo-list-content">
        {list?.length > 0 &&
          list.map((task, index) => (
            <TodoListItem
              task={task}
              key={index}
              onDelete={() => handleDelete(task.id)}
              onCheck={() => toggleCheck(task.id, task.checked)}
              checked={task.checked}
            />
          ))}
      </div>
      {(list?.length === 0 || counter === list.length) && (
        <div className="no-todos">
          Looks like you&apos;re absolutely free today!
        </div>
      )}
    </div>
  );
};

export default TodoList;
