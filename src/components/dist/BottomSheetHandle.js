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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.transformOrigin = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_reanimated_1 = require("react-native-reanimated");
var react_native_redash_1 = require("react-native-redash");
// @ts-ignore
exports.transformOrigin = function (_a) {
    "worklet";
    var x = _a.x, y = _a.y;
    var transformations = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        transformations[_i - 1] = arguments[_i];
    }
    return __spreadArrays([
        { translateX: x },
        { translateY: y }
    ], transformations, [
        { translateX: x * -1 },
        { translateY: y * -1 },
    ]);
};
var Handle = function (_a) {
    var style = _a.style, animatedIndex = _a.animatedIndex;
    //#region animations
    var indicatorTransformOriginY = react_native_reanimated_1.useDerivedValue(function () {
        return react_native_reanimated_1.interpolate(animatedIndex.value, [0, 1, 2], [-1, 0, 1], react_native_reanimated_1.Extrapolate.CLAMP);
    });
    //#endregion
    //#region styles
    var containerStyle = react_1.useMemo(function () { return [styles.header, style]; }, [style]);
    var containerAnimatedStyle = react_native_reanimated_1.useAnimatedStyle(function () {
        var borderTopRadius = react_native_reanimated_1.interpolate(animatedIndex.value, [1, 2], [20, 0], react_native_reanimated_1.Extrapolate.CLAMP);
        return {
            borderTopLeftRadius: borderTopRadius,
            borderTopRightRadius: borderTopRadius
        };
    });
    var leftIndicatorStyle = react_1.useMemo(function () { return (__assign(__assign({}, styles.indicator), styles.leftIndicator)); }, []);
    var leftIndicatorAnimatedStyle = react_native_reanimated_1.useAnimatedStyle(function () {
        var leftIndicatorRotate = react_native_reanimated_1.interpolate(animatedIndex.value, [0, 1, 2], [react_native_redash_1.toRad(-30), 0, react_native_redash_1.toRad(30)], react_native_reanimated_1.Extrapolate.CLAMP);
        return {
            transform: exports.transformOrigin({ x: 0, y: indicatorTransformOriginY.value }, {
                rotate: leftIndicatorRotate + "rad"
            }, {
                translateX: -5
            })
        };
    });
    var rightIndicatorStyle = react_1.useMemo(function () { return (__assign(__assign({}, styles.indicator), styles.rightIndicator)); }, []);
    var rightIndicatorAnimatedStyle = react_native_reanimated_1.useAnimatedStyle(function () {
        var rightIndicatorRotate = react_native_reanimated_1.interpolate(animatedIndex.value, [0, 1, 2], [react_native_redash_1.toRad(30), 0, react_native_redash_1.toRad(-30)], react_native_reanimated_1.Extrapolate.CLAMP);
        return {
            transform: exports.transformOrigin({ x: 0, y: indicatorTransformOriginY.value }, {
                rotate: rightIndicatorRotate + "rad"
            }, {
                translateX: 5
            })
        };
    });
    //#endregion
    // render
    return (react_1["default"].createElement(react_native_reanimated_1["default"].View, { style: [containerStyle, containerAnimatedStyle], renderToHardwareTextureAndroid: true },
        react_1["default"].createElement(react_native_reanimated_1["default"].View, { style: [leftIndicatorStyle, leftIndicatorAnimatedStyle] }),
        react_1["default"].createElement(react_native_reanimated_1["default"].View, { style: [rightIndicatorStyle, rightIndicatorAnimatedStyle] })));
};
exports["default"] = Handle;
var styles = react_native_1.StyleSheet.create({
    header: {
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 14,
        backgroundColor: "rgb(39, 38, 39)"
    },
    indicator: {
        position: "absolute",
        width: 10,
        height: 4,
        backgroundColor: "#999"
    },
    leftIndicator: {
        borderTopStartRadius: 2,
        borderBottomStartRadius: 2
    },
    rightIndicator: {
        borderTopEndRadius: 2,
        borderBottomEndRadius: 2
    }
});
