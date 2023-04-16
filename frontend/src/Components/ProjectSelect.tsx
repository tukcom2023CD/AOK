import * as React from 'react';
import { useEffect, useState, useRef } from "react";
import styled, {css} from "styled-components";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ContainerDiv = styled.div`
    width: 16vw;
    display: flex;
    background-color: #D9D9D9;

`;

const DropdownContainer = styled.div`
    position: relative;
    text-align: center;
    z-index: 10;
`;


//안에 현재 플젝 이름과 버튼 표시해줄 그거
const LabelDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    &:hover{
      cursor: pointer;
    }
`;




//메뉴 width: 300px, height: 350px
const Menu = styled.div`
    position: absolute;
    width: 300px;
    height: 350px;
    background-color: white;
    margin-left: 150px;
    border-radius: 10px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
    transform: translate(-50%, 20px);
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
    z-index: 9;
`;

const Ul = styled.ul`
  & > li {
    margin-bottom: 10px;
  }

  & > li:first-of-type {
    margin-top: 10px;
  }


  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Li = styled.li`
`;

const LinkWrapper = styled.a`
  font-size: 16px;
  text-decoration: none;
  color: black;
`;



export default function BasicSelect() {
    const [isOpen, setisOpen] = useState<boolean>(false);
    const onToggle = () => {
      setisOpen(!isOpen);
    }

    return (
    <DropdownContainer>
      <ContainerDiv onClick={onToggle}>
        테스트용
      </ContainerDiv>
      <div>
        {isOpen &&
          <Menu>
            <Ul>
              <Li>
                <LinkWrapper href="sunggong">성공일까?</LinkWrapper>
              </Li>
            </Ul>
          </Menu>
        }
      </div>
    </DropdownContainer>
    );
}