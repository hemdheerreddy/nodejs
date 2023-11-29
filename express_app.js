const express=require('express');
const bodyParser = require('body-parser');
const app = express();

const homeroute=require('./routes/shop');
const productsroute=require('./routes/admin');

app.use(bodyParser.urlencoded());

app.use(homeroute);
app.use(productsroute);

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page Not Found</h1>');
});

app.listen(4000);
