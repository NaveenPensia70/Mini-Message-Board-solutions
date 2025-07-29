import express from "express";
import router from "./route/router.js"
const app= express();
app.set("view engine","ejs");
app.use("/",router);
app.listen(8005,()=> console.log("Server Up!"));