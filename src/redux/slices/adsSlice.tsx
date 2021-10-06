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
>('ads/fetch', async (limit: string[], thunkApi) => {
  // console.log(limit, limit)
  const response = await sendQuery(getAdsQuery())

  const ads = response?.data?.data?.ads
  if (response.status !== 200) {
    // Return the error message:
    return thunkApi.rejectWithValue({
      message: 'Failed to fetch todos.',
    })
  }

  return ads
})

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
    builder.addCase(fetchAds.pending, (state) => {
      state.status = FETCH_STATUS.LOADING
      state.error = null
    })

    builder.addCase(fetchAds.fulfilled, (state, { payload }) => {
      state.ads = payload
      state.status = FETCH_STATUS.IDLE
    })

    // When a server responses with an error:
    builder.addCase(fetchAds.rejected, (state, { payload }) => {
      if (payload) state.error = payload
      state.status = FETCH_STATUS.IDLE
    })
  },
})

// Action creators are generated for each case reducer function
export const selectAds = (state: RootState) => state.ads.ads
export const selectStatus = (state: RootState) => state.ads.status

export const adsSelector = createSelector<RootState, any[], any[]>(
  selectAds,
  (ads) => ads
)
export const adsStatusSelector = createSelector<RootState, string, string>(
  selectStatus,
  (status) => status
)

export default adsSlice.reducer
