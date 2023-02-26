import React from 'react';
import styled from 'styled-components';

interface props{
    width?: string;
    height? : string;
    backgroundcolor?: string;
}

export const Divider = styled.div<props>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: ${(props) => props.backgroundcolor};
`;

