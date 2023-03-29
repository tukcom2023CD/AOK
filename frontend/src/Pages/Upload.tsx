import React from 'react';
import styled from 'styled-components';
import {DndProvider} from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { BtnStyle } from '../Components/Button';
import { MainBackground } from '../Components/MainPageBgr';
import UpsideBar from '../Components/UpsideBar';
import DragDrop from '../Components/DragDrop/DragDrop';
// import PreImage from '../Components/PreImage/PreImage';
// import SaveTitle from '../Components/SaveTitle/SaveTitle';
// import SaveContent from '../Components/SaveContent/SaveContent';
// import ApplyBtn from '../Components/ApplyButton/ApplyBtn';



function Upload() {
    return(
      <div>
        <MainBackground display='inline-block' backgroundcolor='rgba(255,241,158,0.05)'>
          <UpsideBar/>
          <DndProvider backend={HTML5Backend}>
          
          </DndProvider>
          <DragDrop/>
          {/* <SaveTitle/>
          <SaveContent/>
          <ApplyBtn/> */}
        </MainBackground>
      </div>
    );
  }
export default Upload;