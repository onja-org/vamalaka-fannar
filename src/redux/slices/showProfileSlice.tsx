import { createSlice } from '@reduxjs/toolkit'
  
  export const showProfileSlice = createSlice({
    name: 'openProfile',
    initialState: {
      isProfileOpen: false,
    },
    reducers: {
      showProfile: (state) => {
        state.isProfileOpen = !state.isProfileOpen
      }
    }
  })

  // Action creators are generated for each case reducer function
  export const {showProfile} = showProfileSlice.actions
  export const openMyProfile = state => state.openProfile  
  export default showProfileSlice.reducer

  













// import { createSelector, createSlice } from '@reduxjs/toolkit'
// import { RootState } from '../store'
  
//   export const showProfileSlice = createSlice({
//     name: 'openProfile',
//     initialState: {
//       isProfileOpen: false,
//     },
//     reducers: {
//       showProfile: (state) => {
//         state.isProfileOpen = !state.isProfileOpen
//       }
//     }
//   })

//   // Action creators are generated for each case reducer function
//   export const openMyProfile = (state: RootState) => state.openProfile
//   export const showProfileSelector = createSelector(openMyProfile, (isProfileOpen) => isProfileOpen)
//   export default showProfileSlice.reducer

  