const express=require('express');
const bodyParser = require('body-parser');
const app = express();

const homeroute=require('./routes/shop');
const productsroute=require('./routes/admin');

app.use(bodyParser.urlencoded());

app.use(homeroute);
app.use(productsroute);


app.listen(4000);
