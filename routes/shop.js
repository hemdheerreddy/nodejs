const express=require('express');
const router=express.Router();

router.get('/',(req,res,next)=>{
    res.send('<h1>Welcome Home</h1><form action="/add-product" method="GET"><button type="submit">Add Product</button></form>');
})

module.exports= router;