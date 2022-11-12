let countdowntimer;
let curr;
let timeStr;
let timeArr;

let startE = document.getElementById('start');
let stopE = document.getElementById('stop');
let resumeE = document.getElementById('resume');
let resetE = document.getElementById('reset');

let hourE = document.getElementById('hours');
let minE = document.getElementById('minutes');
let secE = document.getElementById('secounds');

function start(){
    countdowntimer = setInterval(timer, 1000);
    startE.classList.remove('visible');
    startE.classList.add('hidden');
    stopE.classList.remove('hidden');
    stopE.classList.add('visible');
    resumeE.classList.remove('visible');
    resumeE.classList.add('hidden');
    resetE.innerHTML = "Cancel";
}

function timer(){
    //let today = new Date();
    //let d = today.getDate();
    let h = parseInt(hourE.value, 0);
    let m = parseInt(minE.value, 0);
    let s = parseInt(secE.value, 0);

    curr = ((h * 3600) + (m * 60) + s);
    curr = curr * 1000;
    console.log('curr ' + curr);
    timeStr = msToHMS(curr);
    //console.log(timeStr);
    if (curr > 0){
        curr--;
        timeStr = msToHMS(curr);
        timeArr = timeStr.split(":");
        console.log(timeArr);
        hourE.value = timeArr[0];
        minE.value = timeArr[1];
        secE.value = timeArr[2];
    }
    else{
        console.log("Expired");
        clearInterval(countdowntimer);
        alert("Time's Up!");
        startE.classList.remove('hidden');
        startE.classList.add('visible');
        stopE.classList.remove('visible');
        stopE.classList.add('hidden');
    }
}

function msToHMS(ms){
    const sec = Math.floor((ms / 1000) % 60);
    const min = Math.floor((ms / 1000 / 60) % 60);
    const hour = Math.floor((ms / 1000 / 3600) % 24);
    let str = hour + ":" + min + ":" + sec;
    return str;
}

function stop(){
    console.log("Stop");
    clearInterval(countdowntimer);
    console.log('timeArr stop: ' + timeArr);
    hourE.value = timeArr[0];
    minE.value = timeArr[1];
    secE.value = timeArr[2];

    resumeE.classList.remove('hidden');
    resumeE.classList.add('visible');
    stopE.classList.remove('visible');
    stopE.classList.add('hidden');
}

function reset(){
    console.log("Reset/Cancel");
    clearInterval(countdowntimer);
    hourE.value = "00";
    minE.value = "00";
    secE.value = "00";
    
    resetE.innerHTML = "Reset";
    startE.classList.remove('hidden');
    startE.classList.add('visible');
    stopE.classList.remove('visible');
    stopE.classList.add('hidden');
    resumeE.classList.remove('visible');
    resumeE.classList.add('hidden');
}