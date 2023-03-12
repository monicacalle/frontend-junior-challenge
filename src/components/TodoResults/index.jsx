import React from "react";
import { useSelector } from "react-redux";
import "./styles.css";

const TodoResults = () => {
  const { counter } = useSelector((state) => state.tasks);
  // Fix an ability to calculate completed tasks

  return <div className="todo-results">Done: {counter}</div>;
};

export default TodoResults;
