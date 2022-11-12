let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let imgs = document.querySelectorAll('.slideshow-img');
let dots = document.querySelectorAll('.dot');

let totalImgs = imgs.length;
let imgPos = 0;

function updatePos(){
    //for images
    for(let img of imgs){
        img.classList.remove('visible');
        img.classList.add('hidden');
    }

    imgs[imgPos].classList.remove('hidden');
    imgs[imgPos].classList.add('visible');

    //for dots
    for(let dot of dots){
        dot.className = dot.className.replace("active", "");
    }

    dots[imgPos].classList.add('active');
}

//click handler for next arrow
next.addEventListener('click', function(){
    if(imgPos === totalImgs -1){
        imgPos = 0;
    }
    else{
        imgPos++;
    }
    updatePos();
});

//click handler for prev arrow
prev.addEventListener('click', function(){
    if(imgPos === 0){
        imgPos = totalImgs - 1;
    }
    else{
        imgPos--;
    }
    updatePos();
});

//click handler for dots
dots.forEach((dot, dotPos) => {
    dot.addEventListener('click', () => {
        imgPos = dotPos
        updatePos(dotPos)
    })
})