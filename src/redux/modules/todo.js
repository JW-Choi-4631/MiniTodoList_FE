import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  content: "",
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodo: (state, action) => {
      return (state = {
        ...state,
        [action.payload.name]: action.payload.value,
      });
    },
    clearTodo: () => {
      return initialState;
    },
  },
});

export const { setTodo, clearTodo } = todoSlice.actions;
export default todoSlice.reducer;
