const popup = document.getElementById('sound-popup');
const thanksButton = document.getElementById('thanks-button');
const thanksSound = document.getElementById('thanks-sound');
const muteButton = document.getElementById('mute-button');
const githubButton = document.getElementById('github-button');
const discordButton = document.getElementById('discord-button');
const blueskyButton = document.getElementById('bluesky-button');
const pikidiaryButton = document.getElementById('pikidiary-button');
const freakyblog = document.getElementById('freakyblog-logo');

thanksButton.addEventListener('click', () => {
    thanksSound.play();
    popup.classList.add('fade-out');
    setTimeout(() => {
        popup.style.display = 'none'; 
        githubButton.style.display = 'block';
        discordButton.style.display = 'block';
        blueskyButton.style.display = 'block';
        muteButton.style.display = 'block';
        pikidiaryButton.style.display = 'block';
        freakyblog.style.display = 'block';
    }, 2000);
});
function toggleMusic() {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        muteButton.textContent = 'Mute Music';
    } else {
        backgroundMusic.pause();
        muteButton.textContent = 'Unmute Music';
    }
}
muteButton.addEventListener('click', toggleMusic);
window.addEventListener('load', () => {
    setTimeout(() => popup.style.display = 'flex', 500);
});

window.addEventListener('load', () => {
    setTimeout(() => popup.style.display = 'flex', 500);
});
