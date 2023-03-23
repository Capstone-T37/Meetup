"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var bottom_sheet_1 = require("@gorhom/bottom-sheet");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var react_native_safe_area_context_1 = require("react-native-safe-area-context");
var react_native_reanimated_1 = require("react-native-reanimated");
var AnimatedRectButton = react_native_reanimated_1["default"].createAnimatedComponent(react_native_gesture_handler_1.RectButton);
var CustomFooter = function (_a) {
    var animatedFooterPosition = _a.animatedFooterPosition;
    //#region hooks
    // we need the bottom safe insets to avoid bottom notches.
    var bottomSafeArea = react_native_safe_area_context_1.useSafeAreaInsets().bottom;
    // extract animated index and other functionalities
    var _b = bottom_sheet_1.useBottomSheet(), expand = _b.expand, collapse = _b.collapse, animatedIndex = _b.animatedIndex;
    //#endregion
    //#region styles
    // create the arrow animated style reacting to the
    // sheet index.
    var arrowStyle = react_1.useMemo(function () { return [null, styles.arrow]; }, [null]);
    // create the content animated style reacting to the
    // sheet index.
    var containerAnimatedStyle = react_native_reanimated_1.useAnimatedStyle(function () { return ({
        opacity: react_native_reanimated_1.interpolate(animatedIndex.value, [-0.85, 0], [0, 1], react_native_reanimated_1.Extrapolate.CLAMP)
    }); }, [animatedIndex]);
    var containerStyle = react_1.useMemo(function () { return [containerAnimatedStyle, styles.container]; }, [containerAnimatedStyle]);
    //#endregion
    //#region callbacks
    var handleArrowPress = react_1.useCallback(function () {
        // if sheet is collapsed, then we extend it,
        // or the opposite.
        if (animatedIndex.value === 0) {
            expand();
        }
        else {
            collapse();
        }
    }, [expand, collapse, animatedIndex]);
    //#endregion
    return (react_1["default"].createElement(bottom_sheet_1.BottomSheetFooter
    // we pass the bottom safe inset
    , { 
        // we pass the bottom safe inset
        bottomInset: bottomSafeArea, 
        // we pass the provided `animatedFooterPosition`
        animatedFooterPosition: animatedFooterPosition },
        react_1["default"].createElement(AnimatedRectButton, { style: containerStyle, onPress: handleArrowPress },
            react_1["default"].createElement(react_native_reanimated_1["default"].Text, { style: arrowStyle }, "participate"))));
};
// footer style
var styles = react_native_1.StyleSheet.create({
    container: {
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 24,
        marginBottom: 12,
        width: 150,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#80f',
        shadowOffset: {
            width: 0,
            height: 12
        },
        shadowOpacity: 0.25,
        shadowRadius: 8.0,
        elevation: 8
    },
    arrow: {
        fontSize: 20,
        height: 30,
        textAlignVertical: 'center',
        fontWeight: '900',
        color: '#fff'
    }
});
exports["default"] = CustomFooter;
