import React from 'react';
import { BtnStyle } from '../Button';
import styles from './BtnList.module.css'

export default function BtnSelectList() {
    return (
        <section>
            <p className={styles.text}>현재 선택한 Log의 작업 내역</p>
            <BtnStyle
                    width='400px'
                    height='50px'
                    color='white'
                    backgroundcolor='#9DE0A0'
                    marginBottom='10px'
                    borderStyle='none'
                    >디노리본.png</BtnStyle>

                    <BtnStyle
                    width='400px'
                    height='50px'
                    color='black'
                    backgroundcolor='gray'
                    marginBottom='10px'
                    borderStyle='none'
                    >디노선화.png</BtnStyle>

                    <BtnStyle
                    width='400px'
                    height='50px'
                    color='black'
                    backgroundcolor='gray'
                    marginBottom='10px'
                    borderStyle='none'
                    >디노명암.png</BtnStyle>

                    <BtnStyle
                    width='400px'
                    height='50px'
                    color='black'
                    backgroundcolor='#EDAF9C'
                    marginBottom='10px'
                    borderStyle='none'
                    >디노선화.png</BtnStyle>
        </section>
    );
}

