import { combineReducers } from 'redux';
import todoReducer from './modules/todo-list/reducers/todoReducers';
import caseReducer from './reducers/cases.reducers';

const rootReducer = combineReducers({
    todoReducer,
    cases: caseReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
