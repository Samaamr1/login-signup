var logemail = document.getElementById("emailId");
var logPass = document.getElementById("passId");
var btnINInput = document.getElementById("btnIn");
var logMsg = document.getElementById("msg");
var validEmail = document.getElementById("validemail");
var validPass = document.getElementById("validpass");
var log = document.getElementById("anchor");


var container = [];



if(localStorage.getItem("user") !== null){
    container = JSON.parse(localStorage.getItem("user"));
}

var data = [];
data = localStorage.getItem("user");

function Exist(userData){
    for(var i=0; i<data.length; i++){
        if(data[i].email == userData.email.value && data[i].pass == userData.pass.value){
            localStorage.setItem('username', JSON.stringify(container[i].name));
            return true;
        }else{
            logMsg.innerHTML = 'incorrect password or email !'
        }
    }
}

function login(){

    if( logemail.value == "" || logPass.value == ""){
        document.getElementById('msg').innerHTML = "All Inputs Are Required!";
    } 
    if ( ValidationEmail() && ValidationPass()) {
        var account = {
            email: logemail.value,
            pass: logPass.value
        }
    }

        if (Exist(account)) {
                location.href = './pages/home.html'
                return true;
        }
}





logemail.addEventListener('input', ValidationEmail)
function ValidationEmail(){
    var text = logemail.value;
    var regex = /[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if(regex.test(text) == true){
        logemail.classList.add("is-valid")
        logemail.classList.remove("is-invalid")
        validEmail.classList.add("d-none")
        return true;
    }
    else{
        logemail.classList.add("is-invalid")
        logemail.classList.remove("is-valid")
        validEmail.classList.remove("d-none")
        return false;
    }

}


logPass.addEventListener('input', ValidationPass)
function ValidationPass(){
    var text = logPass.value;
    var regex = /^.{5,}$/;

    if(regex.test(text) == true){
        logPass.classList.add("is-valid")
        logPass.classList.remove("is-invalid")
        validPass.classList.add("d-none")
        return true;
    }
    else{
        logPass.classList.add("is-invalid")
        logPass.classList.remove("is-valid")
        validPass.classList.remove("d-none")
        return false;
    }

}



btnINInput.addEventListener('click', function(){login()})




function load(){
    document.getElementById("welcome").innerHTML = 'welcome ' + JSON.parse(localStorage.getItem('username'));
}



function logOut(){
    localStorage.removeItem('username');
    window.location.href = '../index.html';
}
