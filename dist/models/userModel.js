"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema_1 = __importDefault(require("../Schema/UserSchema"));
const userModel = (0, mongoose_1.model)("User", UserSchema_1.default);
exports.default = userModel;
