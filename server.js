const http= require('http');
const route=require('./route');
var server= http.createServer(route.handler);
server.listen(4000);