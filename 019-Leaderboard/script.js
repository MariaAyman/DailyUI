voteCount = document.querySelectorAll(".element-count");
upArrow = document.querySelectorAll(".up-arrow");

/*upArrow.forEach(arrow => {
    arrow.addEventListener('click', () => {
        console.log("up!!" + arrow);
    });
});*/

let arr = [];

for(let i = 0; i<upArrow.length ; i++){
    //console.log(upArrow[i]);
    upArrow[i].addEventListener('click', ()=>{
        //console.log(i);
        //console.log(voteCount[i].innerHTML);
        voteCount[i].innerHTML++;
        /*arr[i] = voteCount[i].innerHTML;
        console.log(arr);
        arr = arr.sort((a,b) => b - a);
        console.log("sorted arr: " + arr);*/
    });
}