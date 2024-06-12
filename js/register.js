var nameInput = document.getElementById("NameId");
var emailInput = document.getElementById("EmailId");
var passInput = document.getElementById("PassId");
var btnUpInput = document.getElementById("btnUp")
var alertMsg = document.getElementById("alert-msg")
var validName = document.getElementById("validname")
var validEmail = document.getElementById("validemail")
var validPass = document.getElementById("validpass")



var container = [];



if(localStorage.getItem("user") !== null){
    container = JSON.parse(localStorage.getItem("user"));
}


function save(){
    if(nameInput.value == "" || emailInput.value == "" || passInput.value == ""){
        // document.getElementById('alert-msg').innerHTML = "All Inputs Are Required !";
        alertMsg.innerHTML = "All Inputs Are Required !";
        return false;
    } else {
        if(ValidationName() == true && ValidationEmail() == true && ValidationPass() == true && isExisted() == false){
            var account = {
                name: nameInput.value,
                email: emailInput.value,
                pass: passInput.value
            }
            container.push(account);
            localStorage.setItem("user", JSON.stringify(container));
            document.getElementById('alert-msg').innerHTML = "Success";
            console.log(container)
        }
    }

}



function isExisted() {
    for(var i=0; i<container.length; i++){
        if(emailInput.value == container[i].email){
            alertMsg.innerHTML = "This email already exists !";
            emailInput.classList.add("is-invalid")
            return true;
        }
    }
    return false
}


nameInput.addEventListener('input',ValidationName)
function ValidationName(){
    var text = nameInput.value;
    var regex = /^.{2,}$/;

    if(regex.test(text) == true){
        nameInput.classList.add("is-valid")
        nameInput.classList.remove("is-invalid")
        validName.classList.add("d-none")
        return true;
    }
    else{
        nameInput.classList.add("is-invalid")
        nameInput.classList.remove("is-valid")
        validName.classList.remove("d-none")
        return false;
    }

}


emailInput.addEventListener('input', ValidationEmail)
function ValidationEmail(){
    var text = emailInput.value;
    var regex = /[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if(regex.test(text) == true){
        emailInput.classList.add("is-valid")
        emailInput.classList.remove("is-invalid")
        validEmail.classList.add("d-none")
        return true;
    }
    else{
        emailInput.classList.add("is-invalid")
        emailInput.classList.remove("is-valid")
        validEmail.classList.remove("d-none")
        return false;
    }

}


passInput.addEventListener('input', ValidationPass)
function ValidationPass(){
    var text = passInput.value;
    var regex = /^.{5,}$/;

    if(regex.test(text) == true){
        passInput.classList.add("is-valid")
        passInput.classList.remove("is-invalid")
        validPass.classList.add("d-none")
        return true;
    }
    else{
        passInput.classList.add("is-invalid")
        passInput.classList.remove("is-valid")
        validPass.classList.remove("d-none")
        return false;
    }

}


