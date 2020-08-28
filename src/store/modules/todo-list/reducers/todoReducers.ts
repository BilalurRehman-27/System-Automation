import { fromJS, List } from "immutable";
import {
  TodoState,
  TodoActionsTypes,
  CREATE_TODO_REQUEST,
  UPDATE_TODO_REQUEST,
  DELETE_TODO_REQUEST,
  Todo,
} from "../types";

export default function todoReducer(
  state = fromJS({ data: List() }),
  action: TodoActionsTypes
): TodoState {
  switch (action.type) {
    case CREATE_TODO_REQUEST: {
      const todo = action.payload.todo;
      return state.update("data", (todoItem: any) => todoItem.push(todo));
    }

    case UPDATE_TODO_REQUEST: {
      const index = state
        .get("data")
        .findIndex((item: Todo) => item.id === action.payload.todo.id);

      const result = state
        .get("data")
        .setIn([index, "checked"], action.payload.todo.checked);
      return state.set("data", result);
    }

    case DELETE_TODO_REQUEST: {
      const data = state
        .get("data")
        .filter((todo: any) => todo.id !== action.payload.todo.id);
      return state.set("data", data);
    }

    default:
      return state;
  }
}
