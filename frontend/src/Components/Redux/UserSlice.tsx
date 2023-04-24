import {createSlice, PayloadAction} from '@reduxjs/toolkit';

//임시적으로 회원가입 REST API를 통해 return하는 uuid 값을 저장할 수 있도록 세팅

const userSlice = createSlice({
  name: 'user',
  initialState:{
    uuid: '',
    email: '',
    photo:'',
    nickname:''
  },
  reducers: {
    setUuid: (state, action) => {
      state.uuid = action.payload;
    },

    setNickname: (state, action) => {
      state.nickname = action.payload;
    },

    setPhoto : (state, action) => {
      state.photo = action.payload;
    }

    },
});

export const { setUuid, setNickname, setPhoto } = userSlice.actions;
export default userSlice.reducer;