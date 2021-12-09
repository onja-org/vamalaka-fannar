import {
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { sendQuery, getCategoriesQuery } from '../../graphqlHelper'
import { RootState } from '../store'

type FetchCategoryError = {
  message: string
}

export const fetchCategories = createAsyncThunk<
  any[],
  string[],
  { rejectValue: FetchCategoryError }
>('category/fetch', async (limit: string[], thunkApi) => {
  const response = await sendQuery(getCategoriesQuery())
  const categories = response?.data?.data?.categories

  if (response.status !== 200) {
    return thunkApi.rejectWithValue({
      message: 'Failed to fetch categories.',
    })
  }

  return categories
})

export const categoriesSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    categories: [] as any[],
    status: '',
    error: null as FetchCategoryError | null,
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.status = 'loading'
      state.error = null
    })

    builder.addCase(fetchCategories.fulfilled, (state, { payload }) => {
      state.categories = payload
      state.status = 'idle'
    })

    builder.addCase(fetchCategories.rejected, (state, { payload }) => {
      if (payload) state.error = payload
      state.status = 'idle'
    })
  },
})

export const {
  increment,
  decrement,
  incrementByAmount,
} = categoriesSlice.actions
export const selectCount = (state: RootState) => state.categories.value

export const selectCategories = (state: RootState) =>
  state.categories.categories
export const categoriesSelector = createSelector(
  selectCategories,
  (categories) => categories
)

export default categoriesSlice.reducer
