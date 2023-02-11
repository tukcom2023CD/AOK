import React from "react";
import styled from "styled-components";

/** MainPageBgr
 * 페이지 퍼블리싱 상 거의 대부분의 페이지에 로고 + 프로필이 들어가기 때문에 공용 컴포넌트로 만드려 합니다
 */

interface props{
    display?: string;
    backgroundcolor?: string;
}

export const MainBackground = styled.div<props>`
    display: ${(props) => props.display};
    //background-color: 'rgba(255,241,158,0.05)';
    background-color: ${(props) => props.backgroundcolor};
`;

