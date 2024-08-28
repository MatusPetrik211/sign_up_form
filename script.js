const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const message = document.querySelector('.message'); 
const form = document.querySelector('form');

form.addEventListener('submit', e => {
    const password = document.querySelector('#password').value;
    const confirmPassword = document.querySelector('#confirm-password').value;
    const message = document.querySelector('.message'); 

    if(password !== confirmPassword) {
        message.setAttribute('style', 'visibility: visible');
        e.preventDefault();
    }
})

