import React from 'react';
import styled from 'styled-components';
import {DndProvider} from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';



function Upload() {
    return(
      <div>
        <DndProvider backend={HTML5Backend}>
          
        </DndProvider>
      </div>
    );
  }
export default Upload;