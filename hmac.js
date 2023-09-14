let { createHmac } = require('crypto');

let key1 = "bestie";
let msg1 = "";

let key2 = "@ayush";
let msg2 = "hi ksh";

let hash1 = createHmac('sha256', key1).update(msg1).digest('hex');
console.log(hash1);

function verifyHmac(ogmsg, key, hash){
    let newhash = createHmac('sha256', key).update(ogmsg).digest('hex');
    return newhash === hash;
}

console.log(verifyHmac(msg1, key1, hash1));