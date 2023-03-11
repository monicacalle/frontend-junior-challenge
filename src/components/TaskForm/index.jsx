import { addTask } from "features/tasks/taskSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

import "./styles.css";

const TaskForm = () => {
  const [task, setTask] = useState({
    id: "",
    label: "",
    checked: false,
  });

  const dispatch = useDispatch();

  const onHandleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(task));
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <div className="form-container">
        <input
          name="label"
          type="text"
          placeholder="Enter a new to do"
          onChange={onHandleChange}
        />
        <button>ADD TO DO</button>
      </div>
    </form>
  );
};

export default TaskForm;
