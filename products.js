const rootdir=require('../util/path.js');
exports.getContactus= (req,res,next)=>{
    res.send('<form action="/contact-us" method="POST"><input type="text" name="name" value="Name"><input type="text" name="emailid" value="MailId"><button type="submit">Submit</button></form>');
};

exports.postContactus= (req,res,next)=>{
    console.log(req.body);
    res.redirect('/success');
};

exports.getSuccess= (req,res,next)=>{
    res.send('<h1>Form successfuly filled</h1>');
};