const express=require('express');
let app=express();

const mdb=require('./mdb');

app.get('/',(req,res)=>{
    res.status(200).send("hello");
});

app.listen(3000,()=>{
    console.log(`server running at http://127.0.0.1:3000`);
});