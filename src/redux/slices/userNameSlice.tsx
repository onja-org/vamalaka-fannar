import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import { sendQuery, getByUserName } from '../../graphqlHelper'
import { AppDispatch, RootState } from '../store'

interface FetchUserNameError {
  message: string
}

interface UserPhotos {
  url: string
  info: string
  isPrimary: boolean
}
interface UserNameData {
  username: string
  id: string
  photo: UserPhotos[]
}

// possible errors.
export const fetchUserName = createAsyncThunk<
  UserPhotos,
  UserNameData,
  {
    dispatch: AppDispatch
    state: RootState
    rejectValue: FetchUserNameError
  }
>('userName/fetch', async (userNameState, thunkApi) => {
  console.log(userNameState)
  const { username } = userNameState
  const response = await sendQuery(getByUserName(username))

  const userName = response.data.data
  if (response.status !== 200) {
    return thunkApi.rejectWithValue({
      message: 'Failed to fetch todos.',
    })
  }
  return userName
})

export const userNameSlice = createSlice({
  name: 'userName',
  initialState: {
    userName: {
      username: '',
      id: '',
      photo: {
        url: '',
        info: '',
        isPrimary: true,
      },
    },
  },
  reducers: {},
})

// Action creators are generated for each case reducer function
export const selectUserName = (state: RootState) => state.userName.userName

export const userNameSelector = createSelector<RootState, any, any>(
  selectUserName,
  (userName) => userName
)

export default userNameSlice.reducer
