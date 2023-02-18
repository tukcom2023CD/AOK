import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';
import {DndProvider} from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { BtnStyle } from '../../Components/Button';
import { MainBackground } from '../../Components/MainPageBgr';
import UpsideBar from '../../Components/UpsideBar';
import styles from './Repository.module.css';
import {BsFillCaretDownFill} from "react-icons/bs";
import {MdSettings} from "react-icons/md"
import BasicList from '../../Components/BasicList/BasicList';
import MemberList from '../../Components/MemberList/MemberList';


export default function Repository() {
    return (
        <section>
            <MainBackground display='inline-block' backgroundcolor='rgba(255,241,158,0.05)'>
            <UpsideBar/>
            <DndProvider backend={HTML5Backend}>
            <div className={styles.middleContent}>
            <div className={styles.leftBar}>
            <div className={styles.leftSidebar}>
                <div className={styles.repoList}>
                    <p className={styles.repoName}>레포지토리 이름 </p>
                    <span><button><BsFillCaretDownFill className={styles.down} size={20}/></button></span>
                    <span><button><MdSettings className={styles.setting} size={25}/></button></span>
                </div>

                <div className={styles.line_w}></div> {/* 구분선 */}

                <BasicList/>

                <div className={styles.btns}>
                <BtnStyle width='200px' height='40px' backgroundcolor='black' color='white' borderRadius='5px' marginBottom='10px'>commit</BtnStyle>
                <BtnStyle width='200px' height='40px' backgroundcolor='black' color='white' borderRadius='5px' marginBottom='10px'>merge</BtnStyle>
                <BtnStyle width='200px' height='40px' backgroundcolor='#FA735F' borderRadius='5px' marginBottom='10px'>설정</BtnStyle>
                </div>
            </div>
            </div>

            <div className={styles.rightBar}>
            <div className={styles.line_h}></div> 
            <div className={styles.repo_member}>
                <div className={styles.repo_member_title}>
                    <p className={styles.repo_member_text}>레포지토리 참여자</p>
                    <BtnStyle className={styles.repo_member_btn} width='50px' height='30px'color='black' backgroundcolor='#FA735F' borderRadius='5px'>초대</BtnStyle>   
                </div>
                <ul className={styles.repo_member_list}>
                    <MemberList/>
                </ul>
            </div>
            </div>

            </div>
            </DndProvider>

        </MainBackground>
        </section>
    );
}

