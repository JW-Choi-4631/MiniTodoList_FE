import { configureStore } from "@reduxjs/toolkit";
import userInfo from "../modules/userInfo";
import todo from "../modules/todo";

const store = configureStore({
  reducer: {
    userInfo,
    todo,
  },
});

export default store;
