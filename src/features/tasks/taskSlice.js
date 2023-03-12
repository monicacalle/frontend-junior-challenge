import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL =
  "https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    list: [],
  },
  reducers: {
    setList: (state, { payload }) => {
      state.list = payload;
    },
    addTask: (state, { payload }) => {
      state.list.push(payload);
    },
    deleteTask: (state, { payload }) => {
      state.list = state.list.filter((task) => task.id !== payload);
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
export const deleteSelectedTask = (taskid, index) => async (dispatch) => {
  try {
    await axios.delete(`${URL}/${taskid}`);
  } catch (error) {
    if (error.response.status === 404) {
      console.error("Cannot find task on database");
    } else {
      console.error("Internal Server Error");
    }
  } finally {
    dispatch(deleteTask(index));
  }
};

export const { setList, addTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
