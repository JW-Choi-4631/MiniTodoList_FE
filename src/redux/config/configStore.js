import { createStore } from "redux";
import { combineReducers } from "redux";
import Context from "../modules/Context";

const rootReducer = combineReducers({
    Context,
});

const store = createStore(rootReducer);

export default store;