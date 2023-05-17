import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
};

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    set: (state, action) => {
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

export const { set, clear } = userInfoSlice.actions;
export default userInfoSlice.reducer;
