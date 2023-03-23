"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var bottom_sheet_1 = require("@gorhom/bottom-sheet");
var Ionicons_1 = require("react-native-vector-icons/Ionicons");
var AntDesign_1 = require("react-native-vector-icons/AntDesign");
var DetachedSheet = function (props) {
    var _a = react_1.useState(false), meet = _a[0], setMeet = _a[1];
    // variables
    var snapPoints = react_1["default"].useMemo(function () { return ["25%"]; }, []);
    return (react_1["default"].createElement(bottom_sheet_1["default"], { ref: props.bottomSheetRef, snapPoints: snapPoints, index: -1, 
        // add bottom inset to elevate the sheet
        bottomInset: 46, 
        // set `detached` to true
        detached: true, enablePanDownToClose: true, style: styles.sheetContainer }, meet ? react_1["default"].createElement(react_native_1.View, { style: { justifyContent: 'center', alignItems: 'center', height: '100%' } },
        react_1["default"].createElement(AntDesign_1["default"], { name: 'checkcircleo', size: 70, color: 'green' })) :
        react_1["default"].createElement(react_native_1.View, { style: styles.contentContainer },
            react_1["default"].createElement(react_native_1.Text, { style: styles.contentText }, "Request to meet?"),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.button, onPress: function () { return setMeet(true); } },
                react_1["default"].createElement(Ionicons_1["default"], { name: 'ios-send', size: 70, color: 'purple' })))));
};
exports["default"] = DetachedSheet;
var styles = react_native_1.StyleSheet.create({
    sheetContainer: {
        // add horizontal space
        marginHorizontal: 24,
        paddingBottom: 10
    },
    contentContainer: {
        flex: 1,
        alignItems: "center"
    },
    contentText: {
        fontSize: 30
    },
    button: {
        height: '100%',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 25
    }
});
