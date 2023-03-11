import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// const initialState = [
//   {
//     id: 0,
//     label: "Fix an ability to display all tasks",
//     checked: false,
//   },
// ];

export const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    list: [],
  },
  reducers: {
    setList: (state, action) => {
      state.list = action.payload;
    },
    addTask: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const getTasks = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      "https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos"
    );
    dispatch(setList(data));
  } catch (error) {
    console.log("error", error);
  }
};

export const { setList, addTask } = taskSlice.actions;
export default taskSlice.reducer;
