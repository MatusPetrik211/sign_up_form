const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const message = document.querySelector('.message'); 
const form = document.querySelector('form');

form.addEventListener('submit', e => {
    if(password.value !== confirmPassword.value) {
        message.setAttribute('style', 'visibility: visible');
        e.preventDefault();
    }
})

