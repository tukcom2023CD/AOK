import {createSlice, PayloadAction} from '@reduxjs/toolkit';

//data만 저장하는 Redux

interface userState {
  data: {
    uuid: string;
    email: string;
    nickname: string;
    photo: string;
  } | null; 
}

const initialState: userState = {
  data: null,
}


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<userState['data']>) =>{
      state.data = action.payload;
    },
  },
  
});

export const { setData } = userSlice.actions;
export default userSlice.reducer;