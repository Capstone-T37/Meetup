"use strict";
exports.__esModule = true;
var bottom_tabs_1 = require("@react-navigation/bottom-tabs");
var react_1 = require("react");
var Home_1 = require("../screens/Home");
var AntDesign_1 = require("react-native-vector-icons/AntDesign");
var MaterialCommunityIcons_1 = require("react-native-vector-icons/MaterialCommunityIcons");
var SearchScreen_1 = require("../screens/SearchScreen");
var DrawerNav_1 = require("./DrawerNav");
var BottomNavBar = function (props) {
    var Tab = bottom_tabs_1.createBottomTabNavigator();
    return (react_1["default"].createElement(Tab.Navigator, { screenOptions: { headerShown: false }, initialRouteName: "Home" },
        react_1["default"].createElement(Tab.Screen, { name: "Search", component: SearchScreen_1["default"], options: {
                tabBarLabelStyle: { color: 'white' },
                tabBarStyle: { backgroundColor: 'rgb(39, 38, 39)' },
                tabBarIcon: function () { return (react_1["default"].createElement(MaterialCommunityIcons_1["default"], { style: { color: 'white' }, name: 'party-popper', size: 23 })); }
            } }),
        react_1["default"].createElement(Tab.Screen, { name: "Home", component: Home_1["default"], options: {
                tabBarLabelStyle: { color: 'white' },
                tabBarStyle: { backgroundColor: 'rgb(39, 38, 39)' },
                tabBarIcon: function () { return (react_1["default"].createElement(AntDesign_1["default"], { style: { color: 'white' }, name: 'home', size: 23 })); }
            } }),
        react_1["default"].createElement(Tab.Screen, { name: "Profile", component: DrawerNav_1["default"], options: {
                tabBarLabelStyle: { color: 'white' },
                tabBarStyle: { backgroundColor: 'rgb(39, 38, 39)' },
                tabBarIcon: function () { return (react_1["default"].createElement(MaterialCommunityIcons_1["default"], { style: { color: 'white' }, name: 'account-circle-outline', size: 23 })); }
            } })));
};
exports["default"] = BottomNavBar;
