import React from 'react';
import { Input } from '../Input';
import styles from './SaveContent.module.css';
export default function SaveContent() {
    return (
        <section>
            <p className={styles.content}>저장할 내용</p>
            <Input 
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

