const express =require("express");

const app=express();
const fs=require('fs');
const path=require('path')
app.use(express.static("."));
app.use(express.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"./index.html"))
})

app.get("/getData",(req,res)=>{
    let data= JSON.parse( fs.readFileSync("./user.json","utf-8"));
    res.json(data)
})
app.post("/addData",(req,res)=>{
   console.log(req.body)
   //const {title} = req.body;
    //console.log(title);

    fs.readFile("./user.json",(err,data)=>{
        const d = JSON.parse(data);
        let obj={}
        obj.data = req.body.title;
        d.push(obj)
        fs.writeFile("./user.json",JSON.stringify(d),(err)=>{
            console.log(err);
        })
        //res.json(obj)
        //req.end()
    })
   // console.log(data)
    
   
})


app.listen(5000,(err)=>{
console.log("Server Started...")
})