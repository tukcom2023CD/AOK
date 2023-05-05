import * as React from 'react';
import { useEffect,useState } from "react";
import Box from '@mui/material/Box';
import { ThemeProvider,createTheme } from '@mui/material/styles';
import UpsideGray from '../Components/UpsideGray';
import { Typography, Button, TextField } from '@mui/material';
import BasicSelect from '../Components/ProjectSelect';
import BasicList from '../Components/List';
import AddIcon from '@mui/icons-material/Add';
import Profile from '../Components/Profile';
import styled from 'styled-components';
import { reverse } from 'dns';
import SelectBar from '../Components/SelectBar';
import EditIcon from '@mui/icons-material/Edit';
import TextField2 from '../Components/TextField2';
import TitleList from '../Components/Title/TitleList';
import ProjectSelect from '../Components/ProjectSelect';
import IosShareSharpIcon from '@mui/icons-material/IosShareSharp';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Components/Redux/Store';
import '../Components/Logscss.scss';


interface props{
    backgroundcolor?: string;
}

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
};

const LogDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const LogPreviewDiv = styled.div`
    width: 500px;
    height: 500px;
    border: 1px solid black;
    display: table;
    align-items: center;
    position: relative;
`;

const LogImageDiv = styled.div`
    display: table-cell;
    position: absolute;
    top: 50%;
    left: 50%,
    translate(-50%, -50%);
`;

const ImageDiv = styled.image`
    max-width: 400px;
    max-height: 500px;
`;

const ProfilePic = styled.div<props>`
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    margin-right: 0.8rem;
    background-color: ${(props) => props.backgroundcolor};
`;

interface RecentLogResponse{
    status: number;
    code: string;
    message: string;
    data: RecentLogInfo; 
}

interface RecentLogInfo{
    uuid: string;
}

interface LogResponse{
    status: number;
    code : string;
    message: string;
    data: LogInfo;
}

interface LogInfo{
    createdAt: string;
    resourceInfos: ResourcesData[];
    feedbackInfos: FeedbacksData[];
    message: string;
    userUuid: string;
}

interface ResourcesData {
    resources: Resource[]
}


interface Resource{
    name: string;
    uuid: string;
    link: string;
}

interface FeedbacksData{
    feedbacks: Feedback[]
}

interface Feedback{
    message: string;
    uuid: string;
    userUuid: string;
}



