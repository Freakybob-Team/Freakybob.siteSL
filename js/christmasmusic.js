const songs = [
    "https://ia600902.us.archive.org/6/items/tvtunes_8269/Burl%20Ives%20-%20A%20Holly%20Jolly%20Christmas.mp3",
    "https://ia800304.us.archive.org/7/items/300-christmas-songs_202305/Sleigh%20Ride%20-%20ANDRE%20RIEU.mp3",
    "https://ia800304.us.archive.org/7/items/300-christmas-songs_202305/Happy%20Xmas%20%28War%20Is%20Over%29%20-%20JOHN%20LENNON.mp3",
    "https://ia800304.us.archive.org/7/items/300-christmas-songs_202305/Rockin%27%20Around%20The%20Christmas%20Tree%20-%20BRENDA%20LEE.mp3",
    "https://ia600304.us.archive.org/7/items/300-christmas-songs_202305/Run%20Rudolph%20Run%20-%20CHUCK%20BERRY.mp3",
    "https://ia800304.us.archive.org/7/items/300-christmas-songs_202305/White%20Christmas%20-%20BING%20CROSBY.mp3",
    "https://ia800304.us.archive.org/7/items/300-christmas-songs_202305/Santa%20Baby%20-%20EARTHA%20KITT.mp3"
];
const songTitles = [
    "A Holly Jolly Christmas - Burl Ives",
    "Sleigh Ride - Andre Rieu",
    "Happy Xmas (War Is Over) - John Lennon",
    "Rockin' round The Christmas.. - Brenda Lee",
    "Run Rudolph Run - Chuck Berry",
    "White Christmas - Bing Crosby",
    "Santa Baby - Eartha Kitt"
];

let currentSongIndex = 0;
const audio = new Audio(songs[currentSongIndex]);
audio.loop = true;


document.getElementById("current-song").textContent = `Playing: ${songTitles[currentSongIndex]}`;

document.getElementById("play-pause-button").onclick = () => {
    if (audio.paused) {
        audio.play();
        document.getElementById("play-pause-button").textContent = "⏸️";
    } else {
        audio.pause();
        document.getElementById("play-pause-button").textContent = "⏯️";
    }
};

document.getElementById("next-button").onclick = () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    audio.src = songs[currentSongIndex];
    audio.play();
    document.getElementById("current-song").textContent = `Playing: ${songTitles[currentSongIndex]}`;
    document.getElementById("play-pause-button").textContent = "⏸️";
};

document.getElementById("prev-button").onclick = () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    audio.src = songs[currentSongIndex];
    audio.play();
    document.getElementById("current-song").textContent = `Playing: ${songTitles[currentSongIndex]}`;
    document.getElementById("play-pause-button").textContent = "⏸️";
};
