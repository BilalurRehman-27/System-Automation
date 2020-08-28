import { combineReducers } from "redux";
import todoReducer from "./todo-list/reducers/todoReducers";

const rootReducer = combineReducers({
  todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
