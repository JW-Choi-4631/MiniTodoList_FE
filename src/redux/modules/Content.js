import { createSlice } from "@reduxjs/toolkit";

// const TITLE = "content/TITLE";
// const CONTEXT = "content/CONTEXT";
// const DATE = "content/DATE";
// const CLEAR = "content/CLEAR";

// export const title = (payLoad) => {
//   return {
//     type: TITLE,
//     payLoad,
//   };
// };

// export const context = (payLoad) => {
//   return {
//     type: CONTEXT,
//     payLoad,
//   };
// };

// export const date = (payLoad) => {
//   return {
//     type: DATE,
//     payLoad,
//   };
// };

// export const clear = () => {
//   return {
//     type: CLEAR,
//   };
// };

const initialState = {
  title: "",
  context: "",
  date: "",
};

// const SaveContent = (state = initialState, action) => {
//   switch (action.type) {
//     case TITLE:
//       return {
//         ...state,
//         title: action.payLoad,
//       };
//     case CONTEXT:
//       return {
//         ...state,
//         context: action.payLoad,
//       };
//     case DATE:
//       return {
//         ...state,
//         date: action.payLoad,
//       };
//     case CLEAR:
//       return initialState;
//     default:
//       return state;
//   }
// };

// export default SaveContent;

const Content = createSlice({
  name: "Content",
  initialState,
  reducers: {
    TITLE: (state, action) => {
      return {
        ...state,
        title: action.payload,
      };
    },
    CONTENT: (state, action) => {
      return {
        ...state,
        context: action.payload,
      };
    },
    DATE: (state, action) => {
      return {
        ...state,
        date: action.payload,
      };
    },
    CLEAR: (state, action) => {
      return initialState;
    },
  },
});

export const { TITLE, CONTENT, DATE, CLEAR } = Content.actions;
export default Content.reducer;
