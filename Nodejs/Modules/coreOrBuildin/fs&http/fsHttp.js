const http=require('http');
const fs=require('fs');
const { hostname } = require('os');

const server=http.createServer((req,res)=>{
    
    fs.readFile('./file.html',(err,data)=>{
        res.write(data);
        res.end(); 
        
    })
})

server.listen(8080,hostname,()=>{
    console.log(`server is running at : http://${hostname}:8080`);
})