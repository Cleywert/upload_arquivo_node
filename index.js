const express = require("express");
const app = express();
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "upload/");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})    
const upload = multer({storage});

app.set("view engine", "ejs");

app.get("/", (req,res)=>{
    res.render("index");
})

app.post("/upload",upload.single("arquivo"),(req, res)=>{
    res.send("Arquivo recebido");
})

app.listen(8080, ()=>{
    console.log("Server rodando");
})