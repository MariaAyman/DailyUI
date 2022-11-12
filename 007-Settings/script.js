/*let menue_elements = document.querySelectorAll('.menue-element');
let setting_elements = document.querySelectorAll('.settings-element');
let links = document.querySelectorAll('.id-link');
function tab(panelIndex){
    setting_elements.forEach(function(node){
        node.classList.add('hidden');
        node.classList.remove('visible');
    });
    setting_elements[panelIndex].classList.add('visible');
    setting_elements[panelIndex].classList.add('hidden');
}*/

let profile = document.getElementById('profile');
let notifications = document.getElementById('notifications');
let security = document.getElementById('security');

let menu1 = document.getElementById('menu1');
let menu2 = document.getElementById('menu2');
let menu3 = document.getElementById('menu3');
let menu4 = document.getElementById('menu4');

function update1(){
    profile.classList.add('visible');
    notifications.classList.add('hidden');
    security.classList.add('hidden');
    menu1.classList.add('menue-back');

    profile.classList.remove('hidden');
    notifications.classList.remove('visible');
    security.classList.remove('visible');
    menu2.classList.remove('menue-back');
    menu3.classList.remove('menue-back');
    menu4.classList.remove('menue-back');
}

function update2(){
    profile.classList.add('hidden');
    notifications.classList.add('visible');
    security.classList.add('hidden');
    menu2.classList.add('menue-back');

    profile.classList.remove('visible');
    notifications.classList.remove('hidden');
    security.classList.remove('visible');
    menu1.classList.remove('menue-back');
    menu3.classList.remove('menue-back');
    menu4.classList.remove('menue-back');
}

function update3(){
    profile.classList.add('hidden');
    notifications.classList.add('hidden');
    security.classList.add('visible');
    menu3.classList.add('menue-back');

    profile.classList.remove('visible');
    notifications.classList.remove('visible');
    security.classList.remove('hidden');
    menu1.classList.remove('menue-back');
    menu2.classList.remove('menue-back');
    menu4.classList.remove('menue-back');
}

function update4(){
    menu4.classList.add('menue-back');

    menu1.classList.remove('menue-back');
    menu2.classList.remove('menue-back');
    menu3.classList.remove('menue-back');
}

/*let eye = document.getElementById('eye');

eye.click(function(){
    console.log('eye');
    if(eye.classList.contains('fa-eye')){
        eye.classList.remove('fa-eye');
        eye.classList.add('fa-eye-slash');
    }
});*/