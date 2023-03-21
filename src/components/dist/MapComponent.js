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
var react_native_map_clustering_1 = require("react-native-map-clustering");
var react_native_maps_1 = require("react-native-maps");
var react_native_2 = require("react-native");
var Location = require("expo-location");
var react_redux_1 = require("react-redux");
var native_1 = require("@react-navigation/native");
var CustomMarker_1 = require("./CustomMarker");
var DetachedSheet_1 = require("./DetachedSheet");
var Feather_1 = require("react-native-vector-icons/Feather");
var ActivityBottomSheet_1 = require("./ActivityBottomSheet");
var MapComponent = function (props) {
    var locations = react_redux_1.useSelector(function (state) { return state.locations.locations; });
    var activityLocations = react_redux_1.useSelector(function (state) { return state.activityLocations.locations; });
    var id = react_redux_1.useSelector(function (state) { return state.id.id; });
    var initialPosition = react_1.useRef({
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0
    });
    var _a = react_1.useState(true), loading = _a[0], setLoading = _a[1];
    var bottomSheetRef = react_1["default"].useRef(null);
    var activityBottomSheet = react_1["default"].useRef(null);
    native_1.useFocusEffect(react_1.useCallback(function () {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Location.getCurrentPositionAsync({}).then(function (res) {
                        initialPosition.current = {
                            latitude: 45.424721, longitude: -75.6972, latitudeDelta: 0.122,
                            longitudeDelta: 0.121
                        };
                        setLoading(false);
                    })];
            });
        }); })();
    }, []));
    if (loading) {
        return (react_1["default"].createElement(react_native_2.ActivityIndicator, { size: "large", color: "#0000ff" }));
    }
    return (react_1["default"].createElement(react_native_1.View, { style: { height: '100%' } },
        react_1["default"].createElement(react_native_map_clustering_1["default"], { userInterfaceStyle: 'dark', provider: react_native_1.Platform.OS == 'android' ? 'google' : undefined, style: { height: "100%", width: "100%" }, initialRegion: initialPosition.current, showsUserLocation: true },
            locations.map(function (val, index) {
                var _a, _b;
                return ((val === null || val === void 0 ? void 0 : val.user_id) !== id ? react_1["default"].createElement(CustomMarker_1["default"], { coordinate: { latitude: (_a = val === null || val === void 0 ? void 0 : val.location) === null || _a === void 0 ? void 0 : _a.coordinates[1], longitude: (_b = val === null || val === void 0 ? void 0 : val.location) === null || _b === void 0 ? void 0 : _b.coordinates[0] }, key: index, bottomSheetRef: bottomSheetRef }) : undefined);
            }),
            activityLocations.map(function (activity, index) { return (react_1["default"].createElement(react_native_maps_1.Marker, { coordinate: { latitude: activity.lat, longitude: activity.lng }, key: index, pinColor: "green", onPress: function () {
                    var _a;
                    (_a = activityBottomSheet.current) === null || _a === void 0 ? void 0 : _a.expand();
                } },
                react_1["default"].createElement(Feather_1["default"], { name: 'twitter', size: 20, style: {
                        backgroundColor: 'pink'
                    } }))); })),
        react_1["default"].createElement(DetachedSheet_1["default"], { bottomSheetRef: bottomSheetRef }),
        react_1["default"].createElement(ActivityBottomSheet_1["default"], { bottomSheetRef: activityBottomSheet })));
};
exports["default"] = MapComponent;
var styles = react_native_1.StyleSheet.create({});
