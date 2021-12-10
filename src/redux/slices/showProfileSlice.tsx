import {
    createSlice,
  } from '@reduxjs/toolkit'
  import { RootState } from '../store'
  
  export const showProfileSlice = createSlice({
    name: 'counter',
    initialState: {
      isProfileOpen: false,
    },
    reducers: {
      showProfile: (state) => {
        state.isProfileOpen = !state.isProfileOpen
      }
    }
  })
  
  export const {
    showProfile
  } = showProfileSlice.actions
  export const selectCount = (state: RootState) => state.openProfile
  
  export default showProfileSlice.reducer

  