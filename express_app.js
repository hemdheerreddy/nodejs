const path=require('path');
const express=require('express');

const bodyParser = require('body-parser');
const app = express();

const shoproute=require('./routes/shop');
const adminroute=require('./routes/admin');
const contactroute=require('./routes/contact-us');
const successroute=require('./routes/success');

app.use(bodyParser.urlencoded());

app.use(successroute);
app.use(shoproute);
app.use('/admin',adminroute);
app.use(contactroute);


app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});

app.listen(4000);
