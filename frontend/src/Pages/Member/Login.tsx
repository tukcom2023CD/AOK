import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
//나중에 사용할 색상들 확정나면 return div 바로 밑에 <ThemeProvider theme={theme}>

const LoginWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  text-align: center;
  margin: 0 auto;
`;

function Login() {
  return(
    <div>
      <LoginWrap>
        여기에 로고
      </LoginWrap>
    </div>
  );
}

export default Login;