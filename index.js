const lower_case = "abcdefghijklmnopqrstuvwxyz";
const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbol = "!@#$%^&*/?><";

let use_for = lower_case + upper_case + numbers + symbol;


let passwordGenerator = document.getElementById("password")

function generator(){
    let password = ""
    const passwordLength = use_for.length;
    for(let i=0; i<=20; i++){
        password += use_for.charAt(Math.floor(Math.random() * passwordLength));

        
    }
    passwordGenerator.value = password;
    
    return password;
    
    
    
}



function clearInput(){
    if(passwordGenerator.value != ""){
        passwordGenerator.value = "";
    }
}

function copyPassword(){
    passwordGenerator.select();
    passwordGenerator.setSelectionRange(0, 9999999);
    document.execCommand("copy")
}