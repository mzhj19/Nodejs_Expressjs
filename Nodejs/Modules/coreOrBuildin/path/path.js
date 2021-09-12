const { isAbsolute } = require('path');
const path=require('path');

//console.log(path);

const curPath=__filename;

//basename
console.log(path.basename(__filename));// file name with extension
console.log(path.basename(__dirname));// file name without extension

//Finding extention name
console.log(path.extname(curPath));

// make path from obj
let pathObj={
    dir: 'user/local',
    name: 'testFile',
    ext: '.js'
}
let objInpath=path.format(pathObj);
console.log(objInpath);


// finding abspath
console.log(isAbsolute(objInpath));

// make path by joining
const makePath=path.join('user','local','jamil','path.js');
console.log(makePath);

// make absolute path
//  same as join,but it gives absolute path
const absPath=path.resolve(__dirname,'myFile','test.js');
console.log(absPath);


// parse the path
// gives obj from path
const parsedPath=path.parse(curPath);
console.log(parsedPath);
