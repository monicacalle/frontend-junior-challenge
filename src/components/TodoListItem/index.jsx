import { useSelector } from "react-redux";
import "./styles.css";

const TodoListItem = ({ onCheck, checked, onDelete, label }) => {
  const task = useSelector((state) => state.tasks);
  console.log(task);

  return (
    <div className="todo-list-item">
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
        {task.map((task) => (
          <span
            key={task.id}
            className={checked ? "todo-list-item-checked" : ""}
          >
            {task.title}
          </span>
        ))}
      </div>
      <button
        type="button"
        className="todo-list-item-delete"
        onClick={onDelete}
      >
        x
      </button>
    </div>
  );
};

export default TodoListItem;
