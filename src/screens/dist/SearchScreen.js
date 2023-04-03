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
var react_native_safe_area_context_1 = require("react-native-safe-area-context");
var react_hook_form_1 = require("react-hook-form");
var AntDesign_1 = require("react-native-vector-icons/AntDesign");
var react_redux_1 = require("react-redux");
var routes_1 = require("../routes/routes");
var ApiService_1 = require("../services/ApiService");
var activitySlice_1 = require("../redux/slices/activitySlice");
var activityLocationSlice_1 = require("../redux/slices/activityLocationSlice");
var react_native_geocoding_1 = require("react-native-geocoding");
var react_native_paper_1 = require("react-native-paper");
react_native_geocoding_1["default"].init("AIzaSyDYC0H9ezO956jUEz7tu6XhEpTOwknL0iA");
var SearchScreen = function (props) {
    var _a = react_hook_form_1.useForm({
        defaultValues: {
            search: ''
        }
    }), handleSubmit = _a.handleSubmit, control = _a.control;
    var dispatch = react_redux_1.useDispatch();
    var activitiesStore = react_redux_1.useSelector(function (state) { return state.activities.activities; });
    var _b = react_1.useState(activitiesStore), activities = _b[0], setActivitiess = _b[1];
    var _c = react_1.useState(false), isRefreshing = _c[0], setRefreshing = _c[1];
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
    var applySearchFilter = function (filter) {
        if (filter.replace(/\s/g, "") === "") {
            setActivitiess(activitiesStore);
            return;
        }
        setActivitiess(activitiesStore.filter(function (activity) { return activity.title.toLowerCase().includes(filter.toLowerCase()); }));
    };
    var LoadActivityCredentials = function () { return __awaiter(void 0, void 0, void 0, function () {
        var domain;
        return __generator(this, function (_a) {
            setRefreshing(true);
            domain = routes_1.routes.activityHost + routes_1.routes.activityEndPoint;
            ApiService_1.getRequest(domain).then(function (resp) { return __awaiter(void 0, void 0, void 0, function () {
                var activities;
                return __generator(this, function (_a) {
                    activities = resp === null || resp === void 0 ? void 0 : resp.data;
                    dispatch(activitySlice_1.setActivities(activities));
                    Promise.all(activities.map(function (activity) { return __awaiter(void 0, void 0, void 0, function () {
                        var json, location, error_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, react_native_geocoding_1["default"].from(activity.address)];
                                case 1:
                                    json = _a.sent();
                                    location = json.results[0].geometry.location;
                                    setRefreshing(false);
                                    return [2 /*return*/, { loc: location, id: activity._id }];
                                case 2:
                                    error_1 = _a.sent();
                                    console.warn(error_1);
                                    return [2 /*return*/, null];
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); })).then(function (locations) {
                        var filteredLocations = locations.filter(function (location) { return location !== null; });
                        dispatch(activityLocationSlice_1.setActivityLocations(filteredLocations));
                    });
                    return [2 /*return*/];
                });
            }); });
            return [2 /*return*/];
        });
    }); };
    return (react_1["default"].createElement(react_native_1.View, { style: { backgroundColor: 'grey' } },
        react_1["default"].createElement(react_native_safe_area_context_1.SafeAreaView, { style: styles.container },
            react_1["default"].createElement(react_native_1.View, { style: styles.input },
                react_1["default"].createElement(react_native_paper_1.TextInput, { style: { marginBottom: 20, backgroundColor: 'none' }, underlineColor: 'white', textColor: 'white', autoCorrect: false, placeholder: 'search events', onChangeText: function (filter) { return applySearchFilter(filter); } })),
            react_1["default"].createElement(react_native_1.View, null,
                react_1["default"].createElement(react_native_1.FlatList, { onRefresh: LoadActivityCredentials, refreshing: isRefreshing, data: activities, renderItem: renderItem, style: styles.list })))));
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
