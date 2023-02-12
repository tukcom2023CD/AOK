import React from 'react';
import styled from 'styled-components';
import {DndProvider} from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { BtnStyle } from '../Components/Button';
import { MainBackground } from '../Components/MainPageBgr';
import UpsideBar from '../Components/UpsideBar';
import DragDrop from '../Components/DragDrop/DragDrop';
import PreImage from '../Components/PreImage/PreImage';

function Upload() {
    return(
      <div>
        <MainBackground display='inline-block' backgroundcolor='rgba(255,241,158,0.05)'>
          <UpsideBar/>
          <DndProvider backend={HTML5Backend}>
          
          </DndProvider>
          <DragDrop/>
          {/* 현재 작업 내용 */}
          {
          <PreImage/>
          }
          {/* {저장할 제목} */}
          {/* {저장할 내용} */}
          {/* {Apply 버튼} */}
        </MainBackground>
      </div>
    );
  }
export default Upload;