import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import axios from "axios";

const URL =
  "https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    list: [],
    counter: 0,
  },
  reducers: {
    setList: (state, { payload }) => {
      state.list = payload;
      let counter = 0;
      payload.forEach((task) => {
        if (task.checked) counter++;
      });
      state.counter = counter;
    },
    addTask: (state, { payload }) => {
      state.list.push(payload);
    },
    deleteTask: (state, { payload }) => {
      state.list = state.list.filter((task) => task.id !== payload);
      let counter = 0;
      state.list.forEach((task) => {
        if (task.checked) counter++;
      });
      state.counter = counter;
    },
    toggleCheck: (state, { payload }) => {
      const newList = state.list.map((task) => {
        if (task.id === payload.id) {
          return payload;
        }
        return task;
      });
      state.counter = state.counter + 1 * (payload.checked ? 1 : -1);

      state.list = newList;
    },
  },
});

export const getTasks = () => async (dispatch) => {
  try {
    const { data } = await axios.get(URL);
    dispatch(setList(data));
  } catch (error) {
    toast.error("Can't get todos");
  }
};
export const addNewTasks = (newTask) => async (dispatch) => {
  try {
    const { data } = await axios.post(URL, newTask);
    dispatch(addTask(data));
    toast.success("task added successfully");
  } catch (error) {
    toast.error("Can't add more tasks");
  }
};
export const deleteSelectedTask = (taskid) => async (dispatch) => {
  try {
    await axios.delete(`${URL}/${taskid}`);
    dispatch(deleteTask(taskid));
  } catch (error) {
    toast.error("Internal Server Error, please try latter");
  }
};

export const toggleCheckTask = (taskId, checked) => async (dispatch) => {
  try {
    const { data } = await axios.patch(`${URL}/${taskId}`, {
      checked: !checked,
    });
    dispatch(toggleCheck(data));
  } catch (error) {
    toast.error("Internal Server Error, please try latter");
  }
};

export const { setList, addTask, deleteTask, toggleCheck } = taskSlice.actions;
export default taskSlice.reducer;
