const path=require('path');
const express=require('express');
const rootdir=require('../util/path.js');
const router=express.Router();

//path: /admin/add-product method=>GET
router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','add-product.html'));
});

//path: /admin/add-product method=>POST
router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});

module.exports=router;