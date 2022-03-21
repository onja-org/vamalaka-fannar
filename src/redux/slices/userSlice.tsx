import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import { FETCH_STATUS } from '../../constants'
import { sendQuery, registerMutation, loginMutation } from '../../graphqlHelper'
import { AppDispatch, RootState } from '../store'

type fetchUserRegisterError = {
  message: string
}

type FetchUserLoginError = {
  message: string
}

interface Photo {
  url: string,
  isPrimary: boolean
}

interface UserData {
  username: string
  photos: Photo
  createdAt?: string
  email?:string
  id?:string
  token?:string
  
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
  login: UserData
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
  user: { id: '', username: '', password: '', photos: {url:'', isPrimary:false} } as any,
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
      state.status = FETCH_STATUS.LOADING
      state.registerError = null
    })
    builder.addCase(fetchUserRegister.fulfilled, (state, { payload }) => {
      state.user = payload?.register
      state.status = FETCH_STATUS.IDLE
    })
    builder.addCase(fetchUserRegister.rejected, (state, { payload }) => {
      if (payload) state.registerError = payload
      state.status = FETCH_STATUS.IDLE
    })
    builder.addCase(fetchUserLogin.pending, (state) => {
      state.status =  FETCH_STATUS.LOADING
      state.loginError = null
    })
    builder.addCase(fetchUserLogin.fulfilled, (state, { payload }) => {
      state.user = payload.login
      state.status = FETCH_STATUS.IDLE
    })
    builder.addCase(fetchUserLogin.rejected, (state, { payload }) => {
      if (payload) state.loginError = payload
      state.status = FETCH_STATUS.IDLE
    })
  },
})

const selectUser = (state: RootState) => state.user.user
const selectRegisterError = (state: RootState) => state?.user?.registerError
const selectLoginError = (state: RootState) => state?.user?.loginError
const selectUserStatus = (state: RootState) => state?.user?.status

export const userSelector = createSelector(
  selectUser,
  (user) => user
)

export const userErrorLogin = createSelector(
  selectLoginError,
  (loginError) => loginError
)

export const userErrorRegister = createSelector(
  selectRegisterError,
  (registerError) => registerError
)
export const userStatusSelector = createSelector(
  selectUserStatus,
  (status) => status
)

export default userSlice.reducer
