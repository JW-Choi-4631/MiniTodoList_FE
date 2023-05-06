import { createStore } from "redux";
import { combineReducers } from "redux";
import Card from "../modules/Card";
import Content from "../modules/Content"

const rootReducer = combineReducers({
    Card,
    Content,
});

const store = createStore(rootReducer);

export default store;