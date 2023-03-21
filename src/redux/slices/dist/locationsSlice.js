"use strict";
var _a;
exports.__esModule = true;
exports.setLocations = exports.addLocation = exports.LocationsSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    locations: []
};
exports.LocationsSlice = toolkit_1.createSlice({
    name: 'locations',
    initialState: initialState,
    reducers: {
        addLocation: function (state, action) {
            state.locations = state.locations.filter(function (item) { return item.id !== action.payload.id; });
            state.locations.push(action.payload);
        },
        setLocations: function (state, action) {
            state.locations = action.payload;
        }
    }
});
// Action creators are generated for each case reducer function
exports.addLocation = (_a = exports.LocationsSlice.actions, _a.addLocation), exports.setLocations = _a.setLocations;
exports["default"] = exports.LocationsSlice.reducer;
