import { useState } from "react";

import "./styles.css";

const TaskForm = () => {
  const [task, setTask] = useState({
    title: " ",
  });

  const onHandleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    console.log(task);
  };

  return (
    <div className="container">
      <form onSubmit={onHandleSubmit}>
        <input
          name="title"
          type="text"
          placeholder="Enter a new to do"
          onChange={onHandleChange}
        />
        <button>ADD TO DO</button>
      </form>
    </div>
  );
};

export default TaskForm;
