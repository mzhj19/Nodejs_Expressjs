const os=require('os');

console.log(os.arch()); // 64

console.log(os.cpus());
console.log(os.freemem()/1024);
console.log(os.networkInterfaces());
console.log(os.hostname());
console.log(os.homedir());
console.log(os.type());
console.log(os.userInfo());
