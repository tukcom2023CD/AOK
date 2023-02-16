import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';
import {DndProvider} from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { BtnStyle } from '../../Components/Button';
import { MainBackground } from '../../Components/MainPageBgr';
import UpsideBar from '../../Components/UpsideBar';
import styles from './Main.module.css';
import {BsFillCaretDownFill} from "react-icons/bs";
import {MdSettings} from "react-icons/md"
import BasicList from '../../Components/BasicList/BasicList';

function Main() {
  return <div>
            <MainBackground display='inline-block' backgroundcolor='rgba(255,241,158,0.05)'>
          <UpsideBar/>
          <DndProvider backend={HTML5Backend}>
          <div className={styles.middleContent}>
          <div className={styles.leftSidebar}>
          <div className={styles.repoList}>
            <p className={styles.repoName}>레포지토리 이름 </p>
            <span><button><BsFillCaretDownFill className={styles.down} size={20}/></button></span>
            <span><button><MdSettings className={styles.setting} size={25}/></button></span>
          </div>

          <div className={styles.line}></div>

          <BasicList/>
          </div>
          </div>
          </DndProvider>

        </MainBackground>
  </div>;
}

export default Main;