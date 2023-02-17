import React from 'react';
import styled from 'styled-components';
import {DndProvider} from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { BtnStyle } from '../../Components/Button';
import { MainBackground } from '../../Components/MainPageBgr';
import UpsideBar from '../../Components/UpsideBar';
import LogBtnList from '../../Components/LogBtnList/LogBtnList';
import LogSelectBtnList from '../../Components/LogSelectBtnList/LogBtnSelectList';
import styles from './Log.module.css';
import LogPreview from '../../Components/LogPreview/LogPreview';
export default function Log() {
    return (
        <section>
        <MainBackground display='inline-block' backgroundcolor='rgba(255,241,158,0.05)'>
        <UpsideBar/>
        <DndProvider backend={HTML5Backend}>
            <div className={styles.middle}>
            <div className={styles.logPreview}>
                <LogPreview/>
            </div>
            <div className={styles.logBtnList}>
                <LogBtnList/>
            </div>
                <div className={styles.line}></div>
            <div className={styles.logSelectBtnList}>
                <LogSelectBtnList/>
            </div>
            </div>
        </DndProvider>
        </MainBackground>
            
        </section>
    );
}

