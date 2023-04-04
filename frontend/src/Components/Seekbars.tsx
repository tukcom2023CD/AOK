import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import ReactDOM from "react-dom";

interface props{
  width?: string;
}

export default function Seekbars() {
  const [count, setCount] = useState(50);

  return (
      <Container>
      {/*%로 부모넓이의 1/5 씩 넓어짐*/}
      <Progress/>
      <Dot
        aria-valuemax={count}
      />
    </Container>
      
  );
}
const Container = styled.div`
  margin: 30px auto;
  background-color: #D9D9D9;
  width: 45vw;
  height: 5px;
  display: flex;
  align-items: center;
  border-radius: 2px;
`;
const Progress = styled.div<props>`
  background-color: #FFDEE0;
  width: ${(props) => props.width};
  height: 5px;
  transition: width 1s;
  border-radius: 20px;

`;

//프로그레스 바에 원 달아서 프로그레스 바가 차오를 때 같이 차오름
const Dot = styled.div`
  width: 10px;
  height: 10px;
  box-sizing: border-box;
  border: 10px solid #FF9198;
  border-radius: 100%;
  background: #FF9198;
`
