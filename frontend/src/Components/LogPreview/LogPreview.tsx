import React from 'react';
import styles from './LogPreview.module.css';
import { BtnStyle } from '../Button';

export default function LogPreview() {
    return (
        <section>
            <p className={styles.title}>디노/캐릭터 의 Log</p>
            <img src="img/tino.png" alt="tino" />
            <p className={styles.preview}>Preview</p>
            <p className={styles.clock}>2023.01.01 <br />오후 6시 30분</p>
            <BtnStyle
            width='250px'
            height='50px'
            borderRadius='5px'
            borderStyle='none'
            backgroundcolor='#FFF19E'
            >이 Log로 버전 갱신</BtnStyle>
        </section>
    );
}

