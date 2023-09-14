const {scryptSync, randomBytes, timingSafeEqual} = require('crypto');

function signup(email, password){
    let salt = randomBytes(32).toString('hex');
    let hashpwd = scryptSync(password, salt, 32);

    let user = { email, password:`${salt}:${hashpwd}`};
}

function login(email, password){
    let user = users.find(user => user.email === email);
    let [salt, key] = user.password.split(':');
    let hashedbuffer = scryptSync(password, salt, 32);

    //to protect from timing attacks from hackers
    let keybuffer = Buffer.from(key, 'hex');
    let match = timingSafeEqual(hashedbuffer,keybuffer);
    
    if(match){
        return 'Login Successful';
    }else{
        return 'Login Failed';
    }
}

mail = "aayush@mail.com";
pwd = "1234";
signup(mail, pwd);
console.log(user);