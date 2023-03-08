"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var react_native_safe_area_context_1 = require("react-native-safe-area-context");
var react_hook_form_1 = require("react-hook-form");
var CInput_1 = require("../components/CInput");
var AntDesign_1 = require("react-native-vector-icons/AntDesign");
var SearchScreen = function (props) {
    var _a = react_hook_form_1.useForm({
        defaultValues: {
            search: ''
        }
    }), handleSubmit = _a.handleSubmit, control = _a.control;
    var data = [
        {
            title: "Lil Tjay + Killy Live In Ottawa March 8th",
            category: 'sports',
            date: "Fri, Mar 10, 8:00 PM",
            address: "EY Centre • Ottawa, ON",
            size: 3,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            participants: ["John", "Jane", "Mike"],
            created_by: "Alice"
        },
        {
            title: "Event 2",
            category: 'study',
            date: "2023-04-15",
            address: "456 Second Ave",
            size: 4,
            description: "Nulla eget nulla euismod, faucibus odio vitae, auctor arcu.",
            participants: ["Sarah", "Tom"],
            created_by: "Bob"
        },
        {
            title: "Event 3",
            category: 'leasure',
            date: "2023-05-20",
            address: "789 Third St",
            size: 3,
            description: "Etiam commodo consectetur neque vitae commodo.",
            participants: ["David"],
            created_by: "Charlie"
        }
    ];
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
                react_1["default"].createElement(react_native_1.FlatList, { data: data, renderItem: renderItem, 
                    //keyExtractor={(item) => item.id}
                    style: styles.list })))));
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
