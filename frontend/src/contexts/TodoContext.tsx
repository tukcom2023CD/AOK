import { createContext, Dispatch } from "react";

export interface ITodo {
  idx: number;
  title: string;
  project: string;
}

interface ITodoContext {
  state: TodoState;
  dispatch: Dispatch<TodoAction>;
}

export type TodoState = {
  todos: ITodo[];
  newIdx: number;
  editIdx: number;
};

type TodoAction =
  | { type: "EDIT_START"; payload: { idx: number } }
  | { type: "ADD_TODO"; payload: { todo: ITodo } }
  | { type: "EDIT_TODO"; payload: { todo: ITodo } }
  | { type: "DELETE_TODO"; payload: { idx: number } };

export const todoReducer = (
  state: TodoState,
  action: TodoAction
): TodoState => {
  let newTodos: ITodo[];
  switch (action.type) {
    case "EDIT_START":
      return {
        ...state,
        editIdx: action.payload.idx,
      };
    case "ADD_TODO":
      newTodos = [...state.todos, action.payload.todo];
      return {
        ...state,
        todos: newTodos,
        newIdx: state.newIdx + 1,
      };
    case "EDIT_TODO":
      newTodos = state.todos.map((item) => {
        if (item.idx === action.payload.todo.idx) {
          return action.payload.todo;
        } else {
          return item;
        }
      });
      return {
        ...state,
        todos: newTodos,
        editIdx: 0,
      };
    case "DELETE_TODO":
      newTodos = state.todos.filter((item) => {
        return item.idx !== action.payload.idx;
      });
      return {
        ...state,
        todos: newTodos,
      };
    default:
      return state;
  }
};

export const TodoContext = createContext({} as ITodoContext);
