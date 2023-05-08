import React from "react";
import { useDispatch } from "react-redux";
import { ActionCreator } from 'redux';
import { Typography, Box, Container } from '@mui/material';
import { actionCreators as userActions } from "../redux/user2";

const RedirectHandler = (props :any) => {
  //Dispatch: store에 있는 데이터를 컨트롤 하기 위함
  const dispatch = useDispatch();
  //인가 코드
  const code = new URL(window.location.href).searchParams.get("code");
  console.log(code);

  React.useEffect(() => {
    const fetchData = async () => {
      //dispatch(userActions.kakaoLogin(code));
      //await dispatch(userActions.kakaoLogin(code));
    };
    fetchData();
  }, []);

  // React.useEffect(async () => {
  //   await dispatch(userActions.kakaoLogin(code));
  // }, []);
  
  return (
    <div></div>
  );
}

export default RedirectHandler;