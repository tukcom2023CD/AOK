import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box, shadows, BoxProps } from '@mui/system';
import { wrap } from 'module';
import { useDispatch, useSelector } from 'react-redux';
import { setUuid } from './Redux/UserSlice';
import { setProjectUuid } from './Redux/ProjectSlice';
import { RootState } from './Redux/Store';
import crepeimg from '../Images/crepeimg.png'; 

const commonStyles = {
    border: 1,
    mx:3,
    my:1,
    padding: 1
};

interface ProjectResponse{
  status: number;
  code: string;
  message: string;
  data: ProjectsData;
}

interface Project{
  name: string;
  uuid: string;
}

interface ProjectsData{
  projects: Project[] 
}


export default function ImgList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let uuid = useSelector((state:RootState) => {
    return state.user.uuid;
  })
  
  const [projects, setProjects] = useState<Project[]>([]);
  
  useEffect(() => {
    (async () => {
      await axios.get<ProjectResponse>('/api/v1/users/'+ uuid +'/projects')
      .then((response)=> {
        console.log("프로젝트 정보 불러오기 성공");
        console.log("가져온 데이터", response.data.data.projects);
        setProjects(response.data.data.projects);
        console.log("저장상태", projects);
      })
      .catch((error)=>{
        console.log("프로젝트 정보 불러오기 실패");
        console.log(error);
      })
    })();
    
  }, []);


    return (
    <ImageList sx={{ width: 1300, margin: 2, flexWrap: 'wrap', maxWidth: '800'}} cols={4} rowHeight={300}>
      {/* <ImageList sx={{ width: 1300, height: 670, margin: 2, flexWrap: 'wrap', maxWidth: '800'}} cols={4} rowHeight={300}> */}
        {projects.map((project) => {
          const clickEvent = () => {
            dispatch(setProjectUuid(project.uuid));
            navigate('/project'); 
          }
          return(
          <Box sx={{...commonStyles, borderRadius:3, border:'transparent', boxShadow: 4}} onClick={() => (clickEvent())}>
              <ImageListItem key={project.uuid}>
              <img
              src={`${crepeimg}/?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${crepeimg}/?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={project.name}
              loading="lazy"
              
              />
              <Box sx={{display:'flex', justifyContent:'center', fontWeight:'bold', fontSize:'20px', marginBottom:0.1}}>{project.name}</Box>
              <Box sx={{display:'flex', justifyContent:'center', fontSize:'13px', color:'darkgray'}}>23.01.03 08:01:22</Box>
          </ImageListItem>
          </Box>
        )})}
    </ImageList>
    );
}

