"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var react_native_safe_area_context_1 = require("react-native-safe-area-context");
var react_hook_form_1 = require("react-hook-form");
var CInput_1 = require("../components/CInput");
var AntDesign_1 = require("react-native-vector-icons/AntDesign");
var react_redux_1 = require("react-redux");
var SearchScreen = function (props) {
    var _a = react_hook_form_1.useForm({
        defaultValues: {
            search: ''
        }
    }), handleSubmit = _a.handleSubmit, control = _a.control;
    var activitiesStore = react_redux_1.useSelector(function (state) { return state.activities.activities; });
    var _b = react_1.useState(new Array()), activities = _b[0], setActivities = _b[1];
    react_1.useEffect(function () {
        setActivities(activitiesStore);
    });
    var renderItem = function (_a) {
        var item = _a.item;
        return (react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.itemContainer },
            react_1["default"].createElement(react_native_1.Image, { style: styles.tinyLogo, source: {
                    uri: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F456441479%2F299947132686%2F1%2Foriginal.20230227-233246?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=e048c8bfb09de06a91eca4d0233bc58c'
                } }),
            react_1["default"].createElement(react_native_1.View, { style: styles.textPart },
                react_1["default"].createElement(react_native_1.View, null,
                    react_1["default"].createElement(react_native_1.Text, { style: styles.itemTitle }, item.title)),
                react_1["default"].createElement(react_native_1.View, null,
                    react_1["default"].createElement(react_native_1.Text, { style: styles.itemDesciprion }, item.date)),
                react_1["default"].createElement(react_native_1.View, null,
                    react_1["default"].createElement(react_native_1.Text, { style: styles.address }, item.address)),
                react_1["default"].createElement(react_native_1.View, { style: { flexDirection: 'row',
                        flexWrap: 'wrap' } },
                    react_1["default"].createElement(AntDesign_1["default"], { style: { color: 'white', marginRight: 10 }, name: 'user', size: 20 }),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.address },
                        item.participants.length,
                        " participants")))));
    };
    return (react_1["default"].createElement(react_native_1.View, { style: { backgroundColor: 'grey' } },
        react_1["default"].createElement(react_native_safe_area_context_1.SafeAreaView, { style: styles.container },
            react_1["default"].createElement(react_native_1.View, { style: styles.input },
                react_1["default"].createElement(CInput_1["default"], { control: control, style: { marginBottom: 30 }, placeholder: "Search events", rules: function () { }, name: "search", secureTextEntry: false })),
            react_1["default"].createElement(react_native_1.View, null,
                react_1["default"].createElement(react_native_1.FlatList, { data: activities, renderItem: renderItem, style: styles.list })))));
};
exports["default"] = SearchScreen;
var styles = react_native_1.StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgb(39, 38, 39)',
        padding: 10
    },
    list: {
        height: '100%',
        width: '100%'
    },
    input: {},
    itemContainer: {
        height: 340,
        width: '100%',
        backgroundColor: '#484848',
        borderRadius: 10,
        marginBottom: 10
    },
    icon: {
        height: '100%',
        width: 50,
        justifyContent: 'center'
    },
    iconH: {
        height: 50,
        width: 50,
        backgroundColor: 'blue'
    },
    textPart: {
        width: '100%',
        height: '40%',
        padding: 15,
        justifyContent: 'space-evenly'
    },
    itemTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        marginBottom: 5
    },
    itemDesciprion: {
        color: '#d1410c',
        marginBottom: 7
    },
    spots: {
        width: 50,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    tinyLogo: {
        width: '100%',
        height: '60%'
    },
    address: {
        fontSize: 17,
        color: 'white',
        marginBottom: 11
    }
});
