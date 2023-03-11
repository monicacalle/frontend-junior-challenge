import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "soy una tarea",
    status: false,
  },
];

export const taskSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {},
  },
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
