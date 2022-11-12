let model = document.querySelector('.model');
let btn = document.querySelector('#trigger');
let closeSpan = document.querySelector('.close');

let model_content = document.querySelector('.model-content');

//click handler on the btn
btn.onclick = function(){
    model.style.display = "block";
    //model.classList.add('visible');
}

//click handler on X
closeSpan.onclick = function(){
    model.style.display = "none";
    //model.classList.remove('.visible');
    
    //model_content.classList.add('reversepop-class');
    //console.log('reversepop');
}

//click handler anywhere in the screen
window.onclick = function(e){
    if(e.target == model){
        model.style.display = "none";
        //model.classList.remove('.visible');
    }
}
