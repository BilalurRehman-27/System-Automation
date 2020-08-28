import React, { FunctionComponent, useState } from "react";
import { useDispatch } from "react-redux";
import {
  createTodo,
  updateTodo,
  deleteTodo,
} from "../../store/modules/todo-list/actions/actions";

import { Todo } from "../../store/modules/todo-list/types";
import tick from "../../assets/images/tick.png";

type TodoProps = {
  title?: string;
  paragraph?: string;
};

const TodoList: FunctionComponent<TodoProps> = (props) => {
  const [description, setDescription] = useState("");
  const { data }: any = props;
  const dispatch = useDispatch();

  const lastId = (): number => {
    return data.size ? data.get(-1).id + 1 : 1;
  };
  const addTodo = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ): void => {
    e.preventDefault();
    dispatch(
      createTodo({
        id: lastId(),
        description,
        checked: false,
      })
    );
  };
  const handleUpdate = (
    todo: Todo,
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ): void => {
    dispatch(updateTodo({ ...todo, checked: !todo.checked }));
  };
  const handleDelete = (
    todo: Todo,
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ): void => {
    e.stopPropagation();
    dispatch(deleteTodo(todo));
  };
  return (
    <aside>
      <div className="App">
        <h2>To Do List</h2>
        <input
          value={description}
          onChange={(e): void => setDescription(e.target.value)}
          type="text"
          id="myInput"
          placeholder="Title..."
        />
        <a href="/" onClick={(e): void => addTodo(e)}>
          Add
        </a>
      </div>
      {data &&
        data.map((todo: Todo) => {
          return (
            <aside key={todo.id}>
              <input
                type="checkbox"
                checked={todo.checked}
                key={todo.id}
                onClick={(e): void => handleUpdate(todo, e)}
              />

              <div>
                {todo.checked && (
                  <img src={tick} alt="" style={{ height: "10px" }} />
                )}
                <span>{todo.description}</span>
              </div>
              <button
                type="button"
                className="close"
                onClick={(e): void => handleDelete(todo, e)}
              >
                X
              </button>
            </aside>
          );
        })}
    </aside>
  );
};

export default TodoList;
