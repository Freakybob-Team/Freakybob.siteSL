const ks = new Audio('https://ia600902.us.archive.org/6/items/tvtunes_8269/Burl%20Ives%20-%20A%20Holly%20Jolly%20Christmas.mp3');
ks.loop = true; 
let userinteraction = 0;

document.addEventListener('click', () => {
    if (userinteraction) return;
    userinteraction++;
    ks.play();
});
