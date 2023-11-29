const express=require('express');
const bodyParser = require('body-parser');
const app = express();

const shoproute=require('./routes/shop');
const adminroute=require('./routes/admin');

app.use(bodyParser.urlencoded());

app.use('/shop',shoproute);
app.use('/admin',adminroute);

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page Not Found</h1>');
});

app.listen(4000);
