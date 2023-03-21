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
var MapComponent_1 = require("../components/MapComponent");
var PermissionService_1 = require("../services/PermissionService");
var PermissionAsk_1 = require("../components/PermissionAsk");
var react_redux_1 = require("react-redux");
var permissionSlice_1 = require("../redux/slices/permissionSlice");
var async_storage_1 = require("@react-native-async-storage/async-storage");
var userIdSlice_1 = require("../redux/slices/userIdSlice");
var react_native_geocoding_1 = require("react-native-geocoding");
var ApiService_1 = require("../services/ApiService");
var routes_1 = require("../routes/routes");
var activitySlice_1 = require("../redux/slices/activitySlice");
var activityLocationSlice_1 = require("../redux/slices/activityLocationSlice");
react_native_geocoding_1["default"].init("AIzaSyDYC0H9ezO956jUEz7tu6XhEpTOwknL0iA");
var Home = function (props) {
    var dispatch = react_redux_1.useDispatch();
    var permitted = react_redux_1.useSelector(function (state) { return state.permission.whenInUse; });
    react_1.useEffect(function () {
        (function () { return PermissionService_1.checkForPermission().then(function (res) { return dispatch(permissionSlice_1.setPermission(res)); }); })();
        try {
            (function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, async_storage_1["default"].multiGet(["token", "id"])];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            }); }); })().then(function (res) { return dispatch(userIdSlice_1.setId(res[1][1])); });
        }
        catch (e) {
            console.log(" could not be fetched!");
        }
        LoadActivityCredentials();
    }, []);
    var LoadActivityCredentials = function () { return __awaiter(void 0, void 0, void 0, function () {
        var domain;
        return __generator(this, function (_a) {
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
                                    return [2 /*return*/, location];
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
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container }, permitted ? react_1["default"].createElement(MapComponent_1["default"], null) : react_1["default"].createElement(PermissionAsk_1["default"], null)));
};
exports["default"] = Home;
var styles = react_native_1.StyleSheet.create({
    container: {
        height: '100%',
        width: '100%'
    }
});
