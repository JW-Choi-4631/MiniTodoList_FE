import { createStore } from "redux";
import { combineReducers } from "redux";
import Card from "../modules/Card";
import SaveContext from "../modules/SaveContext";

const rootReducer = combineReducers({
    Card,
    SaveContext,
});

const store = createStore(rootReducer);

export default store;