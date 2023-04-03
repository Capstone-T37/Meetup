"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var react_1 = require("react");
var react_native_1 = require("react-native");
var bottom_sheet_1 = require("@gorhom/bottom-sheet");
var react_native_date_picker_1 = require("react-native-date-picker");
var react_native_paper_1 = require("react-native-paper");
var react_hook_form_1 = require("react-hook-form");
var CInput_1 = require("../components/CInput");
var async_storage_1 = require("@react-native-async-storage/async-storage");
var routes_1 = require("../routes/routes");
var ApiService_1 = require("../services/ApiService");
var react_redux_1 = require("react-redux");
var activitySlice_1 = require("../redux/slices/activitySlice");
var activityLocationSlice_1 = require("../redux/slices/activityLocationSlice");
var react_native_geocoding_1 = require("react-native-geocoding");
react_native_geocoding_1["default"].init("AIzaSyDYC0H9ezO956jUEz7tu6XhEpTOwknL0iA");
var CreateActivityModal = function (props) {
    var dispatch = react_redux_1.useDispatch();
    var _a = react_1["default"].useState(new Date()), date = _a[0], setDate = _a[1];
    var _b = react_1["default"].useState(false), open = _b[0], setOpen = _b[1];
    // variables
    var snapPoints = react_1.useMemo(function () { return ['90%']; }, []);
    var rules = {
        required: 'Field is required'
    };
    // callbacks
    var handleSheetChanges = react_1.useCallback(function (index) {
        console.log('handleSheetChanges', index);
    }, []);
    var _c = react_hook_form_1.useForm({
        defaultValues: {
            title: '',
            address: '',
            size: "",
            description: ""
        }
    }), handleSubmit = _c.handleSubmit, control = _c.control;
    var submitActivity = function (newActivity) { return __awaiter(void 0, void 0, void 0, function () {
        var id, url;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, async_storage_1["default"].getItem("id")];
                case 1:
                    id = _a.sent();
                    url = "" + routes_1.routes.activityHost + routes_1.routes.activityEndPoint;
                    return [2 /*return*/, ApiService_1.postRequest(url, {
                            created_by: id,
                            title: newActivity.title,
                            date: newActivity.date,
                            address: newActivity.address,
                            participants: [],
                            size: newActivity.size,
                            description: newActivity.description
                        }).then(function () {
                            LoadActivityCredentials();
                        })];
            }
        });
    }); };
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
    // renders
    return (react_1["default"].createElement(bottom_sheet_1.BottomSheetModalProvider, null,
        react_1["default"].createElement(bottom_sheet_1.BottomSheetModal, { ref: props.bottomSheetModalRef, index: 0, snapPoints: snapPoints, onChange: handleSheetChanges, backgroundStyle: { backgroundColor: 'rgb(39, 38, 39)' } },
            react_1["default"].createElement(react_native_1.View, { style: styles.contentContainer },
                react_1["default"].createElement(react_native_paper_1.Text, { style: styles.textstyle }, " Activity "),
                react_1["default"].createElement(CInput_1["default"], { control: control, style: { marginBottom: 20 }, placeholder: "Please enter a title...", label: "title", name: "title", secureTextEntry: false, rules: rules }),
                react_1["default"].createElement(CInput_1["default"], { control: control, style: { marginBottom: 20 }, placeholder: "Please enter an address...", label: "address", name: "address", secureTextEntry: false, rules: rules }),
                react_1["default"].createElement(CInput_1["default"], { control: control, style: { marginBottom: 20 }, placeholder: "Please enter a description...", label: "description", name: "description", secureTextEntry: false, rules: rules }),
                react_1["default"].createElement(CInput_1["default"], { control: control, style: { marginBottom: 20 }, placeholder: "Please enter number of participants...", label: "size", name: "size", keyboardType: "numeric", secureTextEntry: false, rules: rules }),
                react_1["default"].createElement(react_native_paper_1.Button, { onPress: function () { return setOpen(true); } }, date.toLocaleString()),
                react_1["default"].createElement(react_native_date_picker_1["default"], { modal: true, open: open, date: date, onConfirm: function (date) {
                        setOpen(false);
                        setDate(date);
                    }, onCancel: function () {
                        setOpen(false);
                    } }),
                react_1["default"].createElement(react_native_1.View, { style: styles.buttonContainer },
                    react_1["default"].createElement(react_native_paper_1.Button, { style: styles.button, onPress: handleSubmit(function (data) {
                            var _a;
                            submitActivity(__assign(__assign({}, data), { date: date }));
                            (_a = props.bottomSheetModalRef.current) === null || _a === void 0 ? void 0 : _a.close();
                            control._reset();
                        }) },
                        react_1["default"].createElement(react_native_paper_1.Text, { style: styles.buttonText }, "Add")))))));
};
exports["default"] = CreateActivityModal;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        backgroundColor: 'grey'
    },
    contentContainer: {
        height: "100%",
        width: '100%',
        padding: 20
    },
    buttonContainer: {
        height: '40%',
        width: '100%',
        marginTop: '15%'
    },
    buttonText: {
        fontSize: 20,
        color: 'white'
    },
    button: {
        backgroundColor: 'black',
        borderRadius: 10
    }, textstyle: {
        color: 'white',
        fontSize: 45,
        fontWeight: 'bold',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: '7%'
    }
});
