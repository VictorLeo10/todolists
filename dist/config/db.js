"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const URI = "mongodb+srv://Loedb:leo10@cluster0.bthnwpa.mongodb.net/?retryWrites=true&w=majority";
mongoose_1.default.connect(URI);
mongoose_1.default.connection
    .on("open", () => {
    console.log(`database connection established`);
})
    .once("error", (error) => {
    console.log(`something went wrong: ${error}`);
});
