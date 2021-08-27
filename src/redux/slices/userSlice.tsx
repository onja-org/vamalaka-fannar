import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import { sendQuery, registerMutation } from '../../graphqlHelper'
import { AppDispatch, RootState } from '../store'

type fetchUserRegisterError = {
  message: string
}

interface UserData {
  username: string
}

interface UserRegister {
  username: string
  password: string
  email: string
  confirmPassword: string
  role: string
}

interface payloadForm {
  register: UserRegister
}

export const fetchUserRegister = createAsyncThunk<
  payloadForm,
  UserRegister,
  {
    dispatch: AppDispatch
    state: RootState
    rejectValue: fetchUserRegisterError
  }
>('user/fetch', async (userRegisterForm, thunkApi) => {
  const { username, password, email, confirmPassword, role } = userRegisterForm

  const response = await sendQuery(
    registerMutation(username, password, email, confirmPassword, role)
  )

  const user = response.data.data
  console.log(user)

  if (response.status !== 200) {
    return thunkApi.rejectWithValue({
      message: 'Failed to fetch todos.',
    })
  }

  const errorMessage = response?.data?.errors
  if (errorMessage) {
    return thunkApi.rejectWithValue({
      message: errorMessage?.[0].message,
    })
  }
  return user
})

const initialState = {
  user: { username: '' } as UserData,
  status: '',
  error: null as fetchUserRegisterError | null,
}

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserRegister.pending, (state) => {
      state.status = 'loading'
      state.error = null
    })
    builder.addCase(fetchUserRegister.fulfilled, (state, { payload }) => {
      state.user = payload?.register
      state.status = 'idle'
    })
    builder.addCase(fetchUserRegister.rejected, (state, { payload }) => {
      if (payload) state.error = payload
      state.status = 'idle'
    })
  },
})

const selectUser = (state: RootState) => state.user.user
const selectUserError = (state: RootState) => state?.user?.error
const selectUserStatus = (state: RootState) => state?.user?.status

export const userSelector = createSelector<RootState, any, any>(
  selectUser,
  (user) => user
)

console.log(selectUser)

export const userErrorRegister = createSelector<RootState, any, any>(
  selectUserError,
  (error) => error
)
export const userStatusSelector = createSelector<RootState, any, any>(
  selectUserStatus,
  (status) => status
)

export default userSlice.reducer
