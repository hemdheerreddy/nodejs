const http= require('http');
var server= http.createServer((req,res)=>{
    const url=req.url;
    if(url === '/home'){
        res.write('<html>');
        res.write('<body><h1>Welcom home</h1></body>');
        res.write('</html>');
        res.end();
    }else if(url === '/about'){
        res.write('<html>');
        res.write('<body><h1>Welcom to About Us page</h1></body>');
        res.write('</html>');
        res.end();
    }else if(url === '/node'){
        res.write('<html>');
        res.write('<body><h1>Welcom to my Node Js project</h1></body>');
        res.write('</html>');
        res.end();
    }
    process.exit();
});
server.listen(4000);