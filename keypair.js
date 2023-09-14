const {generateKeyPairSync} = require('crypto');
const {publicKey, privateKey} = generateKeyPairSync('rsa');