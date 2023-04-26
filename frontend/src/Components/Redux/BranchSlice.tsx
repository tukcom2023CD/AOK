import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface BranchState {
  uuid: string;
}

const initialState: BranchState = {
  uuid: '',
}

const BranchSlice = createSlice({
  name: 'branch', 
  initialState,
  reducers: {
    setBranchUuid: (state, action:PayloadAction<string>) => {
      state.uuid = action.payload; 
    },
  }
});

export const { setBranchUuid } = BranchSlice.actions;
export default BranchSlice.reducer;