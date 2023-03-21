import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface LocationsState {
    locations: any[]
}

const initialState: LocationsState = {
    locations: [],
}

export const activityLocationsSlice = createSlice({
    name: 'activity-locations',
    initialState,
    reducers: {
        setActivityLocations: (state, action: PayloadAction<any[]>) => {
            state.locations = action.payload
        },

    },
})

// Action creators are generated for each case reducer function
export const { setActivityLocations } = activityLocationsSlice.actions

export default activityLocationsSlice.reducer