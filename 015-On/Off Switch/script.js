const btsList = [
    {
        //imgSrc: 'https://i.pinimg.com/originals/d7/b6/41/d7b64192979dbc2d429820abd2229d5b.jpg',
        imgSrc: 'https://i.pinimg.com/originals/8b/67/c1/8b67c1ddb89d292376ee7eff4622f2f5.jpg',
        imgName: 'Jungkook',
        // xSize: 950,
        // ySize: 320
        xSize: 1,
    },
    {
        //imgSrc: 'https://i.pinimg.com/474x/1b/c5/26/1bc5269177a53b567e0d2f8a17c839da.jpg',
        imgSrc: 'https://i.pinimg.com/originals/14/39/c7/1439c7d60fa898c1459d27e353ea5716.jpg',
        imgName: 'Jimin',
        // xSize: 650,
        // ySize: 320
        xSize: 3,
    },
    {
        //imgSrc: 'https://i.pinimg.com/474x/a9/dd/c1/a9ddc12e27363029daf936d69b0eda2e.jpg',
        imgSrc: 'https://i.pinimg.com/originals/e3/13/4b/e3134b6204ea86211f652df55b066a77.jpg',
        imgName: 'V',
        // xSize: 800,
        // ySize: 320
        xSize: 2,
    },
    {
        //imgSrc: 'https://i.pinimg.com/236x/e2/44/52/e2445214704e168601704932c5b13dec.jpg',
        imgSrc: 'https://i.pinimg.com/originals/52/a4/fc/52a4fc4e245cfccb607c681823db16ba.jpg',
        imgName: 'Jin',
        // xSize: 230,
        // ySize: 320
        xSize: 6,
    },
    {
        //imgSrc: 'https://i.pinimg.com/474x/df/f7/ab/dff7ab59059ee15018b184843a323697.jpg',
        imgSrc: 'https://i.pinimg.com/originals/69/5e/59/695e599fdb381f9deb1530fd39b9b43f.jpg',
        imgName: 'Suga',
        // xSize: 370,
        // ySize: 320
        xSize: 5,
    },
    {
        //imgSrc: 'https://i.pinimg.com/474x/e0/85/2b/e0852b0f1251cb9a4dbff7663df13e83.jpg',
        imgSrc: 'https://i.pinimg.com/originals/96/3f/fe/963ffe9e840d8a35ab1d9152ad465fd9.jpg',
        imgName: 'Jhope',
        // xSize: 500,
        // ySize: 320
        xSize: 4,
    },
    {
        //imgSrc: 'https://i.pinimg.com/236x/f5/ad/46/f5ad4655642c589b5be4cf0f4f8ba6c7.jpg',
        imgSrc: 'https://i.pinimg.com/originals/34/52/23/345223154c47225bd1370cbb5bc9e8cd.jpg',
        imgName: 'RM',
        // xSize: 90,
        // ySize: 320
        xSize: 7,
    }
];

const btsInput = document.getElementById('btsInput');
const btsMember = document.getElementById('btsMember');
const spotlight = document.querySelector('.spotlight');
let spotLightSize = 'transparent 120px, rgba(0, 0, 0, 0.85) 160px';

let givenIndex = 0;

btsInput.addEventListener('click', ()=>{
    console.log(btsInput.checked);
    //circular array starting from a given index
    if(btsInput.checked == true){
        if(givenIndex < btsList.length + givenIndex){
            //givenIndex++;
            console.log(btsList[givenIndex % btsList.length].imgName);
            btsMember.innerHTML = `<img src="${btsList[givenIndex % btsList.length].imgSrc}">`;
            updateSpotLight(givenIndex % btsList.length);
            givenIndex++;
        }
    }
    else{
        if(givenIndex < btsList.length + givenIndex){
            //givenIndex++;
            console.log(btsList[givenIndex % btsList.length].imgName);
            btsMember.innerHTML = `<img src="${btsList[givenIndex % btsList.length].imgSrc}">`;
            updateSpotLight(givenIndex % btsList.length);
            givenIndex++;
        }
    }
});

function updateSpotLight(i){
    // spotlight.style.backgroundImage = `radial-gradient(circle at ${btsList[i].xSize / window.innerWidth *100}% ${btsList[i].ySize / window.innerHeight * 100}%, ${spotLightSize})`
    spotlight.style.backgroundImage = `radial-gradient(circle at ${window.innerWidth - ((btsList[i].xSize * 80)*2.5)}px ${window.innerHeight - 160}px, ${spotLightSize})`
}