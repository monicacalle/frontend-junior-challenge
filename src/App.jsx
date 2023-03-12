import React from "react";
import TodoList from "./components/TodoList";
import TodoResults from "./components/TodoResults";
import "./App.css";
import TaskForm from "components/TaskForm";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="root">
      <ToastContainer />
      <TodoList />
      <TodoResults />
      <TaskForm />
    </div>
  );
};

export default App;
