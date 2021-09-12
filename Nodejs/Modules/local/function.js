
//Functions:

const add=(a,b)=>{
    return a+b;
}

const mul=(a,b,c)=>{
    return a*b*c;
}

//////////////////////// Exports:

/**Method 1 */
module.exports={
    add,
    mul
}

// /**Method 2 */
// module.exports.add=add;
// module.exports.mul=mul;

// /**Method 3 */
// module.exports.add=(a,b)=>{
//     return a+b;
// }

// /** Method 4 */
// // can't be overwrite
// exports.add=(a,b)=>{
//     return a+b;
// }


////////console.log(module);
