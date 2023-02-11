import React from 'react';
import styled from 'styled-components';
import {DndProvider} from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { BtnStyle } from '../Components/Button';
import { MainBackground } from '../Components/MainPageBgr';
import UpsideBar from '../Components/UpsideBar';
import DragDrop from '../Components/DragDrop';

function Upload() {
    return(
      <div>
        <MainBackground display='inline-block' backgroundcolor='rgba(255,241,158,0.05)'>
          <UpsideBar/>
          <DndProvider backend={HTML5Backend}>
          
          </DndProvider>
          <DragDrop/>
        </MainBackground>
      </div>
    );
  }
export default Upload;