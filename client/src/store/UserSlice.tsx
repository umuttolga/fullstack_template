import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: null,
  },
  reducers: {
    setData: (state, action) => {
      state.userData = action.payload;
    },

  },
});

// Action creators are generated for each case reducer function
export const {setData} = userSlice.actions;

export default userSlice.reducer;
