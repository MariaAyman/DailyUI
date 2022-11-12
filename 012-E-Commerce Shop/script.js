let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let imgs = document.querySelectorAll('.slideshow-img');
let tags = document.querySelectorAll('.slideshow-tag');
let prices = document.querySelectorAll('.slideshow-price');

let totalImgs = imgs.length;
let totalTags = tags.length;
let totalPrices = prices.length;

let imgPos = 0;
let tagPos = 0;
let pricePos = 0;

function updatePos(){
    //for images
    for(let img of imgs){
        img.classList.remove('visible');
        img.classList.add('hidden');
    }
    imgs[imgPos].classList.remove('hidden');
    imgs[imgPos].classList.add('visible');
    imgs[imgPos+1].classList.remove('hidden');
    imgs[imgPos+1].classList.add('visible');

    //for tags
    for(let tag of tags){
        tag.classList.remove('visible');
        tag.classList.add('hidden');
    }
    tags[tagPos].classList.remove('hidden');
    tags[tagPos].classList.add('visible');
    tags[tagPos+1].classList.remove('hidden');
    tags[tagPos+1].classList.add('visible');

    //for prices
    for(let price of prices){
        price.classList.remove('visible');
        price.classList.add('hidden');
    }
    prices[pricePos].classList.remove('hidden');
    prices[pricePos].classList.add('visible');
    prices[pricePos+1].classList.remove('hidden');
    prices[pricePos+1].classList.add('visible');
}

//click handler for next arrow
next.addEventListener('click', function(){
    if(imgPos === totalImgs -2 || tagPos === totalTags -2 || pricePos === totalPrices -2){
        imgPos = tagPos = pricePos = 0;
    }
    else{
        imgPos++;
        tagPos++;
        pricePos++;
    }
    updatePos();
});

//click handler for prev arrow
prev.addEventListener('click', function(){
    if(imgPos === 0 || tagPos === 0 || pricePos === 0){
        imgPos = tagPos = pricePos = totalImgs - 2;
    }
    else{
        imgPos--;
        tagPos--;
        pricePos--;
    }
    updatePos();
});