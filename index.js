import express from "express";
import router from "./route/router.js";
import {fileURLToPath} from "url";
import path from "path";
const app= express();
const __filename= fileURLToPath(import.meta.url);
const __dirname= path.dirname(__filename);
app.set("view engine","ejs");
app.use(express.urlencoded({extended: true}));
app.set("views", path.join(path.resolve(), "views"));
app.use((express.static(path.join(__dirname,"public"))));
app.use("/",router);
// app.post('/submit',(req,res)=>{
//     const name= req.body.userName;
//     const message= req.body.message;
//     res.send(`Name: ${name}, message: ${message}`);
// });
app.listen(8006,()=> console.log("Server Up!"));
