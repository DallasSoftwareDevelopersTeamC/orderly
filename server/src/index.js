"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.json({ message: 'Server is running' });
});
app.listen(4000, () => {
    console.log(`Team C server is running on port 4000`);
});
