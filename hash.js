const { createHash } = require('crypto');
function Hash(input){
    return createHash('sha256').update(input).digest('hex');
}

let pwd = 'hi mom'
let hash1 = Hash(pwd);
console.log(hash1);
let hash2 = Hash(pwd);
let match = hash1 === hash2;
console.log(match);