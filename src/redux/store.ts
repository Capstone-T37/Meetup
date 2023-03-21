import { configureStore } from '@reduxjs/toolkit'
import locationsReducer from './slices/locationsSlice'
import permissionReducer from './slices/permissionSlice'
import userIdReducer from './slices/userIdSlice'
import activityReducer from './slices/activitySlice'
import activityLocationsReducer  from './slices/activityLocationSlice'

export const store = configureStore({
  reducer: {
    permission: permissionReducer,
    locations: locationsReducer,
    activityLocations: activityLocationsReducer,
    activities: activityReducer,
    id: userIdReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch