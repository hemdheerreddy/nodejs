const express=require('express');
const router=express.Router();

//pathL /shop
router.get('/',(req,res,next)=>{
    res.send('<h1>Welcome Home</h1><form action="/admin/add-product" method="GET"><button type="submit">Add Product</button></form>');
})

module.exports= router;