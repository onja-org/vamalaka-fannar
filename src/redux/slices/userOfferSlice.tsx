import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit'
import { FETCH_STATUS } from '../../constants'
import { createNewOffer, getUserOffers, sendQuery } from '../../graphqlHelper'
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

interface NewOfferData {
  id: string
  title: string
  body: string
  price: number
  unit: string
  currency: string
  categoryId: string
  amountOfProduct: number
  photos: [{
    url:string
    info: string
    isPrimary: boolean
  }]
}

interface NewOfferPayload {
  newOffer: NewOfferData
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

  const errorMessage = response?.data?.errors
  if (errorMessage) {
    return thunkApi.rejectWithValue({
      message: errorMessage?.[0].message,
    })
  }
  return userOffers
})

export const fetchCreateNewOffer = createAsyncThunk<
  NewOfferPayload,
  NewOfferData,
  {
    dispatch: AppDispatch
    state: RootState
    rejectValue: FetchUserOffersError
  }
>('fetchCreateNewOffer/fetch', async (getNewOffers, thunkApi) => {
  console.log('getNewOffers::::::',getNewOffers);
  const {title, body,currency,unit, price,categoryId,amountOfProduct, photos } = getNewOffers;  
  console.log('title, body,currency,unit, price,categoryId,amountOfProduct, photos::::::',title, body,currency,unit, price,categoryId,amountOfProduct, photos);
  const response = await sendQuery(createNewOffer(title, body,currency,unit, price,categoryId,amountOfProduct, photos))
  const newOffer = response.data.data
  
  if (response.status !== 200) {
    return thunkApi.rejectWithValue({
      message: 'Failed to fetch userOffers',
    })
  }
  const errorMessage = response?.data?.errors
  if (errorMessage) {
    return thunkApi.rejectWithValue({
      message: errorMessage?.[0].message,
    })
  }
  return newOffer
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
  },
  newOffer: {
    id: '',
    title: '',
    body: '',
    price: 0,
    unit: '',
    currency: '',
    categoryId: '',
    amountOfProduct: 0,
    photos: {
      url:'',
      info: '',
      isPrimary: false
    }
  },
  status: '',
  error: null as FetchUserOffersError | null,
}
export const userOffersSlice = createSlice({
  name: 'userOffer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserOffers.pending, (state) => {
      state.status = FETCH_STATUS.LOADING
      state.error = null
    })
    builder.addCase(fetchUserOffers.fulfilled, (state, { payload }) => {      
      state.userOffers = payload.getUserAds
      state.status = FETCH_STATUS.IDLE
    })
    builder.addCase(fetchUserOffers.rejected, (state, { payload }) => {
      if (payload) state.error = payload
      state.status = FETCH_STATUS.IDLE
    })
    builder.addCase(fetchCreateNewOffer.pending, (state, { payload }) => {
      if (payload) state.error = payload
      state.status = FETCH_STATUS.LOADING
    })
    builder.addCase(fetchCreateNewOffer.fulfilled, (state, { payload }) => {      
      state.newOffer = payload.newOffer as any
      state.status = FETCH_STATUS.IDLE
    })
    builder.addCase(fetchCreateNewOffer.rejected, (state, { payload }) => {
      if (payload) state.error = payload
      state.status = FETCH_STATUS.IDLE
    })
  },
})

export const selectStatus = (state: RootState) => state.ads.status
export const selectUserOffers = (state: RootState) => state.userOffers.userOffers;

export const userOffersStatusSelector = createSelector(
  selectStatus,
  (status) => status
)
export const userOffersSelector = createSelector(
  selectUserOffers,
  (userOffers) => userOffers
)

export default userOffersSlice.reducer
