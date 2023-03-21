import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface LocationsState {
    activities: any[]
}

const initialState: LocationsState = {
    activities: [],
}

export const activitySlice = createSlice({
    name: 'activity-locations',
    initialState,
    reducers: {
        setActivities: (state, action: PayloadAction<any[]>) => {
            state.activities = action.payload
        },

    },
})

// Action creators are generated for each case reducer function
export const { setActivities } = activitySlice.actions

export default activitySlice.reducer