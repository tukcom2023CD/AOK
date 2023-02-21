import React from 'react';
import styles from './MemberList.module.css';
import Profile from '../../Components/Profile';
import {AiFillStar} from 'react-icons/ai';



function MemberList() {
    return (
        <div>
            <li className={styles.repo_member_list_row}><Profile/><AiFillStar className={styles.star}/></li>
        </div>
    );
};

export default MemberList;
