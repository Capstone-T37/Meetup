import { configureStore } from '@reduxjs/toolkit'
import locationsReducer from './slices/locationsSlice'
import permissionReducer from './slices/permissionSlice'
import userIdReducer from './slices/userIdSlice'
import { activityLocationsSlice } from './slices/activityLocationSlice'

export const store = configureStore({
  reducer: {
    permission: permissionReducer,
    locations: locationsReducer,
    activityLocations: locationsReducer,
    id: userIdReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch