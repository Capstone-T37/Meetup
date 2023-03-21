"use strict";
exports.__esModule = true;
exports.setActivities = exports.activitySlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    activities: []
};
exports.activitySlice = toolkit_1.createSlice({
    name: 'activity-locations',
    initialState: initialState,
    reducers: {
        setActivities: function (state, action) {
            state.activities = action.payload;
        }
    }
});
// Action creators are generated for each case reducer function
exports.setActivities = exports.activitySlice.actions.setActivities;
exports["default"] = exports.activitySlice.reducer;
