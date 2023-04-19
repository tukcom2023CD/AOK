import * as React from 'react';
import { useReducer, useState } from "react";
import EditTitle from "./EditTitle";
import Title from "./Title";
import { TodoContext, titleReducer, TitleState } from "../../contexts/TitleContext";

const initState: TitleState = {
  titles: [
    { idx: 100,  title: "commit를 남기세요"},
  ],
  newIdx: 1,
  editIdx: 0,
};

const TitleList = () => {
  const [state, dispatch] = useReducer(titleReducer, initState);
  const { titles, editIdx } = state;

  const Items = () => {
    return titles.map((item) => {
      if (item.idx === editIdx) {
        return <EditTitle {...item}></EditTitle>;
      } else {
        return <Title {...item}></Title>;
      }
    });
  };

  return (
    <div className="title-list-container">
      <TodoContext.Provider value={{ state, dispatch }}>
        {Items()}
      </TodoContext.Provider>
    </div>
  );
};

export default TitleList;



