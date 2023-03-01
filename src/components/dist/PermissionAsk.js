"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var FontAwesome5_1 = require("react-native-vector-icons/FontAwesome5");
var SimpleLineIcons_1 = require("react-native-vector-icons/SimpleLineIcons");
var Feather_1 = require("react-native-vector-icons/Feather");
var react_native_paper_1 = require("react-native-paper");
var PermissionService_1 = require("../services/PermissionService");
var PermissionAsk = function (props) {
    return (react_1["default"].createElement(react_native_1.SafeAreaView, { style: styles.container },
        react_1["default"].createElement(react_native_1.View, { style: styles.titleContainer },
            react_1["default"].createElement(react_native_1.Text, { style: styles.title }, "Set Location to 'When In Use'")),
        react_1["default"].createElement(react_native_1.View, { style: styles.descriptionContainer },
            react_1["default"].createElement(react_native_1.Text, { style: styles.description }, "MeetUp only works correctly if it can access your location.")),
        react_1["default"].createElement(react_native_1.View, { style: styles.instructionsContainer },
            react_1["default"].createElement(react_native_1.View, { style: styles.instruction },
                react_1["default"].createElement(react_native_1.View, { style: styles.instructionText },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.description }, "1. In Settings, select"),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.important }, " Location")),
                react_1["default"].createElement(react_native_1.View, { style: styles.setting },
                    react_1["default"].createElement(react_native_1.View, { style: { flexDirection: 'row' } },
                        react_1["default"].createElement(react_native_1.View, { style: { backgroundColor: "#007aff", alignSelf: 'baseline', padding: 5, borderRadius: 4 } },
                            react_1["default"].createElement(FontAwesome5_1["default"], { name: "location-arrow", size: 10, color: "white" })),
                        react_1["default"].createElement(react_native_1.Text, { style: { color: 'white' } }, " Location")),
                    react_1["default"].createElement(SimpleLineIcons_1["default"], { name: 'arrow-right', color: "grey", size: 10 }))),
            react_1["default"].createElement(react_native_1.View, { style: styles.instruction },
                react_1["default"].createElement(react_native_1.View, { style: styles.instructionText },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.description }, "2. Then tap on"),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.important }, " When in use")),
                react_1["default"].createElement(react_native_1.View, { style: styles.setting },
                    react_1["default"].createElement(react_native_1.Text, { style: { color: 'white' } }, "When in use"),
                    react_1["default"].createElement(Feather_1["default"], { name: 'check', color: 'green', size: 15 })))),
        react_1["default"].createElement(react_native_1.View, { style: styles.button },
            react_1["default"].createElement(react_native_paper_1.Button, { mode: 'contained', buttonColor: 'purple', onPress: PermissionService_1.goToSettings }, "Go to Settings"))));
};
exports["default"] = PermissionAsk;
var styles = react_native_1.StyleSheet.create({
    container: {
        backgroundColor: 'rgb(39, 38, 39)',
        height: '100%',
        width: '100%'
    },
    titleContainer: {
        alignItems: 'center',
        margin: 30
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    descriptionContainer: {},
    description: {
        textAlign: 'center',
        fontSize: 15,
        color: 'white'
    },
    instructionsContainer: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '30%'
    },
    instructionText: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10
    },
    instruction: {
        justifyContent: 'space-around',
        width: '100%',
        padding: "10%"
    },
    setting: {
        padding: 10,
        borderColor: 'purple',
        borderWidth: 2,
        flexDirection: 'row',
        borderRadius: 3,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    important: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'white'
    },
    button: { position: 'absolute', bottom: 10, justifyContent: 'center', width: '100%', paddingLeft: 20, paddingRight: 20 }
});
