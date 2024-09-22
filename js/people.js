let giancaClickCount = 0;
let isGiancaReplaced = false;
let kmClickCount = 0;
let isKMReplaced = false;
let lapisClickCount = 0;
let isLapisReplaced = false;
let nintendofan64ClickCount = 0;
let isNintendofan64Replaced = false;

function showInfo(name) {
    const descriptions = {
        'Saam': 'Saam is cool yay!',
        'KM': 'Is now officially cool! (herbert simp)',
        'Noah': 'Noah is awesome frfr',
        'Gianca': 'Fortnite Playing Twi-I mean, Really good at Fortnite!',
        'George': 'The Coolest Crackhead On Earth!',
        'Nintendofan64': 'He thinks hes a fucking mii for some reason. Wii think hes just insane.',
        'Lapis': 'Is a really nice and cool person! (KiKi Simp)',
    };

    const images = {
        'Saam': 'images/pfps/Saam.webp',
        'KM': isKMReplaced ? 'images/pfps/KM.png' : 'images/pfps/KM.webp',
        'Noah': 'images/pfps/Noah.webp',
        'Gianca': isGiancaReplaced ? 'images/pfps/giancafort.jpeg' : 'https://github.com/Freakybob-Team/Freakybob.site/blob/main/images/pfps/giancanew.png?raw=true',
        'George': 'images/pfps/George.png',
        'Nintendofan64': 'images/pfps/Nintendofan.png',
        'Lapis': isLapisReplaced ? 'images/pfps/Lapis.webp' : 'images/pfps/lapispfp.jpg',
    };

    const descriptionDiv = document.getElementById('description');
    const personImage = document.getElementById('person-image');
    const image = document.getElementById('personImage');

    descriptionDiv.innerText = descriptions[name] || 'Information not available.';
    image.src = images[name] || '';
    personImage.style.display = (name in images) ? 'block' : 'none';

    if (name === 'Gianca') {
        image.onclick = handleGiancaImageClick; 
    } else if (name === 'KM') {
        image.onclick = handleKMImageClick;
    } else if (name === 'Nintendofan64') {
        image.onclick = handleNintendofan64ImageClick;
    }
}

function handleGiancaImageClick() {
    if (isGiancaReplaced) return;

    giancaClickCount++;
    if (giancaClickCount >= 10) {
        const image = document.getElementById('personImage');
        image.src = 'images/pfps/giancafort.jpeg';
        isGiancaReplaced = true;
    }
}

function handleKMImageClick() {
    if (isKMReplaced) return;

    kmClickCount++;
    if (kmClickCount >= 10) {
        const image = document.getElementById('personImage');
        image.src = 'images/pfps/KM.png';
        isKMReplaced = true;
    }
}

function handleNintendofan64ImageClick() {
    if (isNintendofan64Replaced) return; 

    nintendofan64ClickCount++;

    console.log('Nintendofan64 clicked', nintendofan64ClickCount); 

    if (nintendofan64ClickCount >= 10) {
        console.log('Redirecting to URL...');
        window.location.href = "https://5quirre1.github.io/in-the-end/";
        isNintendofan64Replaced = true;
    }
}

    
