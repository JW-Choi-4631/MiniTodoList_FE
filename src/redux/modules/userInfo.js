import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
  nickname: "",
  age: "",
};

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    set: (state, action) => {
      if (action.payload.name === "age") {
        return (state = {
          ...state,
          [action.payload.name]: Number(action.payload.value),
        });
      }
      return (state = {
        ...state,
        [action.payload.name]: action.payload.value,
      });
    },
    clear: () => {
      return initialState;
    },
  },
});

export const { set, clear, save } = userInfoSlice.actions;
export default userInfoSlice.reducer;
