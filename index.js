const lower_case = "abcdefghijklmnopqrstuvwxyz";
const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbol = "!@#$%^&*/?><";
const err = document.getElementById("err")
let showPassword = document.getElementById("Show")

let use_for = lower_case + upper_case + numbers + symbol;


let passwordGenerator = document.getElementById("password");


function generator(){
    let password = ""
    const passwordLength = use_for.length;
    for(let i=0; i<=20; i++){
        password += use_for.charAt(Math.floor(Math.random() * passwordLength));

        
    }
    passwordGenerator.value = password;
    
    return password;
    
    
    
}

function checkPassword(){
    if(passwordGenerator.value.length <= 5){
        err.innerText = "password too weak"
        err.style.color = "red";
    }else if(passwordGenerator.value.length <= 15){
        err.innerHTML = "password weak"
        err.style.color = "red";
    }else{err.innerHTML = "password strong"
        err.style.color = "green"}
}



function clearInput(){
    if(passwordGenerator.value != ""){
        passwordGenerator.value = "";
    }
    if(err.value != ""){
        err.value = "";
    }
    
}

function copyPassword(){
    passwordGenerator.select();
    passwordGenerator.setSelectionRange(0, 9999999);
    document.execCommand("copy")
}

function show(){
    if(passwordGenerator.type == "password"){
        passwordGenerator.type = "text"
        showPassword.innerText = "Hide";
    }else{passwordGenerator.type = "password"
        showPassword.innerText = "Show"}
}

