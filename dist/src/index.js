"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route_1 = __importDefault(require("../route/route"));
const port = process.env.port || 2041;
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
require("../config/db");
app.use((0, cors_1.default)({ origin: "*" }));
app.get("/", (req, res) => {
    try {
        res.status(200).json({
            message: `server running`,
        });
    }
    catch (error) {
        res.status(404).json({
            message: `Something went wrong ${error}`,
        });
    }
});
app.use("/api", route_1.default);
app.listen(port, () => {
    console.log(`port ${port} is running`);
});
