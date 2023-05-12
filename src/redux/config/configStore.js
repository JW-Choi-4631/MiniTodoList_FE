// import { createStore } from "redux";
// import { combineReducers } from "redux";
import Card from "../modules/Card";
import Content from "../modules/Content";
// import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";

// const rootReducer = combineReducers({
//     Card,
//     Content,
// });

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;

const store = configureStore({
  reducer: { Card: Card, Content: Content },
});

export default store;
