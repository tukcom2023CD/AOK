import React from 'react';
import styled from 'styled-components'
import { MainBackground } from '../../Components/MainPageBgr';
import UpsideBar from '../../Components/UpsideBar';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styles from './Notice.module.css';
import { BtnStyle } from '../../Components/Button';

export default function Notice() {
    return (
        <div>
        <MainBackground display='inline-block' backgroundcolor='rgba(255,241,158,0.05)'>
        <UpsideBar/>
        <DndProvider backend={HTML5Backend}>
        <div className={styles.middleContent}>
            <div className={styles.notice_title}><h1>최근 알림 내역</h1></div>
            <ul className={styles.notice_list}>
                <li className={styles.notice_list_row}>
                    <div><p> 타인 님이 ‘레파지토리 이름’ Repository에 초대하였습니다.</p></div>
                    <div className={styles.notice_list_state} >
                        <BtnStyle className={styles.notice_list_row_btn} width='100px' height='40px' borderRadius='5px' color='white' backgroundcolor='black'>수락</BtnStyle>
                        <BtnStyle className={styles.notice_list_row_btn} width='100px' height='40px' borderRadius='5px' color='black' backgroundcolor='#FA735F'>거절</BtnStyle>
                    </div>
                </li>

                <li className={styles.notice_list_row}>
                    <div><p> 타인 님이 ‘레파지토리 이름’ Repository에 초대하였습니다.</p></div>
                    <div className={styles.notice_list_state}>
                        <p>완료된 요청입니다.</p>
                    </div>
                </li>

                <li className={styles.notice_list_row}>
                    <div><p> 타인 님이 ‘레파지토리 이름’ Repository에 초대하였습니다.</p></div>
                    <div className={styles.notice_list_state}>
                        <p>이미 초대되었습니다.</p>
                    </div>
                </li>

                <li className={styles.notice_list_row}>
                    <div><p> 타인 님이 ‘레파지토리 이름’ Repository에 초대하였습니다.</p></div>
                    <div className={styles.notice_list_state}>
                        <p>수락된 요청입니다.</p>
                    </div>
                </li>

                <li className={styles.notice_list_row}>
                    <div><p> 타인 님이 ‘레파지토리 이름’ Repository에 초대하였습니다.</p></div>
                    <div className={styles.notice_list_state}>
                        <p>거절된 요청입니다.</p>
                    </div>
                </li>
            </ul>
        </div>
        </DndProvider>

        </MainBackground>
        </div>
    );
}

