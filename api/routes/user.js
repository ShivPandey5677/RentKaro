import express from "express";
import { addTenant, getUser } from "../controllers/user.js"
const router=express.Router();
router.get("/", getUser)
router.post("/tenant",addTenant);
export default router;