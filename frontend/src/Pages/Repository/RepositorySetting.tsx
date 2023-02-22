import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';
import {DndProvider} from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { BtnStyle } from '../../Components/Button';
import { MainBackground } from '../../Components/MainPageBgr';
import UpsideBar from '../../Components/UpsideBar';
import styles from './RepositorySetting.module.css';
import {BsFillCaretDownFill} from "react-icons/bs";
import {MdSettings} from "react-icons/md"
import BasicList_repo_setting from '../../Components/BasicList_repo_setting/BasicList_repo_setting';
import AuthorityList from '../../Components/Authority/AuthorityList';



export default function RepositorySetting() {

    return (
        <div>
        <MainBackground display='inline-block' backgroundcolor='rgba(255,241,158,0.05)'>
        <UpsideBar/>
        <DndProvider backend={HTML5Backend}>
        <div className={styles.middleContent}>
        <div className={styles.leftBar}>
        <div className={styles.repoList}>
        <p className={styles.repoName}>레포지토리 이름 </p>
        <span><button><BsFillCaretDownFill className={styles.down} size={20}/></button></span>
        <span><button><MdSettings className={styles.setting} size={25}/></button></span>
        </div>
        <div className={styles.line}></div>
        <BasicList_repo_setting/>
        <BtnStyle backgroundcolor='#FA735F' width='200px' height='50px' borderRadius='5px' marginTop='5rem'>레포지토리 삭제</BtnStyle>
        </div>

        <div className={styles.rightBar}>
            <div className={styles.title}><h2>목록</h2></div>
            <div className={styles.editor}><p>홍길동 (개설자)</p></div>
            
            <AuthorityList/>
        </div>
        </div>
        </DndProvider>

        </MainBackground>
        </div>
    );
}




