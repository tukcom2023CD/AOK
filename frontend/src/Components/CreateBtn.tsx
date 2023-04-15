import * as React from 'react';
import styled from "styled-components";


const BtnDiv = styled.button`
  width: 16vw;
  height: 2.3vw;
  margin-top: 10px;
  background-color: white;
  font-size: 16px;
  font-weight: bold;
  &:hover{
    background-color: #ececec;
    transition: 0.5s;
  }
`;

export default function CreateBtn() {
  return(
    <BtnDiv>Create</BtnDiv>
  );
}