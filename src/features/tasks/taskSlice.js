import { createSlice } from "@reduxjs/toolkit";
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
    console.log("error", error);
  }
};
export const addNewTasks = (newTask) => async (dispatch) => {
  try {
    const { data } = await axios.post(URL, newTask);
    dispatch(addTask(data));
  } catch (error) {
    console.log("error", error);
  }
};
export const deleteSelectedTask = (taskid) => async (dispatch) => {
  try {
    await axios.delete(`${URL}/${taskid}`);
    dispatch(deleteTask(taskid));
  } catch (error) {
    console.error("Internal Server Error");
  }
};

export const toggleCheckTask = (taskId, checked) => async (dispatch) => {
  try {
    console.log("(taskId, checked", taskId, checked);
    const { data } = await axios.patch(`${URL}/${taskId}`, {
      checked: !checked,
    });
    console.log("data", data);
    dispatch(toggleCheck(data));
  } catch (error) {
    console.error("Internal Server Error");
  }
};

export const { setList, addTask, deleteTask, toggleCheck } = taskSlice.actions;
export default taskSlice.reducer;
