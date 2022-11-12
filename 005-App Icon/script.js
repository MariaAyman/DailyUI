let umbrella = document.getElementById('umbrella-icon');
let cap = document.getElementById('captain-america-icon');
let xmen = document.getElementById('xmen-icon');

let body = document.body;

let umbH1 = document.getElementById('umbH1');
let capH1 = document.getElementById('capH1');
let xH1 = document.getElementById('xH1');

umbrella.onmouseover = function(){
    body.className = 'umbBG';
    cap.style.visibility = 'hidden';
    xmen.style.visibility = 'hidden';
    umbH1.style.visibility = 'visible';
    umbH1.style.color = 'white';
}
umbrella.onmouseout = function(){
    //body.className = '';
    cap.style.visibility = 'visible';
    xmen.style.visibility = 'visible';
    umbH1.style.visibility = 'hidden';
}

cap.onmouseover = function(){
    body.className = 'capBG';
    umbrella.style.visibility = 'hidden';
    xmen.style.visibility = 'hidden';
    capH1.style.visibility = 'visible';
    capH1.style.color = 'white';
}
cap.onmouseout = function(){
    //body.className = '';
    umbrella.style.visibility = 'visible';
    xmen.style.visibility = 'visible';
    capH1.style.visibility = 'hidden';
}

xmen.onmouseover = function(){
    body.className = 'xmenBG';
    cap.style.visibility = 'hidden';
    umbrella.style.visibility = 'hidden';
    xH1.style.visibility = 'visible';
    xH1.style.color = 'white';
}
xmen.onmouseout = function(){
    //body.className = '';
    cap.style.visibility = 'visible';
    umbrella.style.visibility = 'visible';
    xH1.style.visibility = 'hidden';
}