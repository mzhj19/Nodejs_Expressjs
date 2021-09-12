const http=require('http');

const server=http.createServer((req,res)=>{
    console.log(req.url);   /// requested url
    res.end('This is response from server');
})

server.listen(8080,()=>{
    console.log("server is running at port 8080");
})