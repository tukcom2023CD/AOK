import React from 'react';
import { Divider } from '../Divider';
import {FaTrash} from 'react-icons/fa';
import styles from './Authority.module.css';
export default function Authority() {
    return (
        <div>
            <Divider width='500px' height='1px' backgroundcolor='black'/>
            <ul className={styles.authority_list}> 
                <li className={styles.authority_list_row}>
                    <div className={styles.member}>관리자 1</div>
                    <div className={styles.title}>권한 삭제</div>
                    <div className={styles.icon}><button className={styles.button}><FaTrash/></button></div>
                </li>

                <li className={styles.authority_list_row}>
                    <div className={styles.member}>관리자 2</div>
                    <div className={styles.title}>권한 삭제</div>
                    <div className={styles.icon}><button className={styles.button}><FaTrash/></button></div>
                </li>
            </ul>


            <Divider width='500px' height='1px' backgroundcolor='black'/>
            <ul className={styles.authority_list}>
                <li className={styles.authority_list_row}>
                    <div className={styles.member}>일반인 1</div>
                    <div className={styles.title}>권한 부여</div>
                    <div className={styles.icon}><button className={styles.button}><FaTrash/></button></div>
                </li>

                <li className={styles.authority_list_row}>
                    <div className={styles.member}>일반인 2</div>
                    <div className={styles.title}>권한 부여</div>
                    <div className={styles.icon}><button className={styles.button}><FaTrash/></button></div>
                </li>

                <li className={styles.authority_list_row}>
                    <div className={styles.member}>일반인 3</div>
                    <div className={styles.title}>권한 부여</div>
                    <div className={styles.icon}><button className={styles.button}><FaTrash/></button></div>
                </li>
            </ul>
        </div>
    );
}



