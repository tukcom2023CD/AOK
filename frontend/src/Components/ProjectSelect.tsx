import * as React from 'react';
import { useEffect, useState, useRef, useCallback } from "react";
import { useNavigate } from 'react-router-dom';
import styled, {css} from "styled-components";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DDProjectModal from '../Components/DDProjectModal';
import { useDispatch, useSelector } from 'react-redux';
import { setProjectUuid } from './Redux/ProjectSlice';
import { RootState } from './Redux/Store';
import axios from 'axios';



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

const TextDiv = styled.div`
  font-size: 16px;
  font-weight: bold;

  margin-left: 10px;
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
  height: 250px;
  padding: 0;
  margin: 0;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Li = styled.li`
  display: flex;
  //border: 1px solid red;
  height: 40px;
  width: 250px;
  align-items: center;

  

  &:hover{
    background-color: #eeeeee;
    transition: 0.3s;
  }
`;

const LinkWrapper = styled.div`
  font-size: 16px;
  text-decoration: none;
  color: black;
  display: flex;
  height: 40px;
  width: 300px;
  align-items: center;

`;

const SearchInput = styled.input `
  width: 300px;
  height: 50px;
  background-color: white;
  font-size: 16px;
  font-weight: bold;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #d9d9d9;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 1.5rem;
  outline: none;
`;


const ProjectCreateBtn = styled.button `
  width: 300px;
  height: 50px;
  background-color: white;
  color: #FF9198;
  font-size: 20px;
  font-weight: bold;
  border-top: 1px solid #d9d9d9;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  position: fixed;
  bottom: 0;
  left: 0;
  
  &:hover{
    background-color: #e1e1e1;
    transition: 0.3s;
  }
`;

interface ProjectResponse{
  status: number;
  code: string;
  message: string;
  data: ProjectsData;
}

interface findProjectResponse{
  status: number;
  code: string;
  message: string;
  data: Project;
}


interface Project{
  name: string;
  uuid: string;
}

interface ProjectsData{
  projects: Project[] 
}



export default function BasicSelect() {
  //드롭다운 박스 열고 닫기 관련 함수
  const [isOpen, setisOpen] = useState<boolean>(false);
  const onToggle = () => {
      setisOpen(!isOpen);
  }

  //modal 열고 닫기 관련 함수
  const [open, setOpen] = React.useState(false);

  const onClickToggleModal = useCallback(() => {
      setOpen(!open);
  }, [setOpen]);

  //리스트 구성을 위한 프로젝트 데이터 불러오는 함수
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let uuid = useSelector((state:RootState) => {
    return state.user.uuid;
  })

  //projectUuid : 현재 보고 있는 프로젝트의 uuid 가져옴
  const projectUuid = useSelector((state: RootState)=>{
    return state.project.uuid; 
  })


  //console.log("selector useSelector test : ", uuid);
  //console.log("Projectuuid useSelector test : ", projectUuid);


  const [currentProject, setCurrentProject] = useState('');
  useEffect(() => {
    (async () => {
      await axios.get<findProjectResponse>('api/v1/projects/' + projectUuid)
      .then((response) => {
        console.log("현재 위치한 프로젝트 불러옴");
        console.log("현위치 프로젝트 : ", response.data.data.name)
        setCurrentProject(response.data.data.name);
        console.log("저장상태 : ", currentProject)
      })
    })();
  })
  

  const [projects, setProjects] = useState<Project[]>([]);
  
  useEffect(() => {
    (async () => {
      await axios.get<ProjectResponse>('/api/v1/users/'+ uuid +'/projects')
      .then((response)=> {
        //console.log("프로젝트 정보 불러오기 성공");
        console.log("가져온 데이터", response.data.data.projects);
        setProjects(response.data.data.projects);
        //console.log("저장상태", projects);
      })
      .catch((error)=>{
        //console.log("프로젝트 정보 불러오기 실패");
        console.log(error);
      })
    })();
    
  }, []);
  

    return (
    <DropdownContainer>
      <ContainerDiv onClick={onToggle}>
        <LabelDiv>
          <TextDiv>{currentProject}</TextDiv>
        </LabelDiv>
      </ContainerDiv>
      <div>
        {isOpen &&
          <Menu>
            <SearchInput/>
            <Ul>
              
              {projects.map(project=> {
                const clickEvent = () => {
                  dispatch(setProjectUuid(project.uuid));
                  navigate('/Project');
                  window.location.reload();
                }
                return(
                <Li key={project.uuid}>
                  <LinkWrapper onClick={() => (clickEvent())}>{project.name}</LinkWrapper>
                </Li>
              );
                
              })}
              
              
            </Ul>
            
            <DDProjectModal onClickToggleModal = {onClickToggleModal}>create</DDProjectModal>
          </Menu>
        }
      </div>
    </DropdownContainer>
    );
}