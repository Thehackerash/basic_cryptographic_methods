 const { createCipheriv, createDecipheriv, randomBytes } = require('crypto');

const msg = "hi mom";
const key = randomBytes(32);
const iv = randomBytes(16);

//encrypt
const cipher = createCipheriv('aes-256-gcm', key, iv); //gcm is a mode of operation
const encryptedmsg = cipher.update(msg, 'utf8', 'hex') + cipher.final('hex');

// decrypt
const decipher = createDecipheriv('aes-256-gcm', key, iv);
const decryptedmsg = decipher.update(encryptedmsg, 'hex', 'utf8') + decipher.final('utf8');