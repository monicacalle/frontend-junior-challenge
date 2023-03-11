import { configureStore } from "@reduxjs/toolkit";
import taskReducers from "../features/tasks/taskSlice";

export const store = configureStore({
  reducer: { task: taskReducers },
});
