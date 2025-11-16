import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { baseApi } from './features/api/baseApi'

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  // enhancers: (getDefaultEnhancers) => __DEV__ ? getDefaultEnhancers().concat(devToolsEnhancer()) : getDefaultEnhancers(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch