const path=require('path');
const express=require('express');
const rootdir=require('../util/path.js');
const productsController = require('../controllers/products');
const router=express.Router();

//path: /admin/add-product method=>GET
router.get('/contact-us', productsController.getContactus);

//path: /admin/add-product method=>POST
router.post('/contact-us', productsController.postContactus);

module.exports=router;