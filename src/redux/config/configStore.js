import { configureStore } from "@reduxjs/toolkit";
import userInfo from "../modules/userInfo";

const store = configureStore({
  reducer: {
    userInfo,
  },
});

export default store;
