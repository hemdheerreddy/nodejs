const express=require('express');
const router=express.Router();

//path: /admin/add-product method=>GET
router.get('/add-product',(req,res,next)=>{
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="message"><input type="number" name="size"><button type="submit">Submit</button></form>');
});

//path: /admin/add-product method=>POST
router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/shop');
});

module.exports=router;