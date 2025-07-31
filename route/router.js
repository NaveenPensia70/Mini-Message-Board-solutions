import express from "express";
import {homePage,handleSubmit} from "../controllers/homeController.js"
const router= express.Router();

router.get("/",homePage);
router.post("/submit",handleSubmit);

export default router;


