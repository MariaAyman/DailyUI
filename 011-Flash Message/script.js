let error_button = document.querySelector('.error-button');
let success_button = document.querySelector('.success-button');

let error = document.querySelector('.alert-error');
let success = document.querySelector('.alert-success');

let closeError = document.querySelector('#close-error');
let closeSuccess = document.querySelector('#close-success');

//error button click handler
error_button.addEventListener('click', () => {
    error_button.style.cssText = 'visibility: hidden; z-index: 0;';
    error.style.cssText = 'visibility: visible; z-index: 100; transition: .3s ease-in-out;';
});

//error close click handler
closeError.addEventListener('click', () => {
    closeError.style.cssText = 'background: gray;';
    error.style.cssText = 'visibility: hidden; z-index: 0;';
    error_button.style.cssText = 'visibility: visible; z-index: 100;';
});

//sucess button click handler
success_button.addEventListener('click', () => {
    success_button.style.cssText = 'visibility: hidden; z-index: 0;';
    success.style.cssText = 'visibility: visible; z-index: 100;';
});

//success close click handler
closeSuccess.addEventListener('click', () => {
    closeSuccess.style.cssText = 'background: gray;';
    success.style.cssText = 'visibility: hidden; z-index: 0;';
    success_button.style.cssText = 'visibility: visible; z-index: 100;';
});