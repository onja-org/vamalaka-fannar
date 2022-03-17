import {
    createAsyncThunk,
    createSelector,
    createSlice,
} from '@reduxjs/toolkit'
import { Photo } from '../../components/MyAccount/MyAccount'
import { FETCH_STATUS } from '../../constants'
import { sendQuery, getOfferById, updateAd, sendAuthorizedQuery } from '../../graphqlHelper'
import { AppDispatch, RootState } from '../store'

type FetchOfferError = {
    message: string
}

interface OfferByIdUser {
    username: string
    email: string
    id: string
}
interface OfferbyIdCategory {
    title: string
    id: string
}

interface UserOfferData {
    id: string
    user: OfferByIdUser
    title: string
    body: string,
    amountOfProduct: number
    price: number
    unit: string
    currency: string
    category: OfferbyIdCategory
}

interface OfferByIdPayload {
    getad: UserOfferData
}
interface OfferById {
    id: string
}
interface OfferUpdateAd {
    id: string,
    title?: string,
    body?: string,
    photos?: [Photo],
    currency?: string,
    price?: number,
    unit?: string,
    amountOfProduct?: number,
    categoryId?: string
}

interface OfferUpdateApPayload {
    updatead: {
        id: string,
        title: string,
        body: string,
        photos: {
            url: string
        },
        currency: string,
        price: number,
        unit: string,
        amountOfProduct: string
        categoryId: string
    }
}

export const fetchOfferById = createAsyncThunk<
    OfferByIdPayload,
    OfferById,
    {
        dispatch: AppDispatch
        state: RootState
        rejectValue: FetchOfferError
    }
>('getad/fetch', async (offerByIdForm, thunkApi) => {
    const { id } = offerByIdForm
    const response = await sendQuery(getOfferById(id))
    const getad = response.data.data
    if (response.status !== 200) {
        return thunkApi.rejectWithValue({
            message: 'Failed to fetch offer by id.',
        })
    }

    return getad
})

export const offerByIdSlice = createSlice({
    name: 'counter',
    initialState: {
        getad: {
            id: '',
            title: '',
            body: '',
            amountOfProduct: 3,
            price: 0,
            unit: "",
            currency: "",
            category: {
                title: '',
                id: ''
            },
            user: {
                username: '',
                email: '',
                id: ''
            },

        },
        status: '',
        error: null as FetchOfferError | null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchOfferById.pending, (state) => {
            state.status = 'loading'
            state.error = null
        })

        builder.addCase(fetchOfferById.fulfilled, (state, { payload }) => {
            state.getad = payload.getad
            state.status = FETCH_STATUS.IDLE
        })

        builder.addCase(fetchOfferById.rejected, (state, { payload }) => {
            if (payload) state.error = payload
            state.status = 'idle'
        })
    },
})

export const fetchOfferUpdateAd = createAsyncThunk<
    OfferUpdateApPayload,
    OfferUpdateAd,
    {
        dispatch: AppDispatch
        state: RootState
        rejectValue: FetchOfferError
    }
>('updatead/fetch', async (updateAdForm, thunkApi) => {
    const { id, title, body, photos, currency, price, unit, amountOfProduct, categoryId } = updateAdForm
    const token = thunkApi.getState().user.user.token || ''
    const response = await sendAuthorizedQuery(updateAd(id, title, body, photos, currency, price, unit, amountOfProduct, categoryId), token)
    const updatead = response.data.data.updatead
    if (response.status !== 200 || !updatead) {
        const message = response.data?.errors?.[0]?.message || 'Failed to update offer.'
        return thunkApi.rejectWithValue({
            message
        })
    }

    return updatead
})

export const offerUpdateAddSlice = createSlice({
    name: 'counter',
    initialState: {
        updatead: {
            id: " ",
            title: " ",
            body: " ",
            photos: {
                url: ""
            },
            currency: " ",
            price: 0,
            unit: " ",
            amountOfProduct: " ",
            categoryId: " "
        },
        status: '',
        error: null as FetchOfferError | null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchOfferUpdateAd.pending, (state) => {
            state.error = null
        })

        builder.addCase(fetchOfferUpdateAd.fulfilled, (state, { payload }) => {
            state.updatead = payload.updatead
            state.status = FETCH_STATUS.IDLE
            state.error = null
        })

        builder.addCase(fetchOfferUpdateAd.rejected, (state, { payload }) => {
            if (payload) state.error = payload
            state.status = 'idle'
        })
    },
})

export const selectCount = (state: RootState) => state.getad.getad
export const selectOfferById = (state: RootState) =>
    state.getad.getad
export const offerByIdSelector = createSelector(
    selectOfferById,
    (getad) => getad
)

export const selectUpdateAdError = (state: RootState) => state.updatead.error
export const selectUpdateAd = (state: RootState) => state.updatead.updatead

export const offerUpdateAdSelector = createSelector(
    selectUpdateAd,
    (updatead) => updatead
)

export const offerUpdateAddSliceReducer = offerUpdateAddSlice.reducer
export default offerByIdSlice.reducer

