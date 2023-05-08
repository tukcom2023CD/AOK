import * as React from 'react';
import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import CreateBtn from './CreateBtn';
import BranchModal from './ProjectModal';
import { useDispatch, useSelector } from 'react-redux';
import { setBranchUuid } from './Redux/BranchSlice';
import { RootState } from './Redux/Store';
import axios from 'axios';


interface BranchResponse{
    status: number;
    code: string;
    message: string;
    data: BranchesData;
}


interface BranchesData{
    projectBranchInfos: Branch[]
}

interface Branch{
    name: string;
    uuid: string; 
}


export default function BasicList() {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let projectUuid = useSelector((state: RootState)=>{
        return state.project.uuid; 
    });

    let branchUuid = useSelector((state: RootState) => {
        return state.branch.uuid;
    });

    const [branchData, setBranchData] = useState<Branch[]>([]);
    
    useEffect(() => {
        (async () => {
            await axios.get<BranchResponse>('/api/v1/projects/'+ projectUuid +'/branches')
            .then((response)=> {
                console.log("브랜치 정보 불러오기 성공");
                console.log("가져온 데이터", response.data.data.projectBranchInfos);
                setBranchData(response.data.data.projectBranchInfos);
                
            })
            .catch((error)=>{
                //console.log("프로젝트 정보 불러오기 실패");
                console.log(error);
            })
        })();
    }, []); 

    const onClickToggleModal = useCallback(() => {
        setOpen(!open);
    }, []);
    
    return (
    <div>
    <Box sx={{ width: '16vw', bgcolor: '#2F3F52'}}>    {/* 잉여공간 컬러 채움 */}
        <Divider />
        <nav aria-label="folders">
        <List>
            {branchData.map(branch => {
                const clickEvent = () => {
                    dispatch(setBranchUuid(branch.uuid));
                    navigate('/Project');
                    window.location.reload();
                }
                return(
                    <ListItem disablePadding>
                    <ListItemButton  onClick={()=>(clickEvent())}>
                        <ListItemText primary={branch.name} />
                    </ListItemButton>
                    </ListItem>
                );
                
                })}
        </List>
        </nav>
    </Box>
    <BranchModal onClickToggleModal = {onClickToggleModal}></BranchModal>
    </div>
    );
}