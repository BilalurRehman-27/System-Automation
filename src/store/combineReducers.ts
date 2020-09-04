import { combineReducers } from "redux";
import todoReducer from "./modules/todo-list/reducers/todoReducers";
import caseListReducer from "./reducers/caseLists.reducers";
const rootReducer = combineReducers({
  todoReducer,
  cases:caseListReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
