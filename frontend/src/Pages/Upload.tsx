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

const Backgrdiv = styled.div`
  display: inline-block;
  width: 100%;
  background-color: white; 
`; 

function Upload() {
    return(
      <div>
        <Backgrdiv>
          <UpsideBar/>
          <DragDrop/>
          {/* <SaveTitle/>
          <SaveContent/>
          <ApplyBtn/> */}
        </Backgrdiv>
      </div>
    );
  }
export default Upload;