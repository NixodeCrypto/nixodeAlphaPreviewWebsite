"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('module-alias/register');
var express_1 = __importDefault(require("express"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var path_1 = __importDefault(require("path"));
var dotenv_1 = __importDefault(require("dotenv"));
var cors_1 = __importDefault(require("cors"));
var mongoose_1 = __importDefault(require("mongoose"));
var index_1 = __importDefault(require("@/routes/index"));
dotenv_1.default.config();
var PORT = process.env.PORT || 7000;
// DB Connect
var MONGODB_URL = process.env.MONGODB_URL;
mongoose_1.default
    .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(function () {
    // do not show the log when environment = "test"
    if (process.env.NODE_ENV !== 'test') {
        console.log('Connected to MongoDB');
        console.log("App is running on port " + PORT + "... \n");
        console.log('Press CTRL + C to stop the process. \n');
    }
})
    .catch(function (err) {
    // do not show the log when environment = "test"
    if (process.env.NODE_ENV !== 'test') {
        console.log('App Starting Error:', err.message);
        process.exit(1);
    }
});
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
// cross-origin requests
app.use((0, cors_1.default)());
// route prefixes
app.use('/', index_1.default);
app.listen(PORT);
exports.default = app;
