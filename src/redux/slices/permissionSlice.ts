import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface PermissionState {
  whenInUse: Boolean,
}

const initialState: PermissionState = {
  whenInUse: false,
}

export const PermissionSlice = createSlice({
  name: 'permission',
  initialState,
  reducers: {
    setPermission: (state,action: PayloadAction<Boolean>) => {
      state.whenInUse = action.payload
    },
  },
})


// Action creators are generated for each case reducer function
export const { setPermission } = PermissionSlice.actions

export default PermissionSlice.reducer