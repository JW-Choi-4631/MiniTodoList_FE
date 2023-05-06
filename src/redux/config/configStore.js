import { createStore } from "redux";
import { combineReducers } from "redux";
import Card from "../modules/Card";
import Content from "../modules/Content"
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
    Card,
    Content,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;