const express=require('express');
const app=express();
app.use((req,res,next)=>{
    console.log("middleware");
    res.send('<h1> hello to node js </h1>');
    next();
});
app.use((req,res,next)=>{
    console.log("middleware2");
    res.send( { key1: value });
});
app.listen(3000);