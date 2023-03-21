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
var react_hook_form_1 = require("react-hook-form");
var react_native_2 = require("react-native");
var CInput_1 = require("../components/CInput");
var CButton_1 = require("../components/CButton");
var async_storage_1 = require("@react-native-async-storage/async-storage");
var react_native_paper_1 = require("react-native-paper");
var login_1 = require("../rules/login");
var login_2 = require("../styles/login");
var routes_1 = require("../routes/routes");
var ApiService_1 = require("../services/ApiService");
var react_redux_1 = require("react-redux");
var userIdSlice_1 = require("../redux/slices/userIdSlice");
var Login = function (props) {
    var dispatch = react_redux_1.useDispatch();
    var _a = react_hook_form_1.useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    }), handleSubmit = _a.handleSubmit, control = _a.control;
    react_1.useEffect(function () {
        (function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, async_storage_1["default"].multiGet(['token', 'id'])];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); })().then(function (res) {
            if (res[0][1] && res[1][1]) {
                props.navigation.push('Session');
            }
        })["catch"](function (e) {
            console.log(e);
        });
    }, []);
    var signInWIthCredentials = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var authDomain, authData, userDomain;
        return __generator(this, function (_a) {
            authDomain = "" + routes_1.routes.authHost + routes_1.routes.login;
            authData = { email: data.email, password: data.password };
            userDomain = "" + routes_1.routes.userHost + routes_1.routes.user + "/" + data.email;
            ApiService_1.postRequest(authDomain, authData).then(function (authResponse) {
                ApiService_1.getRequest(userDomain).then(function (userResponse) {
                    var _a, _b, _c;
                    ApiService_1.asyncStoreMulti([["token", (_a = authResponse === null || authResponse === void 0 ? void 0 : authResponse.data) === null || _a === void 0 ? void 0 : _a.token], ["id", (_b = userResponse === null || userResponse === void 0 ? void 0 : userResponse.data) === null || _b === void 0 ? void 0 : _b._id]]);
                    dispatch(userIdSlice_1.setId((_c = userResponse === null || userResponse === void 0 ? void 0 : userResponse.data) === null || _c === void 0 ? void 0 : _c._id));
                });
            }).then(function () { return props.navigation.push("onboarding"); })["catch"](function (e) { return console.log(e); });
            return [2 /*return*/];
        });
    }); };
    return (react_1["default"].createElement(react_native_2.View, { style: login_2.styles.body },
        react_1["default"].createElement(react_native_2.View, { style: login_2.styles.container },
            react_1["default"].createElement(react_native_1.Image, { style: login_2.styles.stretch, source: require('../assets/meetup.png') }),
            react_1["default"].createElement(react_native_2.Text, { style: login_2.styles.txt }, " Meetup ")),
        react_1["default"].createElement(react_native_2.View, { style: { marginBottom: 60 } },
            react_1["default"].createElement(react_native_2.Text, { style: login_2.styles.txt1 }, " Welcome back, "),
            react_1["default"].createElement(react_native_2.Text, { style: login_2.styles.txt2 }, " Sign in to continue ")),
        react_1["default"].createElement(CInput_1["default"], { control: control, style: { marginBottom: 30 }, rules: login_1.emailRules, placeholder: "Please enter your email...", label: "email", name: "email", secureTextEntry: false }),
        react_1["default"].createElement(CInput_1["default"], { control: control, style: { marginBottom: 30 }, rules: login_1.passwordRules, placeholder: "Please enter your password...", label: "password", name: "password", secureTextEntry: true }),
        react_1["default"].createElement(CButton_1["default"], { content: "Sign In", control: control, style: { borderRadius: 8, marginBottom: 180 }, name: "button", mode: "contained", onPress: handleSubmit(signInWIthCredentials) }),
        react_1["default"].createElement(react_native_2.View, { style: login_2.styles.bottomView },
            react_1["default"].createElement(react_native_2.Text, { style: [login_2.styles.txt3, { color: 'white' }] }, " Don't have an account? "),
            react_1["default"].createElement(react_native_paper_1.Button, { style: { borderRadius: 8, width: 110, padding: 0 }, labelStyle: { fontSize: 12 }, mode: "outlined", onPress: function () { return props.navigation.push("SignUp"); } }, "Sign Up"))));
};
exports["default"] = Login;
