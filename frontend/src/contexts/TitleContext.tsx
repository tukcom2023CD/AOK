import { createContext, Dispatch } from "react";

export interface ITitle {
  idx: number;
  title: string;
  // project: string;
}

interface ITitleContext {
  state: TitleState;
  dispatch: Dispatch<TitleAction>;
}

export type TitleState = {
  titles: ITitle[];
  newIdx: number;
  editIdx: number;
};

type TitleAction =
  | { type: "EDIT_START"; payload: { idx: number } }
  | { type: "ADD_TODO"; payload: { title: ITitle } }
  | { type: "EDIT_TODO"; payload: { title: ITitle } }
  | { type: "DELETE_TODO"; payload: { idx: number } };

export const TitleReducer = (
  state: TitleState,
  action: TitleAction
): TitleState => {
  let newTitles: ITitle[];
  switch (action.type) {
    case "EDIT_START":
      return {
        ...state,
        editIdx: action.payload.idx,
      };
    case "ADD_TODO":
      newTitles = [...state.titles, action.payload.title];
      return {
        ...state,
        titles: newTitles,
        newIdx: state.newIdx + 1,
      };
    case "EDIT_TODO":
      newTitles = state.titles.map((item) => {
        if (item.idx === action.payload.title.idx) {
          return action.payload.title;
        } else {
          return item;
        }
      });
      return {
        ...state,
        titles: newTitles,
        editIdx: 0,
      };
    case "DELETE_TODO":
      newTitles = state.titles.filter((item) => {
        return item.idx !== action.payload.idx;
      });
      return {
        ...state,
        titles: newTitles,
      };
    default:
      return state;
  }
};

export const TitleContext = createContext({} as ITitleContext);
