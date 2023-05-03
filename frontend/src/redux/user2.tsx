import axios from "axios";
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

const kakaoLogin = (code: string) => {
    return function (dispatch :any, getState :any) {
        axios({
            method: "GET",
            url: `http://localhost:3000/?code=${code}`,
        })
        .then((res) => {
            //get token
            console.log(res);
            
            const ACCESS_TOKEN = res.data.accessToken;

            //local store (temp)
            localStorage.setItem("token", ACCESS_TOKEN);

            window.alert("Login success...");
            //get token -> change page to HOME
            //history.replace("/home"); 
        
        }).catch((err) => {
            console.log("Login error", err);
            window.alert("Login failed...");
            //history.replace("/home");
        });
    }
};

const actionCreators = { kakaoLogin }; 

export { actionCreators }
