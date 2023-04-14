import React, { useEffect, useState, useRef } from 'react';
import Lottie from "lottie-web";
import LottieData from "./Lottie/uploding.json";
import styled from "styled-components";

const LottieWholeDiv = styled.div`
  display: flex;
  align-items: center; 
  width: 500px;
  height: 500px;
  border-radius: 10px;
  backdrop-filter: blur(20px);
`;

const LottieDiv = styled.div`
  max-width: 100px;
  max-height: 100px;
`;

function LottieUpload () {
  const LottieContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if(LottieContainer.current){
      Lottie.loadAnimation({
        container: LottieContainer.current,
        loop: false,
        autoplay: true,
        animationData: require('./Lottie/uploding.json'),
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid meet'
        }
      })
    }
  });
  


  return(
    <LottieWholeDiv>
      <LottieDiv>
        <div ref={LottieContainer}/>
      </LottieDiv>
    </LottieWholeDiv>
  );

};



export default LottieUpload;