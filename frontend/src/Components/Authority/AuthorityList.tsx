import React from 'react';
import {FaTrash} from 'react-icons/fa';
import styled from "styled-components";
import styles from './Authority.module.css';

export default function AuthorityList() {
    return (
        <div>
        <div className={styles.authority}>
            <Divider/>
            <li className={styles.list_row}>
            <label className={styles.text}>
                관리자1</label>
                <span>권한 삭제</span>
            <span className={styles.icon}><button className={styles.button}><FaTrash/></button></span>
        </li>

        <li className={styles.list_row}>
            <label className={styles.text}>
                관리자2</label>
                <span>권한 삭제</span>
            <span className={styles.icon}><button className={styles.button}><FaTrash/></button></span>
        </li>
    </div>
        

    <div className={styles.authority}>
        <Divider/>
        <div className={styles.authority_delete}></div>
        <li className={styles.list_row}>
            <label className={styles.text}>
                일반인1</label>
                <span>권한 부여</span>
            <span className={styles.icon}><button className={styles.button}><FaTrash/></button></span>
        </li>

        <li className={styles.list_row}>
            <label className={styles.text}>
            일반인2</label>
                <span>권한 부여</span>
            <span className={styles.icon}><button className={styles.button}><FaTrash/></button></span>
        </li>
        

        <li className={styles.list_row}>
            <label className={styles.text}>
            일반인3</label>
                <span>권한 부여</span>
            <span className={styles.icon}><button className={styles.button}><FaTrash/></button></span>
        </li>
    </div>
    </div>
    );
}

const DivDivider = styled.div`
    width: 500px;
    height: 1px;
    background: black;
`;

function Divider() {
    return <DivDivider>{}</DivDivider>;
}

