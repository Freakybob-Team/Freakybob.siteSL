const songs = [
    "https://ia600902.us.archive.org/6/items/tvtunes_8269/Burl%20Ives%20-%20A%20Holly%20Jolly%20Christmas.mp3",
    "https://ia800304.us.archive.org/7/items/300-christmas-songs_202305/Sleigh%20Ride%20-%20ANDRE%20RIEU.mp3",
    "https://ia800304.us.archive.org/7/items/300-christmas-songs_202305/Happy%20Xmas%20%28War%20Is%20Over%29%20-%20JOHN%20LENNON.mp3",
    "https://ia800304.us.archive.org/7/items/300-christmas-songs_202305/Rockin%27%20Around%20The%20Christmas%20Tree%20-%20BRENDA%20LEE.mp3",
    "https://ia600304.us.archive.org/7/items/300-christmas-songs_202305/Run%20Rudolph%20Run%20-%20CHUCK%20BERRY.mp3",
    "https://ia800304.us.archive.org/7/items/300-christmas-songs_202305/White%20Christmas%20-%20BING%20CROSBY.mp3",
    "https://ia800304.us.archive.org/7/items/300-christmas-songs_202305/Santa%20Baby%20-%20EARTHA%20KITT.mp3",
    "https://ia804602.us.archive.org/4/items/wham-last-christmas-extended-version-of-original-45-mix-m-128s-re-creation/Wham%21%20-%20Last%20Christmas%20%28Extended%20Version%20of%20Original%2045%20Mix%29%20%5BM128%27s%20Re-creation%5D.mp3",
    "https://ia600304.us.archive.org/7/items/300-christmas-songs_202305/Jingle%20Bell%20Rock%20-%20HALL%20%26%20OATES.mp3",
    "https://ia800304.us.archive.org/7/items/300-christmas-songs_202305/Santa%20Claus%20is%20Coming%20to%20Town%20-%20BRUCE%20SPRINGSTEEN.mp3",
    "https://ia800304.us.archive.org/7/items/300-christmas-songs_202305/Here%20Comes%20Santa%20Claus%20-%20DORIS%20DAY.mp3",
    "https://ia800304.us.archive.org/7/items/300-christmas-songs_202305/Have%20Yourself%20a%20Merry%20Little%20Christmas%20-%20DAVID%20ARCHULETA%20%26%20CHARICE.mp3",
    "https://github.com/Freakybob-Team/Freakybob.site/raw/refs/heads/main/audio/i-dont-gyatt-a-lot-for-chrizzmas-MARIAH-CAREY-ALL-I-GOT-FOR-CHRISTMAS-IS-YOU-PARODY.mp3",
    "https://ia903101.us.archive.org/0/items/mariahcareyalliwantforchristmasisyou_201912/Mariah%20Carey%20-%20All%20I%20Want%20For%20Christmas%20Is%20You.mp3",
    // There you go. There's the 10 songs :sob: Not all are here yet tho
    "https://ia601208.us.archive.org/20/items/ChristmasSongsFelizNavidad1/Christmas%20Songs%20-%20Feliz%20Navidad%281%29.mp3",
    "https://ia600706.us.archive.org/5/items/ChristmasSong2018/Andy%20Williams%20-%20It%27s%20The%20Most%20Wonderful%20Time%20Of%20The%20Year.mp3",
    "https://ia800706.us.archive.org/5/items/ChristmasSong2018/Michael%20Buble%20-%20It%27s%20Beginning%20To%20Look%20A%20Lot%20Like%20Christmas.mp3",
    "https://ia801609.us.archive.org/22/items/FrostyTheSnowman_694/GeneAutrychristmas-FrostyTheSnowman.mp3"
];
const songTitles = [
    "A Holly Jolly Christmas - Burl Ives",
    "Sleigh Ride - Andre Rieu",
    "Happy Xmas (War Is Over) - John Lennon",
    "Rockin' round The Christmas.. - Brenda Lee",
    "Run Rudolph Run - Chuck Berry",
    "White Christmas - Bing Crosby",
    "Santa Baby - Eartha Kitt",
    "Last Christmas - Wham!",
    "Jingle Bell Rock - Hall & Oates",
    "Santa is Coming to Town - Bruce Springsteen",
    "Here Comes Santa Claus - Doris Day",
    "Little Christmas - David A. & Charice",
    "I Don't Gyatt a Lot for Chrizzmas - Mariah Carey",
    "All I want for christmas is you - Mariah Carey",
    "Feliz Navidad - José Feliciano",
    "It's The Most Wonderful Time Of The Year - Andy Williams",
    "It's Beginning To Look A Lot Like Christmas - Michael Buble",
     "Frosty The Snowman - Gene Autry",
    
    
];
let currentSongIndex = 0;
const audio = new Audio(songs[currentSongIndex]);
audio.loop = true;


document.getElementById("current-song").textContent = `Playing: ${songTitles[currentSongIndex]}`;

document.getElementById("play-pause-button").onclick = () => {
    if (audio.paused) {
        audio.play();
        document.getElementById("play-pause-button").textContent = "II";
    } else {
        audio.pause();
        document.getElementById("play-pause-button").textContent = "▷II";
    }
};

document.getElementById("next-button").onclick = () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    audio.src = songs[currentSongIndex];
    audio.play();
    document.getElementById("current-song").textContent = `Playing: ${songTitles[currentSongIndex]}`;
    document.getElementById("play-pause-button").textContent = "II";
};

document.getElementById("prev-button").onclick = () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    audio.src = songs[currentSongIndex];
    audio.play();
    document.getElementById("current-song").textContent = `Playing: ${songTitles[currentSongIndex]}`;
    document.getElementById("play-pause-button").textContent = "▷II";
};