export default function Project() {
    const [text, setText] = useState("Hello, World!");


    const handleButtonClick = () => {
        setText("Button Clicked");
    };

    const handleCommentSubmit = (name: string, comment: string) => {
        console.log(`Submitted comment: ${name} - ${comment}`);
        };


    let branchUuid = useSelector((state:RootState) => {
        return state.branch.uuid; 
    })

    const [RecentLog, setRecentLog] = useState('');
    
    useEffect(() => {
        (async () => {
            await axios.get<RecentLogResponse>('/api/v1/branches/' + branchUuid + '/logs/recent')
            .then((response) => {
            console.log("최근 로그 uuid 불러옴");
            console.log("최근 로그 uuid : ", response.data.data.uuid)
            setRecentLog(response.data.data.uuid);
            console.log("uuid 저장상태 : ", RecentLog);
            
            axios.get<LogResponse>('/api/v1/logs/'+ RecentLog)
            .then((response) => {
            console.log("최근 로그 불러옴");
            console.log("최근 로그 : ", response.data);
            
            console.log(response.data.data.resourceInfos);
            setResources(response.data.data.resourceInfos);
            console.log(Resources);
            // const links = response.data.data.resourceInfos.map((resource: any) => resource.link);
            
            // console.log("메시지 ", response.data.data.message);
            // setLogMessage(response.data.data.message);
            })

            .catch((error)=>{
                console.log('최근 로그 불러오기 실패');
                console.log(error)
            })
            
            })
            .catch((error)=>{
                console.log('최근 로그 uuid 불러오기 실패');
                console.log('error')
            })
        })();
    }, [RecentLog]);
    //[RecentLog] 설정으로 딱 한번만 useEffect 호출해서 최근 로그 불러옴
    //새로고침해도 로그 내용이 사라지지 않는다

    
    const [LogMessage, setLogMessage] = useState('');
    const [Resources, setResources] = useState<ResourcesData[]>([]);
    
    
    // useEffect(() => {
    //     (async () => {
    //         await axios.get<LogResponse>('/api/v1/logs/'+ RecentLog)
    //         .then((response) => {
    //         console.log("최근 로그 불러옴");
    //         console.log("최근 로그 : ", response.data);
            
            
    //         console.log(response.data.data.resourceInfos);
    //         setResources(response.data.data.resourceInfos);
    //         console.log(Resources);
    //         // const links = response.data.data.resourceInfos.map((resource: any) => resource.link);
            
    //         // console.log("메시지 ", response.data.data.message);
    //         // setLogMessage(response.data.data.message);
    //         })

    //         .catch((error)=>{
    //             console.log('최근 로그 불러오기 실패');
    //             console.log(error)
    //         })
    //     })();
    // }, [])

    return (
            <Box sx={{ flexGrow: 1, flexShrink:1 }} display={'flex'} flexDirection={'column'} position={'fixed'}>
                 <Box width={'100vw'}  display={'flex'} > {/*상단바 */}
                    <Box width={'16vw'} display={'flex'} flexDirection={'column'} >
                        <Box width={'16vw'} >
                            <UpsideGray />
                        </Box>
                        <Box sx={{width:"16vw", height:"42px", alignText:'center', bgcolor:"#D9D9D9", alignContent:'center'}} >
                            <ProjectSelect/>
                        </Box>
                    </Box>
                    <Box width={'83vw'} >
                        <SelectBar />
                    </Box>
                </Box>

                <Box  width={'100vw'} display={'flex'} height={'100vh'}>
                    {/* 좌측 */}
                    <Box width={'16vw'} display={'flex'} flexDirection={'column'} sx={{bgcolor: '#F3F3F3'}}>
                        <BasicList />
                        <Box width={'16vw'}position={'fixed'} sx={{left:0, bottom:0, marginBottom: "10px"}}>
                            <Profile />
                        </Box>
                    </Box>
                    {/* 우측 */}
                    <Box display={'flex'} flexDirection={'column'} width={'100vw'} overflow={'auto'} height={"80vh"}>  
                    <Box>
    
                    </Box>
                        <Box display={'flex'} marginX={'auto'} marginTop={'50px'}>
                            {/* <img src="img/tino.png" alt="tino" width={'400px'} height={'400px'}/> */}
                            <div className='loginlineblockdDiv'>
                            <div className='logimagePreview'>
                                {Resources.map((resource: any)=>{
                                    return(
                                        <div className='logimagePreviewDiv'>
                                                <img src={resource.link} alt={resource.name} className={'logimageDiv'}></img>
                                        </div>
                                    );
                                })}
                            </div>
                            </div>
                        </Box>
                        

                        
                        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} marginLeft={'65px'} marginY={'20px'}>
                            <TitleList></TitleList>
                        </Box>
                        
                        <Box display={'flex'} justifyContent={'center'}>
                            <Typography sx={{color: "#838383", fontSize: '15px'}}>@Ellie</Typography>
                        </Box>
                        <Box display={'flex'} justifyContent={'center'}>
                            <Typography sx={{color: "#838383", fontSize: '15px'}}>23.08.01:22</Typography>
                        </Box>

                        <Box display={'flex'} justifyContent={'center'} marginRight={'200px'} marginTop ={'20px'}>
                            <ProfilePic backgroundcolor='#d9d9d9' />
                            <Box width={'350px'} bgcolor={'#FFEFEF'} padding={'10px'} borderRadius={'10px'}>
                                <Typography fontWeight={'bold'}>색이 조금 연했으면 좋겠어요.<br></br>선 굵기는 아주 좋아요!</Typography>
                            </Box>
                        </Box>


                        
                        <Box display={'flex'} justifyContent={'center'} marginTop={'50px'}>
                            {/* <UseFormControl /> */}
                            
                            <TextField2 />
                        </Box>
                    </Box>

                    <Box>
                    </Box>
                </Box> 
            </Box>
    );
}