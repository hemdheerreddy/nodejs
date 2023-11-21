const fs=require('fs');
 const routeHandler= (req,res) =>{
    const url=req.url;
    const method=req.method;
    if(url === '/'){
        fs.readFile("message.txt",{encoding:"utf-8"},(err,data) =>{
            if(err){
                console.log(err);
            }
            res.write('<html>');
            res.write(`<body>${data}</body>`);
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>');
            res.write('</html>');
            return res.end();
        });
        
    }
    if(url==='/message' && method ==='POST'){
        const body=[];
        req.on('data',chunk=>{
            body.push(chunk);
        });
        return req.on('end',()=>{
            const parsedata=Buffer.concat(body).toString();
            const message=parsedata.split('=')[1];
            fs.writeFile('message.txt',message,err=>{
                res.statusCode=302;
                res.setHeader('Location','/');
                return res.end();
            });
        });
        
    }
}
// module.exports=routeHandler;
// module.exports={
//     handler: routeHandler,
//     text: "Testing Code"
// };
exports.handler= routeHandler;