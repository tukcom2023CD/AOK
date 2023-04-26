import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ProjectState {
  uuid: string;
}

const initialState: ProjectState = {
  uuid: '',
}

const ProjectSlice = createSlice({
  name: 'project', 
  initialState,
  reducers: {
    setProjectUuid: (state, action:PayloadAction<string>) => {
      state.uuid = action.payload; 
    },
  }
});

export const { setProjectUuid } = ProjectSlice.actions;
export default ProjectSlice.reducer;