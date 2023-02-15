import React from 'react';
import { BtnStyle } from '../Button';
import styles from './BtnList.module.css'

export default function LogBtnList() {
    return (
        <section>
            <p className={styles.text}>Log</p>
            <button className={styles.btn_color_change}>fix : 컬러 수정</button>
                    <BtnStyle
                    width='400px'
                    height='50px'
                    color='black'
                    backgroundcolor='gray'
                    borderStyle='none'
                    marginBottom='10px'
                    >feat: 리본 추가</BtnStyle>

                    <BtnStyle
                    width='400px'
                    height='50px'
                    color='black'
                    backgroundcolor='gray'
                    borderStyle='none'
                    marginBottom='10px'
                    >feat: 컬러 수정</BtnStyle>
        </section>
    );
}

