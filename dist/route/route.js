"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const control_1 = require("../control/control");
const router = (0, express_1.Router)();
router.route("/newlist").post(control_1.todo);
router.route("/alltasks").get(control_1.getall);
router.route("/task/:id").get(control_1.getOne);
exports.default = router;
