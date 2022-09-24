const address = document.getElementById('address');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e)=>{
    let messages = [];
    if (address.value ==='' || address.value == null) {
        messages.push('Please Enter an Address');
    }

    if (address.value.length <= 5){
        messages.push('Address must be longer than 4 characters');
    }

    if (address.value.length >= 40){
        messages.push('Address must be less than 40 characters');
    }

    if (messages.length > 0){
        e.preventDefault();
        errorElement.innerText = messages.join(', ');
    }
})