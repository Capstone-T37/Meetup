"use strict";
exports.__esModule = true;
exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var locationsSlice_1 = require("./slices/locationsSlice");
var permissionSlice_1 = require("./slices/permissionSlice");
var userIdSlice_1 = require("./slices/userIdSlice");
var activitySlice_1 = require("./slices/activitySlice");
var activityLocationSlice_1 = require("./slices/activityLocationSlice");
exports.store = toolkit_1.configureStore({
    reducer: {
        permission: permissionSlice_1["default"],
        locations: locationsSlice_1["default"],
        activityLocations: activityLocationSlice_1["default"],
        activities: activitySlice_1["default"],
        id: userIdSlice_1["default"]
    }
});
