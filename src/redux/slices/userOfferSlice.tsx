import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit'
import { getUserOffers, sendQuery } from '../../graphqlHelper'
import { AppDispatch, RootState } from '../store'

type FetchUserOffersError = {
  message: string
}

interface UserOffersCategory {
  title: string
}
interface UserOffersUser {
  email: string
  username: string
}
interface UserOffersData {
  id: string
  user: UserOffersUser
  title: string
  body: string,
  category: UserOffersCategory
}

interface UserOffersPayload {
  getUserAds: UserOffersData
}

interface UserId {
  userId: string
}

export const fetchUserOffers = createAsyncThunk<
  UserOffersPayload,
  UserId,
  {
    dispatch: AppDispatch
    state: RootState
    rejectValue: FetchUserOffersError
  }
>('getUserAds/fetch', async (fetchUserOffers, thunkApi) => {
  const { userId } = fetchUserOffers;  
  const response = await sendQuery(getUserOffers(userId))
  const userOffers = response.data.data
  
  if (response.status !== 200) {
    return thunkApi.rejectWithValue({
      message: 'Failed to fetch userOffers',
    })
  }
  return userOffers
})

const initialState = {
  userOffers: {
    id: '',
    title: '',
    category: { title: '' },
    user: {
      email: '',
      username: ''
    },
    body: ''
  }
}
export const userOffersSlice = createSlice({
  name: 'userOffer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserOffers.fulfilled, (state, { payload }) => {      
      state.userOffers = payload.getUserAds
    })
  },
})

export const selectUserOffers = (state: RootState) => state.userOffers.userOffers;

export const userOffersSelector = createSelector(
  selectUserOffers,
  (userOffers) => userOffers
)

export default userOffersSlice.reducer
