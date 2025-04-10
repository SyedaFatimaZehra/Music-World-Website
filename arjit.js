const music = new Audio('15 arjit.mp3');

// create Array 

const songs = [
    {
        id:'1',
        songName:` Naina ishq na ho <br>
        <div class="subtitle">Arjit singh</div>`,
        poster: "img/arjit/1.jpg"
    },
    {
        id:'2',
        songName:` Khairiyat <br>
        <div class="subtitle">Arjit singh</div>`,
        poster: "img/arjit/2.jpg"
    },
    // all object type 
    {
        id:"3",
        songName: `Desh mere Bhuj <br><div class="subtitle"> Arjit singh</div>`,
        poster: "img/arjit/3.jpg",
    },
    {
        id:"4",
        songName: `Dhoka <br><div class="subtitle">Arjit singh</div>`,
        poster: "img/arjit/4.jpg",
    },
    {
        id:"5",
        songName: `Tara Yar hon ma <br><div class="subtitle">Arjit singh</div>`,
        poster: "img/arjit/5.jpg",
    },
    {
        id:"6",
        songName: `Chunar <br><div class="subtitle">Arjit singh</div>`,
        poster: "img/arjit/6.jpg",
    },
    {
        id:"7",
        songName: `Galti sa mistake <br><div class="subtitle">Arjit singh</div>`,
        poster: "img/arjit/7.jpg",
    },
    {
        id:"8",
        songName: `Hamari Adhuri Kahani <br><div class="subtitle">Arjit singh</div>`,
        poster: "img/arjit/8.jpg",
    },
    {
        id:"9",
        songName: `Neki ki Raah <br><div class="subtitle">Arjit singh</div>`,
        poster: "img/arjit/9.jpg",
    },
    {
        id:"10",
        songName: `Humdard <br>
        <div class="subtitle">Arjit singh</div>`,
        poster: "img/arjit/10.jpg",
    },
    {
        id:"11",
        songName: `Mere Yaaraa <br>
        <div class="subtitle">Arjit singh</div>`,
        poster: "img/arjit/11.jpg",
    },
    {
        id:"12",
        songName: `Nashe Si Chadh Gayi <br>
        <div class="subtitle">Arjit singh</div>`,
        poster: "img/arjit/12.jpg",
    },
    {
        id:"13",
        songName: `Ae Watan - Male (Razzi) <br>
        <div class="subtitle">Arjit singh</div>`,
        poster: "img/arjit/13.jpg",
    },
    {
        id:"14",
        songName: `Vaaste <br><div class="subtitle">Arjit singh</div>`,
        poster: "img/arjit/14.jpg",
    },
    {
        id:"15",
        songName: `Pachtaoga <br>
        <div class="subtitle">Arjit singh</div>`,
        poster: "img/arjit/15.jpg",
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
} )


const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackgrounds = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
            element.style.background = "rgb(105, 105, 170, 0)";
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `img/arjit/${index}.mp3`;
        poster_master_play.src =`img/arjit/${index}.jpg`;
        download_music_href = `img/arjit/${index}.mp3`;
        music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })

        song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName);
        })
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        music.addEventListener('ended',()=>{
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
            wave.classList.remove('active2');
        })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    })
})


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
    if (sec<10) {
        sec = `0${sec}`
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    if (sec1<10) {
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration/100;
})

// music.addEventListener('ended', ()=>{
//     masterPlay.classList.add('bi-play-fill');
//     masterPlay.classList.remove('bi-pause-fill');
//     wave.classList.remove('active2');
//     download_music.href = `audio/${index}.mp3`;

// })


music.addEventListener('ended', ()=>{
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active2');
    index++;
    music.src = `img/arjit/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
    // add
    download_music.href = `audio/${index}.mp3`;

    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
          // add 
          download_music.setAttribute('download', songName)
    })
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)"; 
    makeAllPlays();
    document.getElementsByClassName('playListPlay')[index-1].classList.remove('bi-play-circle-fill');
    document.getElementsByClassName('playListPlay')[index-1].classList.add('bi-pause-circle-fill');
})


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
})


let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `img/arjit/${index}.mp3`;
    poster_master_play.src =`img/arjit/${index}.jpg`;

    download_music.href = `img/${index}.mp3`;

    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName)
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})
next.addEventListener('click', ()=>{
    index -= 0;
    index += 1;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
        }
    music.src = `audio/arjit/${index}.mp3`;
    poster_master_play.src =`img/arjit/${index}.jpg`;
    download_music.href = `img/arjit/${index}.mp3`;
    music.play();
    let song_title = songs.filter((ele)=>{9
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName)
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})


let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('pop_song')[0];

left_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
})
right_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
})


let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let item = document.getElementsByClassName('item')[0];

left_scrolls.addEventListener('click', ()=>{
    item.scrollLeft -= 330;
})
right_scrolls.addEventListener('click', ()=>{
    item.scrollLeft += 330;
})


let song_side = document.getElementById('menu_list_active_button');
let menu_side = document.getElementById('xyz');

let toggle = true;

song_side.addEventListener('click', ()=>{

    if(toggle) {
        console.log("on");
        toggle = false;
    } else {
        console.log("of");
        toggle = true;
    }
    menu_side.classList.toggle('abc');
     
    // menu_side.style.transform = "unset";
    // menu_side.classList.remove('abc');
    // menu_list_active_button.style.opacity = 0;
})