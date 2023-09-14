const crypto = require('crypto');

function encrypt(text, password) {
  const iv = crypto.randomBytes(16); // Initialization Vector
  const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(password), iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return iv.toString('hex') + ':' + encrypted.toString('hex');
}

function decrypt(encryptedText, password) {
  const textParts = encryptedText.split(':');
  const iv = Buffer.from(textParts.shift(), 'hex');
  const encryptedTextBytes = Buffer.from(textParts.join(':'), 'hex');
  const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(password), iv);
  let decrypted = decipher.update(encryptedTextBytes);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}

// Example usage:
const password = 'YourSecretPassword';
const plainText = 'Hello, this is a secret message!';

const encryptedText = encrypt(plainText, password);
console.log('Encrypted:', encryptedText);

const decryptedText = decrypt(encryptedText, password);
console.log('Decrypted:', decryptedText);
