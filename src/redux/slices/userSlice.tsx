import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import { sendQuery, registerMutation, loginMutation } from '../../graphqlHelper'
import { AppDispatch, RootState } from '../store'

type fetchUserRegisterError = {
  message: string
}

type FetchUserLoginError = {
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

interface PayloadForm {
  register: UserRegister
}
interface UserLogin {
  username: string
  password: string
}

interface LoginFormPayload {
  login: UserLogin
}

export const fetchUserRegister = createAsyncThunk<
  PayloadForm,
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

export const fetchUserLogin = createAsyncThunk<
  LoginFormPayload,
  UserLogin,
  {
    dispatch: AppDispatch
    state: RootState
    rejectValue: FetchUserLoginError
  }
>('user/login', async (userRegisterForm, thunkApi) => {
  const { username, password } = userRegisterForm

  const response = await sendQuery(loginMutation(username, password))

  const user = response.data.data

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
  user: { username: '', password: '' } as UserData,
  status: '',
  registerError: null as fetchUserRegisterError | null,
  loginError: null as FetchUserLoginError | null,
}

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserRegister.pending, (state) => {
      state.status = 'loading'
      state.registerError = null
    })
    builder.addCase(fetchUserRegister.fulfilled, (state, { payload }) => {
      state.user = payload?.register
      state.status = 'idle'
    })
    builder.addCase(fetchUserRegister.rejected, (state, { payload }) => {
      if (payload) state.registerError = payload
      state.status = 'idle'
    })
    builder.addCase(fetchUserLogin.pending, (state) => {
      state.status = 'loading'
      state.loginError = null
    })
    builder.addCase(fetchUserLogin.fulfilled, (state, { payload }) => {
      state.user = payload?.login
      state.status = 'idle'
    })
    builder.addCase(fetchUserLogin.rejected, (state, { payload }) => {
      if (payload) state.loginError = payload
      state.status = 'idle'
    })
  },
})

const selectUser = (state: RootState) => state.user.user
const selectRegisterError = (state: RootState) => state?.user?.registerError
const selectLoginError = (state: RootState) => state?.user?.loginError
const selectUserStatus = (state: RootState) => state?.user?.status

export const userSelector = createSelector<RootState, any, any>(
  selectUser,
  (user) => user
)

export const userErrorLogin = createSelector<RootState, any, any>(
  selectLoginError,
  (loginError) => loginError
)

export const userErrorRegister = createSelector<RootState, any, any>(
  selectRegisterError,
  (registerError) => registerError
)
export const userStatusSelector = createSelector<RootState, any, any>(
  selectUserStatus,
  (status) => status
)

export default userSlice.reducer
