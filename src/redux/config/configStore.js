import { createStore } from "redux";
import { combineReducers } from "redux";
import Card from "../modules/Card";
import SaveContent from "../modules/SaveContent";

const rootReducer = combineReducers({
    Card,
    SaveContent,
});

const store = createStore(rootReducer);

export default store;