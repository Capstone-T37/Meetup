import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { LocationObject } from 'expo-location';

export interface userIdState {
    id: string | null
}

const initialState: userIdState = {
    id: null,
}

export const UserIdSlice = createSlice({
    name: 'id',
    initialState,
    reducers: {
        setId: (state, action: PayloadAction<string|null>) => {
            state.id = action.payload
        },

    },
})


// Action creators are generated for each case reducer function
export const { setId } = UserIdSlice.actions

export default UserIdSlice.reducer