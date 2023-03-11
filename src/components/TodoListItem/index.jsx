import { getTasks } from "features/tasks/taskSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";

const TodoListItem = ({ onCheck, checked, onDelete, label }) => {
  const { list } = useSelector((state) => state.tasks);
  console.log(list);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  return (
    <>
      {list.map((task) => (
        <div className="todo-list-item" key={task.id}>
          <div
            tabIndex="0"
            role="checkbox"
            aria-checked
            className="todo-list-item-content"
          >
            <input
              tabIndex="-1"
              type="checkbox"
              checked={checked}
              onChange={onCheck}
            />

            <span className={checked ? "todo-list-item-checked" : ""}>
              {task.label}
            </span>
          </div>

          <button
            type="button"
            className="todo-list-item-delete"
            onClick={onDelete}
          >
            x
          </button>
        </div>
      ))}
    </>
  );
};

export default TodoListItem;
