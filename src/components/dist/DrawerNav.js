"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var drawer_1 = require("@react-navigation/drawer");
var ProfileScreen_1 = require("../screens/ProfileScreen");
var react_native_safe_area_context_1 = require("react-native-safe-area-context");
var react_native_paper_1 = require("react-native-paper");
var async_storage_1 = require("@react-native-async-storage/async-storage");
var react_native_paper_2 = require("react-native-paper");
var LocationService_1 = require("../services/LocationService");
var react_redux_1 = require("react-redux");
var SocketService_1 = require("../services/SocketService");
var ApiService_1 = require("../services/ApiService");
var routes_1 = require("../routes/routes");
var locationsSlice_1 = require("../redux/slices/locationsSlice");
var Location = require("expo-location");
var Drawer = drawer_1.createDrawerNavigator();
var DrawerContent = function (props) {
    var dispatch = react_redux_1.useDispatch();
    var startSharing = function () {
        getLocations().then(function (res) { return dispatch(locationsSlice_1.setLocations(res.data)); })["catch"](function (e) { return console.log(e, "getting locations error"); });
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Location.getCurrentPositionAsync({}).then(function (res) {
                        firstLocation(res).then(function (val) { return console.log("location is updated first"); })["catch"](function (e) { return console.log(e, "first update error"); });
                    })];
            });
        }); })();
        LocationService_1["default"].startWatching();
        LocationService_1["default"].subscribe(handleLocationUpdate);
        SocketService_1["default"].connect('http://localhost:8000');
        SocketService_1["default"].on('location:read', handleNewMessage);
    };
    var stopSharing = function () {
        console.log("here");
        dispatch(locationsSlice_1.setLocations([]));
        LocationService_1["default"].unsubscribe(handleLocationUpdate);
        LocationService_1["default"].stopWatching();
        removeLocation().then(function () {
            sendMessage("remove");
            SocketService_1["default"].off('location:read');
            SocketService_1["default"].disconnect();
        })["catch"](function (e) { return console.log(e, "remove location"); });
    };
    var removeLocation = function () { return __awaiter(void 0, void 0, void 0, function () {
        var id, url;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, async_storage_1["default"].getItem("id")];
                case 1:
                    id = _a.sent();
                    url = "" + routes_1.routes.locationHost + routes_1.routes.location + "/" + id;
                    return [2 /*return*/, ApiService_1.deleteRequest(url)];
            }
        });
    }); };
    var getLocations = function () { return __awaiter(void 0, void 0, void 0, function () {
        var url;
        return __generator(this, function (_a) {
            url = "" + routes_1.routes.locationHost + routes_1.routes.location;
            return [2 /*return*/, ApiService_1.getRequest(url)];
        });
    }); };
    var handleLocationUpdate = function (newLocation) {
        sendMessage("newLocation");
        updateLocation(newLocation).then(function () { return console.log("location updated in database"); })["catch"](function (e) { return console.log("error updated location database", e); });
        //updateLocation(newLocation).then(() => console.log("location updated")).catch((e) => console.log(e,"update location error"))
    };
    var handleNewMessage = function (message) {
        console.log('Received message:', message);
        getLocations().then(function (res) {
            console.log(res.data, "locations fetched");
            dispatch(locationsSlice_1.setLocations(res.data));
        });
    };
    var sendMessage = function (update) {
        SocketService_1["default"].emit('location:read', update);
    };
    var firstLocation = function (newLocation) { return __awaiter(void 0, void 0, void 0, function () {
        var id, url;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, async_storage_1["default"].getItem("id")];
                case 1:
                    id = _a.sent();
                    url = "" + routes_1.routes.locationHost + routes_1.routes.location;
                    return [2 /*return*/, ApiService_1.postRequest(url, {
                            user_id: id,
                            location: {
                                coordinates: [newLocation.coords.longitude, newLocation.coords.latitude]
                            }
                        })];
            }
        });
    }); };
    var updateLocation = function (newLocation) { return __awaiter(void 0, void 0, void 0, function () {
        var id, url;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, async_storage_1["default"].getItem("id")];
                case 1:
                    id = _a.sent();
                    url = "" + routes_1.routes.locationHost + routes_1.routes.location + "/" + id;
                    return [2 /*return*/, ApiService_1.patchRequest(url, {
                            user_id: id,
                            location: {
                                coordinates: [newLocation.coords.longitude, newLocation.coords.latitude]
                            }
                        })];
            }
        });
    }); };
    var _a = react_1["default"].useState(false), isSwitchOn = _a[0], setIsSwitchOn = _a[1];
    var onToggleSwitch = function () {
        if (isSwitchOn) {
            stopSharing();
            setIsSwitchOn(false);
        }
        else {
            startSharing();
            setIsSwitchOn(true);
        }
    };
    var logout = function () {
        async_storage_1["default"].multiRemove(["token", "id"]).then(function () {
            props.navigation.navigate('Login');
        })["catch"](function (e) {
            console.log(e, " failed to logout");
        });
    };
    return (react_1["default"].createElement(react_native_safe_area_context_1.SafeAreaView, { style: styles.container },
        react_1["default"].createElement(react_native_1.View, { style: styles.shareLocation },
            react_1["default"].createElement(react_native_1.Text, { style: styles.shareLocationText }, "Share Location"),
            react_1["default"].createElement(react_native_paper_2.Switch, { value: isSwitchOn, onValueChange: onToggleSwitch, thumbColor: "beige", trackColor: { "true": 'green' } })),
        react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: logout },
            react_1["default"].createElement(react_native_paper_1.Button, { mode: "contained", textColor: "black" },
                react_1["default"].createElement(react_native_1.Text, null, " Logout")))));
};
var DrawerNav = function (props) {
    return (react_1["default"].createElement(Drawer.Navigator, { initialRouteName: "ProfilePage", screenOptions: { headerShown: false }, drawerContent: DrawerContent },
        react_1["default"].createElement(Drawer.Screen, { name: "ProfilePage", component: ProfileScreen_1["default"] })));
};
exports["default"] = DrawerNav;
var styles = react_native_1.StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgb(39, 38, 39)',
        justifyContent: 'space-between',
        padding: 20
    },
    titleContainer: {
        width: '100%',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: 30
    },
    shareLocation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    shareLocationText: {
        color: 'white',
        fontSize: 22
    }
});
