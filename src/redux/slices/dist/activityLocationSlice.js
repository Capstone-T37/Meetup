"use strict";
exports.__esModule = true;
exports.setActivityLocations = exports.activityLocationsSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    locations: []
};
exports.activityLocationsSlice = toolkit_1.createSlice({
    name: 'activity-locations',
    initialState: initialState,
    reducers: {
        setActivityLocations: function (state, action) {
            state.locations = action.payload;
        }
    }
});
// Action creators are generated for each case reducer function
exports.setActivityLocations = exports.activityLocationsSlice.actions.setActivityLocations;
exports["default"] = exports.activityLocationsSlice.reducer;
