import {
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { sendQuery, getAdsQuery } from '../../graphqlHelper'
import { RootState } from '../store'

type FetchAdsError = {
  message: string
}

// possible errors.
export const fetchAds = createAsyncThunk<
  any[],
  string[],
  { rejectValue: FetchAdsError }
>(
  'ads/fetch',
  // The second argument, `thunkApi`, is an object
  // that contains all those fields
  // and the `rejectWithValue` function:
  async (limit: string[], thunkApi) => {
    // console.log(limit, limit)
    const response = await sendQuery(getAdsQuery())

    const ads = response?.data?.data?.ads
    // const data: any[] = await response.json();
    // console.log(ads, 'ads')

    // Check if status is not okay:
    if (response.status !== 200) {
      // Return the error message:
      return thunkApi.rejectWithValue({
        message: 'Failed to fetch todos.',
      })
    }

    return ads
  }
)

export const adsSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    ads: [] as any[],
    status: '',
    error: null as FetchAdsError | null,
  },
  reducers: {
    //TODO remove used only as an example
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    //TODO remove used only as an example
    decrement: (state) => {
      // console.log(state.value, 'dec')
      state.value -= 1
    },
    //TODO remove used only as an example
    incrementByAmount: (state, action: PayloadAction<number>) => {
      // console.log(action, 'incbyamAC')
      // console.log(state, 'increment')
      state.value += action.payload
    },
  },
  extraReducers: (builder) => {
    // When we send a request,
    // `fetchAds.pending` is being fired:
    builder.addCase(fetchAds.pending, (state) => {
      // At that moment,
      // we change status to `loading`
      // and clear all the previous errors:
      state.status = 'loading'
      state.error = null
    })

    // When a server responses with the data,
    // `fetchAds.fulfilled` is fired:
    builder.addCase(fetchAds.fulfilled, (state, { payload }) => {
      // We add all the new todos into the state
      // console.log('full', payload)

      // and change `status` back to `idle`:
      state.ads = payload
      state.status = 'idle'
    })

    // When a server responses with an error:
    builder.addCase(fetchAds.rejected, (state, { payload }) => {
      // We show the error message
      // and change `status` back to `idle` again.
      // console.log(payload, 'REjected error')
      if (payload) state.error = payload
      state.status = 'idle'
    })
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = adsSlice.actions
export const selectCount = (state: RootState) => state.ads.value

export const selectAds = (state: RootState) => state.ads.ads
export const adsSelector = createSelector<RootState, any[], any[]>(
  selectAds,
  (ads) => ads
)

export default adsSlice.reducer
