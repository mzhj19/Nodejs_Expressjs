const fs=require('fs');
const http=require('http');
const {hostname} = require('os');
const port=8080;

http.createServer((req,res)=>{
    fs.readFile('./page.html',(err,data)=>{
        console.log("Data has been read successfully");
        res.write(data);
        res.end();
    })

    
}).listen(port,hostname,()=>{
    console.log(`running at http://${hostname}:${port}`);
})