import { Router } from "express";
import { getAllLists, insertList, getList, deleteList } from "../controllers/list.controller.js";

const router = Router();

router.get("/", getAllLists);
router.get("/:code", getList)
router.post("/", insertList);
router.delete("/:code", deleteList)

export default router;
