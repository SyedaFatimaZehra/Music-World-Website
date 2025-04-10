// Step 3 
// Next Step In Css File 
let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `audio/${index}.mp3`;
        // add
        download_music.href = `audio/${index}.mp3`;

        poster_master_play.src =`img/${index}.jpg`;
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


music.addEventListener('ended', ()=>{
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active2');
    index++;
    music.src = `audio/${index}.mp3`;
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


// This Same Code Add Next Button Or Back Button Fuction ***

// =================================
// =================================

song_title.forEach(ele =>{
    let {songName} = ele;
    title.innerHTML = songName;
    // add 
    download_music.setAttribute('download', songName)
})

// add
download_music.href = `audio/${index}.mp3`;

// =================================
// =================================


let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click', ()=>{
    let a = shuffle.innerHTML;

    switch (a) {
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'repeat';
            break;
    
       case "repeat": 
       shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = 'random';
            break;
       case "random": 
       shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'next';
            break;
    }
});

music.addEventListener('ended', ()=>{
    let b = shuffle.innerHTML;

    switch (b) {
        case 'repeat':
            repeat_music();
            break;
        case 'next':
            next_music();
            break;
        case 'random':
            random_music();
            break;
    }
})


// Next Set Function Name 

const next_music = () => {

music.addEventListener('ended', ()=>{
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active2');
    if (index == songs.length) {
        index == 0;
    }
    index++;
    music.src = `audio/${index}.mp3`;
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

}
const repeat_music = () => {

music.addEventListener('ended', ()=>{
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active2');
    index;
    music.src = `audio/${index}.mp3`;
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

}
const random_music = () => {

music.addEventListener('ended', ()=>{
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active2');
    if (index == songs.length) {
        index == 0;
    }
    index = Math.floor((Math.random()* songs.length)+1);
    music.src = `audio/${index}.mp3`;
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

}