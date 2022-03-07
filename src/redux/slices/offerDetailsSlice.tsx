import {
    createAsyncThunk,
    createSelector,
    createSlice,
} from '@reduxjs/toolkit'
import { sendQuery, getOfferDetailsById } from '../../graphqlHelper'
import { AppDispatch, RootState } from '../store'
import { FETCH_STATUS } from '../../constants'

type FetchOfferError = {
    message: string
}

interface UserOfferCategory {
    title: string
    id: string
}
interface UserOfferUser {
    username: string
    email: string
    id: string
}

interface UserOfferData {
    id: string
    title: string
    body: string
    category: UserOfferCategory
    user: UserOfferUser
}

interface UserOfferPayload {
    getad: UserOfferData
}

interface OfferId {
    offerId: string
}

export const fetchOfferDetails = createAsyncThunk<
    UserOfferPayload,
    OfferId,
    {
        dispatch: AppDispatch
        state: RootState
        rejectValue: FetchOfferError
    }
>('offer/fetch', async (fetchOfferDetails, thunkApi) => {
    const { offerId } = fetchOfferDetails;
    const response = await sendQuery(getOfferDetailsById(offerId))
    const offer = response.data.data

    if (response.status !== 200) {
        return thunkApi.rejectWithValue({
        message: 'Failed to fetch userOffer.',
        })
    }
    return offer
})

const initialState = {
    offerDetails: {
        id: '',
        body: '',
        title: '',
        category: { title: '', id: '' },
        user: {
            email: '',
            username: '',
            id: ''
        },
    },
    status: '',
    error: null as FetchOfferError | null,
}
export const offerDetailsSlice = createSlice({
    name: 'offer',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchOfferDetails.pending, (state) => {
            state.status = FETCH_STATUS.LOADING
            state.error = null
        })
        builder.addCase(fetchOfferDetails.fulfilled, (state, { payload }) => {
            state.offerDetails = payload.getad
            state.status = FETCH_STATUS.IDLE
        })
        builder.addCase(fetchOfferDetails.rejected, (state, { payload }) => {
            if (payload) state.error = payload
            state.status = FETCH_STATUS.IDLE
          })
    },
})

export const selectOffer = (state: RootState) => state.offerDetails.offerDetails;

export const offerDetailsSelector = createSelector(
    selectOffer,
(offer) => offer
)

export default offerDetailsSlice.reducer