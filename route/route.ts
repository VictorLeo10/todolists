import { Router } from "express";
import { todo, getall, getOne } from "../control/control";
const router = Router();

router.route("/newlist").post(todo);
router.route("/alltasks").get(getall);
router.route("/task/:id").get(getOne);

export default router;
