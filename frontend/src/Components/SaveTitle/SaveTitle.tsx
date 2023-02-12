import React from 'react';
import { Input } from '../Input';
import styles from './SaveTitle.module.css';

export default function SaveTitle() {
    return (
        <section>
            <p className={styles.title}>저장할 제목</p>
            <Input 
            //borderStyle='none'
            width='400px'
            height='30px'
            marginTop='0.1rem'
            marginBottom='1.5rem'
            border='2px solid lightgray'
            borderRadius='0.5rem'
            />
        </section>
    );
}



