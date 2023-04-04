import React from 'react';
import styled from 'styled-components';
import {DndProvider} from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { BtnStyle } from '../Components/Button';
import { MainBackground } from '../Components/MainPageBgr';
import UpsideBar from '../Components/UpsideBar';
import DragDrop from '../Components/DragDrop/DragDrop';

const Backgrdiv = styled.div`
  display: inline-block;
  width: 100%;
  background-color: white;
  text-align: center;
`; 


const Commentdiv = styled.input`
  width: 1050px;
  height: 85px;
  border-radius: 10px;
  background-color: #FFF4F4;
  border: 3px solid #FFDEDE;
  font-size: 20pt;
  font-weight: bold;
  padding: 1.5rem;
`;

const Btndiv = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

const ApplyBtn = styled.button `
  width: 250px;
  height: 75px;
  background-color: #FF9198;
  color: white;
  font-size: 18pt;
  font-weight: bold;
  border-radius: 30px;
  &:hover{
    background-color: #d7777e;
    transition: 0.5s;
  }
`;

function Upload() {
    return(
      <div>
        <UpsideBar/>
        <Backgrdiv>
          <DragDrop/>
          <Commentdiv/>
          <Btndiv>
            <ApplyBtn>apply</ApplyBtn>
          </Btndiv>
        </Backgrdiv>
      </div>
    );
  }
export default Upload;