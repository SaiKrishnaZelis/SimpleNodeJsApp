const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("Welcome to Docker World");
})

app.listen(3000,function (){
    console.log("App listen on Port 3000 About Docker");
});