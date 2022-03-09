import { combineReducers, configureStore } from '@reduxjs/toolkit'
import adsReducer from './slices/adsSlice'
import userReducer from './slices/userSlice'
import { routerMiddleware, connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import categoriesReducer from './slices/categoriesSlice'
import userOfferReducer from './slices/userOfferSlice'

export const history = createBrowserHistory()

export const rootReducer = combineReducers({
  router: connectRouter(history) as any,
  user: userReducer,
  ads: adsReducer,
  categories: categoriesReducer,
  userOffers: userOfferReducer
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(routerMiddleware(history)),
})
