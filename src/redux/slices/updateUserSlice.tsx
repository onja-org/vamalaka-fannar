import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import { FETCH_STATUS } from '../../constants'
import { sendQuery, updateUserMutation } from '../../graphqlHelper'
import { RootState } from '../store'

type fetchUpDateUserError = {
  message: string
}

// possible errors.
export const fetchUpDateUser = createAsyncThunk<
  any[],
  string[],
  { rejectValue: fetchUpDateUserError }
>(
  'updateUser/fetch',
  // The second argument, `thunkApi`, is an object
  // that contains all those fieldsgit push origin HEAD
  // and the `rejectWithValue` function:
  async (limit: string[], thunkApi) => {
    // console.log(limit, limit)
    const response = await sendQuery(updateUserMutation())
    const updateUser = response?.data?.data?.updateUser
    console.log(updateUser , 'updateUserupdateUserupdateUser')
    // const data: any[] = await response.json();
    // console.log(updateUser, 'updateUser')

    // Check if status is not okay:
    if (response.status !== 200) {
      // Return the error message:
      return thunkApi.rejectWithValue({
        message: 'Failed to fetch todos.',
      })
    }

    return updateUser
  }
)

export const updateUserSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    updateUser: [] as any[],
    status: '',
    error: null as fetchUpDateUserError | null,
  },
  reducers: {
    //TODO remove used only as an example
  },
  extraReducers: (builder) => {
    // When we send a request,
    // `fetchUpDateUser.pending` is being fired:
    builder.addCase(fetchUpDateUser.pending, (state) => {
      // At that moment,
      // we change status to `loading`
      // and clear all the previous errors:
      state.status = FETCH_STATUS.LOADING
      state.error = null
    })

    // When a server responses with the data,
    // `fetchUpDateUser.fulfilled` is fired:
    builder.addCase(fetchUpDateUser.fulfilled, (state, { payload }) => {
      // We add all the new todos into the state
      // console.log('full', payload)

      // and change `status` back to `idle`:
      state.updateUser = payload
      state.status = FETCH_STATUS.IDLE
    })

    // When a server responses with an error:
    builder.addCase(fetchUpDateUser.rejected, (state, { payload }) => {
      // We show the error message
      // and change `status` back to `idle` again.
      // console.log(payload, 'REjected error')
      if (payload) state.error = payload
      state.status = FETCH_STATUS.IDLE
    })
  },
})

// Action creators are generated for each case reducer function
export const selectupdateUser = (state: RootState) => state.updateUser.updateUser
export const selectStatus = (state: RootState) => state.updateUser.status

export const updateUserSelector = createSelector(
  selectupdateUser,
  (updateUser) => updateUser
)
export const updateUserStatusSelector = createSelector(
  selectStatus,
  (status) => status
)

export default updateUserSlice.reducer
