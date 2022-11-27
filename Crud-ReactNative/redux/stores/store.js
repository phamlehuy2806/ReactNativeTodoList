import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import TodoReducer from "../reducers/todoReducers";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

const loggerMiddleware = createLogger();

export const store = createStore(
  TodoReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

export default store;
