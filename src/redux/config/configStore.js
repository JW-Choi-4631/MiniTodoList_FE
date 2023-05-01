import { createStore } from "redux";
import { combineReducers } from "redux";
import Card from "../modules/Card";
import saveContext from "../modules/SaveContext";

const rootReducer = combineReducers({
    Card,
    saveContext,
});

const store = createStore(rootReducer);

export default store;