import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { LocationObject } from 'expo-location';

export interface LocationsState {
    locations: any[]
}

const initialState: LocationsState = {
    locations: [],
}

export const LocationsSlice = createSlice({
    name: 'locations',
    initialState,
    reducers: {
        addLocation: (state, action: PayloadAction<any>) => {
            state.locations = state.locations.filter(item => item.id !== action.payload.id)
            state.locations.push(action.payload)
        },
        setLocations: (state, action: PayloadAction<any[]>) => {
            state.locations = action.payload
        },

    },
})


// Action creators are generated for each case reducer function
export const { addLocation,setLocations } = LocationsSlice.actions

export default LocationsSlice.reducer