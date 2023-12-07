const path=require('path');
const express=require('express');
const rootdir=require('../util/path.js');
const router=express.Router();

router.use('/success',(req,res,next)=>{
    res.send('<h1>Form successfuly filled</h1>');
})

module.exports= router;