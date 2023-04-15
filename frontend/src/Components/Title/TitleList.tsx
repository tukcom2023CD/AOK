import * as React from 'react';
import { useReducer, useState } from "react";
import EditTitle from "./EditTitle";
import Title from "./Title";
import { TitleContext, TitleReducer, TitleState } from "../../contexts/TitleContext";

const initState: TitleState = {
  titles: [
    { idx: 100, title: "commit을 남기세요"},
    //{ idx: 100, title: "commit을 남기세요", project: "project-100" },
  ],
  newIdx: 1,
  editIdx: 0,
};

const TitleList = () => {
  const [state, dispatch] = useReducer(TitleReducer, initState);
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
      <TitleContext.Provider value={{ state, dispatch }}>
        {Items()}
      </TitleContext.Provider>
    </div>
  );
};

export default TitleList;
