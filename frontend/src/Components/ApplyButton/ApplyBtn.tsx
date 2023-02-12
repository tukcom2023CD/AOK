import React from 'react';
import {DndProvider} from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { BtnStyle } from '../Button';

export default function ApplyBtn() {
    return (
        <section>

            <BtnStyle
            name='Apply'
            fontSize='15px'
            width='8rem'
            height='2.5rem'
            borderRadius='0.8rem'
            backgroundcolor='#FFF19E'
            borderStyle='none'
            marginTop='2rem'
            >Apply</BtnStyle>

        </section>
    );
}

