import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import kakao_login_medium_wide from '../Images/kakao_login_medium_wide.png';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

interface Props {
  imgSrc: string;
  onClick: () => void;
}

const ImageButton = styled.div`
  width: 330px;
  height: 40px;
  background-image: url(${"img/kakao_login_medium_wide.png"});
  background-position: center;
  background-repeat: no-repeat;
`;

function Copyright(props: any) {
  const handleClick = () => {
    console.log('Button Click');
  }
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#364F6B',
    },

    background: {
      default: 'white',
    }
  }
});

export default function SignIn() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  //임시로 카카오 버튼에 Main 페이지로 가는 라우팅을 걸었습니다.
  //후에 로그인 구현이 완료되면 라우팅은 교체해 주세요.
  const navigate = useNavigate();
  const MainNavigate = navigate('/main'); 

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" sx={{width:'100vw', bgcolor: '#FFFFFF', p:'20px', mx:'auto', mt:'30vh', backgroundColor:'#1A2634'}}>
        {/* primary */}
        <CssBaseline />
        <Box
          sx={{
            marginY: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'white' , fontSize:'30px'}}>
            <LockOutlinedIcon  sx={{color:'primary.main'}}/>
          </Avatar>
          <Typography component="h1" variant="h5" color={"white"}>
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Box marginTop={"60px"}>
              <ImageButton onClick={()=>navigate("/main")}/>
            </Box>
            <Grid container display={'flex'} justifyContent={'center'}>
              <Grid item>
              <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: '1rem', mb: 2, width: '300px', backgroundColor:'white', color:'primary.main' }}
            >
              <Typography fontWeight={'bold'} fontSize={'15px'}>Sign Up</Typography>
            </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
}
