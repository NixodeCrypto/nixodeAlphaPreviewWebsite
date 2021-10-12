"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var PORT = process.env.PORT || 7000;
var app = (0, express_1.default)();
app.get('/', function (req, res) {
    res.send('Well Done');
});
app.listen(PORT, function () {
    console.log("App started on port: " + PORT);
});
