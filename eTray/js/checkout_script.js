// get cart info from the ordering page
var receipt = localStorage.getItem("receipt");

document.getElementById("receipt").innerHTML =  receipt;

function confirmPopup(){
    document.querySelector('.bg-modal-confirm').style.display = 'flex';
}

function closePopup(){
    document.querySelector('.bg-modal-confirm').style.display = 'none';
}