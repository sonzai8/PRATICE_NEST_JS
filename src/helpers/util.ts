
const bcrypt = require('bcrypt');
const saltRounds = 10;

export const hashPasswordHelper = async (painPassword: string) =>{
    try {
        return await bcrypt.hash(painPassword, saltRounds);
    }catch(err){
            console.log(err)
    }
}

export const comparrePasswordHelper = async (painPassword: string , hashPassword: string) =>{
    try {
        return await bcrypt.compare(painPassword, hashPassword);
    }catch(err){
        console.log(err)
    }
}