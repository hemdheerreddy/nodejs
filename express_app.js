const express=require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded());

app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form>');
});

app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/add-product');
});


app.listen(4000);
