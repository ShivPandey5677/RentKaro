import express from "express"
import { addProperty, getProperty } from "../controllers/property.js";
const router=express.Router();
router.post("/addproperty",addProperty);
router.get("/",getProperty)
export default router;