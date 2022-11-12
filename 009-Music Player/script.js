let song_list = [
    {
        song_name: 'Velvet',
        song_img: 'https://images-na.ssl-images-amazon.com/images/I/51lizXoB-zL.jpg',
        song_src: '01 Velvet.mp3',
        total_time: '02:58',
        likedSong: false
    },
    {
        song_name: 'Superpower',
        song_img: 'https://m.media-amazon.com/images/I/71ejTeD5lwL._SS500_.jpg',
        song_src: '02 Superpower.mp3',
        total_time: '03:11',
        likedSong: false
    },
    {
        song_name: 'Stranger You Are',
        song_img: 'https://images-na.ssl-images-amazon.com/images/I/51lizXoB-zL.jpg',
        song_src: '03 Stranger You Are.mp3',
        total_time: '02:52',
        likedSong: false
    },
    {
        song_name: 'Loverboy',
        song_img: 'https://images-na.ssl-images-amazon.com/images/I/51lizXoB-zL.jpg',
        song_src: '04 Loverboy.mp3',
        total_time: '03:20',
        likedSong: false
    },
    {
        song_name: 'Roses',
        song_img: 'https://i1.sndcdn.com/artworks-QOpm8t0qpBoOy2mD-hlTubw-t500x500.jpg',
        song_src: '05 Roses.mp3',
        total_time: '03:47',
        likedSong: false
    },
    {
        song_name: 'Closer to you',
        song_img: 'https://images-na.ssl-images-amazon.com/images/I/51lizXoB-zL.jpg',
        song_src: '06 Closer to You.mp3',
        total_time: '04:20',
        likedSong: false
    },
    {
        song_name: 'Overglow',
        song_img: 'https://images-na.ssl-images-amazon.com/images/I/51lizXoB-zL.jpg',
        song_src: '07 Overglow.mp3',
        total_time: '03:33',
        likedSong: false
    },
    {
        song_name: "Comin' in Hot",
        song_img: 'https://m.media-amazon.com/images/I/71mwHYo+egL._SS500_.jpg',
        song_src: '08 Comin in hot.mp3',
        total_time: '02:49',
        likedSong: false
    },
    {
        song_name: 'On the Moon',
        song_img: 'https://images-na.ssl-images-amazon.com/images/I/51lizXoB-zL.jpg',
        song_src: '09 On the Moon.mp3',
        total_time: '03:59',
        likedSong: false
    },
    {
        song_name: "Love Don't",
        song_img: 'https://images-na.ssl-images-amazon.com/images/I/51lizXoB-zL.jpg',
        song_src: '10 Love Dont.mp3',
        total_time: '03:41',
        likedSong: false
    },
    {
        song_name: 'Ready to Run',
        song_img: 'https://images-na.ssl-images-amazon.com/images/I/51lizXoB-zL.jpg',
        song_src: '11 Ready to Run.mp3',
        total_time: '03:10',
        likedSong: false
    },
    {
        song_name: 'New Eyes',
        song_img: 'https://m.media-amazon.com/images/I/71InQnSnLIL._SS500_.jpg',
        song_src: '12 New Eyes.mp3',
        total_time: '03:45',
        likedSong: false
    },
    {
        song_name: 'Feel Something',
        song_img: 'https://i2.wp.com/thomasbleach.com/wp-content/uploads/2019/02/adam-lambert-feel-something.jpg?resize=500%2C500&ssl=1',
        song_src: '13 Feel Something.mp3',
        total_time: '02:59',
        likedSong: false
    }
];

let allHeart = document.querySelectorAll('.like');
let heart_player = document.querySelector('#heart');
let previous = document.querySelector('#prev');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let random = document.querySelector('#random');
let songs = document.querySelectorAll('.song');

let range = document.querySelector('.duration-range');
let currTime = document.querySelector('.count');

let audio = new Audio();
let currSong = 1;

window.onload = playSong;

function playSong(){
    audio.src = song_list[currSong].song_src;
    audio.play();
    play.innerHTML = '<i class="fas fa-pause"></i>';
}

audio.addEventListener('timeupdate', function(){
    let pos = audio.currentTime / audio.duration;
    range.style.width = pos * 100 + '%';
    convertTime(Math.round(audio.currentTime));
    if(audio.ended){
        nextSong();
    }
});

function convertTime(time){
    let min = Math.floor(time/60);
    let sec = time % 60;

    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;
    currTime.textContent = min + ':' + sec;
}

play.addEventListener('click', () => {
    if(audio.paused){
        audio.play();
        play.innerHTML = '<i class="fas fa-pause"></i>';
    }
    else{
        audio.pause();
        play.innerHTML = '<i class="fas fa-play"></i>';
    }
})

next.addEventListener('click', () => {
    currSong++;
    if(currSong > 12){
        currSong = 0;
    }

    playSong();
    play.innerHTML = '<i class="fas fa-pause"></i>';

    $('.song-name').html(song_list[currSong].song_name);
    $('.song-img').attr('src', song_list[currSong].song_img);
    $('.total-time').html(song_list[currSong].total_time);
})

previous.addEventListener('click', () => {
    currSong--;
    if(currSong < 0){
        currSong = 12;
    }

    playSong();
    play.innerHTML = '<i class="fas fa-pause"></i>';

    $('.song-name').html(song_list[currSong].song_name);
    $('.song-img').attr('src', song_list[currSong].song_img);
    $('.total-time').html(song_list[currSong].total_time);
})

heart_player.addEventListener('click', () => {
    if(heart_player.innerHTML === '<i class="far fa-heart"></i>' && song_list[currSong].likedSong == false){
        heart_player.innerHTML = '<i class="fas fa-heart"></i>'
        song_list[currSong].likedSong = true;
        allHeart[currSong].innerHTML = '<i class="fas fa-heart"></i>';
        console.log(song_list[currSong].song_name);
        console.log(song_list[currSong].likedSong);
    }
    else{
        heart_player.innerHTML = '<i class="far fa-heart"></i>';
        song_list[currSong].likedSong = false;
        allHeart[currSong].innerHTML = '<i class="far fa-heart"></i>';
        console.log(song_list[currSong].song_name);
        console.log(song_list[currSong].likedSong);
    }
})

songs.forEach(function(item, index){
    item.addEventListener('click', () => {
        currSong = index;
        console.log(song_list[currSong].song_name);
        $('.song-name').html(song_list[currSong].song_name);
        $('.song-img').attr('src', song_list[currSong].song_img);
        $('.total-time').html(song_list[currSong].total_time);
        playSong();
    });
})