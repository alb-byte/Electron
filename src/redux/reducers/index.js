import { combineReducers } from "redux";
import appReducer from "./app-reducer";
import linkReducer from "./link-reducer";
export const rootReducer = combineReducers({
    link: linkReducer,
    app: appReducer
});