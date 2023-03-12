import { addNewTasks } from "features/tasks/taskSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

import "./styles.css";

const TaskForm = () => {
  const [label, setLabel] = useState("");

  const dispatch = useDispatch();

  const onHandleChange = (e) => {
    setLabel(e.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (!label.length || label === " ") return;
    dispatch(
      addNewTasks({
        label,
        checked: false,
      })
    );
    setLabel("");
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <div className="form-container">
        <input
          name="label"
          type="text"
          placeholder="Enter a new to do"
          onChange={onHandleChange}
          value={label}
        />
        <button type="submit" disabled={!label}>
          ADD TO DO
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
