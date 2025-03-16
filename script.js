const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "%$#@&*.";

const variables = upperCase+lowerCase+symbol+number;

let passwordLength = 12;
let capacity = 0;

function generator(){
    
        let password = ""; 
    
        for (let i = 0; i < passwordLength; i++) {
            password += variables[Math.floor(Math.random() * variables.length)];
        }
    
        return password;
    
}