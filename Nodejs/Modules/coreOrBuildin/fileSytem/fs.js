const fs=require('fs');

////////////////// Write file

// make data
const obj={
    name:'jamil',
    email: 'mzhj19@gmail.com',
    address:{
        village:'chalkhatbari',
        post_upazila:'sarishabari',
        district:'jamalpur',
        country:'bangalesh'
    }

}
// data must be string type

let data=JSON.stringify(obj);
fs.writeFile('mytext',data,(err)=>{  
    if(err) {
        console.log("Have error");
    }
    else {
        console.log("Write  successful");
    }
})

// buffer is not readable,json readable

/////////////////////////// Read file

fs.readFile('./mytext',(err,data)=>{
    if(err) {
        console.log('Have error');
    }
    else console.log(data); // buffer
    let Data=JSON.parse(data);
    console.log(Data);
})