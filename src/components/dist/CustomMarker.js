"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var react_native_maps_1 = require("react-native-maps");
var MaterialIcons_1 = require("react-native-vector-icons/MaterialIcons");
var CustomMarker = function (props) {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_native_maps_1.Marker, __assign({}, props, { onPress: function () {
                var _a;
                (_a = props.bottomSheetRef.current) === null || _a === void 0 ? void 0 : _a.expand();
            } }),
            react_1["default"].createElement(MaterialIcons_1["default"], { name: 'location-history', size: 90 }))));
};
exports["default"] = CustomMarker;
var styles = react_native_1.StyleSheet.create({});
