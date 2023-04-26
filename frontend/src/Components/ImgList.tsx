import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'; 
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box, shadows, BoxProps } from '@mui/system';
import { wrap } from 'module';
import { useDispatch, useSelector } from 'react-redux';
import { setUuid } from './Redux/UserSlice';
import { setProjectUuid } from './Redux/ProjectSlice';
import { RootState } from './Redux/Store';

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
        {projects.map((project) => {return(
        <Box sx={{...commonStyles, borderRadius:3, border:'transparent', boxShadow: 4}}>
            <ImageListItem key={project.uuid}>
            <img
            src={`img/tino.png/?w=164&h=164&fit=crop&auto=format`}
            srcSet={`img/tino.png/?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
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

// const itemData = [
//   {
//     img: 'img/tino.png',
//     title: 'tino',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
//     title: 'Burger',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
//     title: 'Camera',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
//     title: 'Coffee',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
//     title: 'Hats',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
//     title: 'Honey',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
//     title: 'Basketball',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//     title: 'Fern',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
//     title: 'Mushrooms',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
//     title: 'Tomato basil',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
//     title: 'Sea star',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
//     title: 'Bike',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
//     title: 'Bike',
//   },
// ];