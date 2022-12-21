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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOne = exports.getall = exports.todo = void 0;
const model_1 = __importDefault(require("../model/model"));
const todo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { task, description, status } = req.body;
        const newList = yield model_1.default.create({ task, description, status });
        return res.status(200).json({
            message: `created new list`,
            data: newList,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: `something went wrong: ${error}`,
        });
    }
});
exports.todo = todo;
const getall = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allTasks = yield model_1.default.find();
        return res.status(200).json({
            message: `got all tasks`,
            data: allTasks,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: `something went wrong: ${error}`,
        });
    }
});
exports.getall = getall;
const getOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const oneTask = yield model_1.default.findById(req.params.id);
        return res.status(200).json({
            message: `got task`,
            data: oneTask,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: `something went wrong: ${error}`,
        });
    }
});
exports.getOne = getOne;
