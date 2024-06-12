var userInfo = document.getElementById("userInfo");

var container = [];

var data = [];
data = localStorage.getItem("user");

userInfo.innerHTML = `"${localStorage.getItem("nameInput")}"`;



if(localStorage.getItem("user") !== null){
    container = JSON.parse(localStorage.getItem("user"));
}


function load(){
    document.getElementById("welcome").innerHTML = 'welcome ' + JSON.parse(localStorage.getItem('username'));
}



function logOut(){
    localStorage.removeItem('username');
    window.location.href = '../index.html';
}