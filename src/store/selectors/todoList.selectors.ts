import { List } from "immutable";
import createSelector from "../../utils/reselect";

export const getTodoState = (state: any) => {
  const { todoReducer } = state;
  return todoReducer || List();
};

export const getTodoListItems = createSelector(getTodoState, (listItems) => {
  return listItems.get("data") || listItems || List();
});
