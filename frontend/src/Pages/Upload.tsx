import React from 'react';
import styled from 'styled-components';
import {DndProvider} from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { BtnStyle } from '../Components/Button';
import { MainBackground } from '../Components/MainPageBgr';
import UpsideBar from '../Components/UpsideBar';

function Upload() {
    return(
      <div>
        <MainBackground>
          <UpsideBar/>
          <DndProvider backend={HTML5Backend}>
          
          </DndProvider>
        </MainBackground>
      </div>
    );
  }
export default Upload;