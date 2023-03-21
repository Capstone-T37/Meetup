"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var bottom_sheet_1 = require("@gorhom/bottom-sheet");
var BottomSheetHandle_1 = require("./BottomSheetHandle");
var ActivityBottomSheet = function (props) {
    var _a = react_1.useState(false), meet = _a[0], setMeet = _a[1];
    // variables
    var snapPoints = react_1.useMemo(function () { return ['25%', '80%']; }, []);
    return (react_1["default"].createElement(bottom_sheet_1["default"], { ref: props.bottomSheetRef, backgroundStyle: {
            backgroundColor: 'rgb(39, 38, 39)'
        }, snapPoints: snapPoints, index: -1, 
        // add bottom inset to elevate the sheet
        bottomInset: 0, 
        // set `detached` to true
        detached: false, handleComponent: BottomSheetHandle_1["default"], enablePanDownToClose: true, style: styles.sheetContainer },
        react_1["default"].createElement(react_native_1.View, { style: styles.container },
            react_1["default"].createElement(react_native_1.View, { style: {
                    borderBottomColor: 'white',
                    borderBottomWidth: 1,
                    marginBottom: 40,
                    padding: 20
                } },
                react_1["default"].createElement(react_native_1.Text, { style: styles.textstyle }, "Yoga ")),
            react_1["default"].createElement(react_native_1.Text, { style: styles.desc }, "Yoga is an ancient practice that originated in India over 5,000 years ago. The word \"yoga\" is derived from the Sanskrit word \"yuj,\" which means to yoke or unite. It is a holistic approach to wellness that integrates the mind, body, and spirit. The practice of yoga involves a combination of physical postures, breathing exercises, and meditation techniques. "))));
};
exports["default"] = ActivityBottomSheet;
var styles = react_native_1.StyleSheet.create({
    sheetContainer: {
        // add horizontal space
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24
    }, textstyle: {
        color: 'white',
        fontSize: 45,
        fontWeight: 'bold'
    }, desc: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15
    }, container: {
        height: '100%',
        width: '100%',
        padding: 30,
        paddingTop: 0
    }
});
