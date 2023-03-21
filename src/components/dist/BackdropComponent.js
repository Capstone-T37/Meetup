"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_reanimated_1 = require("react-native-reanimated");
var CustomBackground = function (_a) {
    var style = _a.style, animatedIndex = _a.animatedIndex;
    //#region styles
    var containerAnimatedStyle = react_native_reanimated_1.useAnimatedStyle(function () { return ({
        // @ts-ignore
        backgroundColor: react_native_reanimated_1.interpolateColor(animatedIndex.value, [0, 1], ["#ffffff", "#a8b5eb"])
    }); });
    var containerStyle = react_1.useMemo(function () { return [style, containerAnimatedStyle]; }, [style, containerAnimatedStyle]);
    //#endregion
    // render
    return react_1["default"].createElement(react_native_reanimated_1["default"].View, { pointerEvents: "none", style: containerStyle });
};
exports["default"] = CustomBackground;
