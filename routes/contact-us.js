const path=require('path');
const express=require('express');
const rootdir=require('../util/path.js');
const router=express.Router();

//path: /admin/add-product method=>GET
router.get('/contact-us',(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','contact-us.html'));
});

//path: /admin/add-product method=>POST
router.post('/contact-us',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/success');
});

module.exports=router;