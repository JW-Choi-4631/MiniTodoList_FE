import { createStore } from "redux";
import { combineReducers } from "redux";
import Card from "../modules/Card";

const rootReducer = combineReducers({
    Card,
});

const store = createStore(rootReducer);

export default store;