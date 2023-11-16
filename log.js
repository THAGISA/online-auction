const username =document.getElementById("emailId");
const pass =document.getElementById("passwCon");
const sign = document.getElementById("signupBtn");
const submit = document.getElementById("signinBtn");

username.addEventListener("keyup", (e)=>{

    const value = e.currentTarget.value;

    if(value == ""){
        submit.disabled = true;
    }else{
        submit.disabled = false;
    }
});

pass.addEventListener("keyup", (e)=>{

    const valu = e.currentTarget.value;

    if(valu == ""){
        sign.disabled = true;
    }else{
        sign.disabled = false;
    }
});



