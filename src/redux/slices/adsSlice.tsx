import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import { FETCH_STATUS } from '../../constants'
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
  // that contains all those fieldsgit push origin HEAD
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
  },
  extraReducers: (builder) => {
    // When we send a request,
    // `fetchAds.pending` is being fired:
    builder.addCase(fetchAds.pending, (state) => {
      // At that moment,
      // we change status to `loading`
      // and clear all the previous errors:
      state.status = FETCH_STATUS.LOADING
      state.error = null
    })

    // When a server responses with the data,
    // `fetchAds.fulfilled` is fired:
    builder.addCase(fetchAds.fulfilled, (state, { payload }) => {
      // We add all the new todos into the state
      // console.log('full', payload)

      // and change `status` back to `idle`:
      state.ads = payload
      state.status = FETCH_STATUS.IDLE
    })

    // When a server responses with an error:
    builder.addCase(fetchAds.rejected, (state, { payload }) => {
      // We show the error message
      // and change `status` back to `idle` again.
      // console.log(payload, 'REjected error')
      if (payload) state.error = payload
      state.status = FETCH_STATUS.IDLE
    })
  },
})

// Action creators are generated for each case reducer function
export const selectAds = (state: RootState) => state.ads.ads
export const selectStatus = (state: RootState) => state.ads.status

// <RootState, any[], any[]>
export const adsSelector = createSelector(
  selectAds,
  (ads) => ads
)

// <RootState, string, string>
export const adsStatusSelector = createSelector(
  selectStatus,
  (status) => status
)

export default adsSlice.reducer
