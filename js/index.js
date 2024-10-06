const popup = document.getElementById('sound-popup');
const thanksButton = document.getElementById('thanks-button');
const thanksSound = document.getElementById('thanks-sound');
const backgroundMusic = document.getElementById('background-music');
const muteButton = document.getElementById('mute-button');
const blueskyButton = document.getElementById('bluesky-button');
const languageSelector = document.getElementById('language-selector');

thanksButton.addEventListener('click', () => {
    thanksSound.play();
    popup.classList.add('fade-out');
    setTimeout(() => {
        popup.style.display = 'none'; 
        blueskyButton.style.display = 'block';
        muteButton.style.display = 'block';
        backgroundMusic.play();
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
document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        en: {
            
            mainTitle: 'Freakybob',
            popupText: 'Welcome to freakybob.site! Hope you enjoy the website just as much as we do!',
            teamButton: 'See the team behind freakybob.site!',
            musicButton: 'Listen to Spongebob music!',
            activitiesButton: 'Social, Image Gallery and more!',
            popupText: 'Welcome to freakybob.site! Hope you enjoy the website just as much as we do!',
            thanksButton: 'Thanks!',
            gplLicenseText: 'No Rights Reserved. All pages are licensed under GPL-3.',
        },
es: {
    mainTitle: 'Freakybob',
    
    popupText: '¡Bienvenido a freakybob.site! ¡Esperamos que disfrutes el sitio web tanto como nosotros!',
    infoButton: '¡Visita la página de información!',
    teamButton: '¡Conoce al equipo detrás de freakybob.site!',
    galleryButton: '¡Mira la galería de imágenes!',
    musicButton: '¡Escucha música de Spongebob!',
    activitiesButton: '¡Actividades Sociales, Galeria de imágenes y más!',
    popupText: '¡Bienvenido a freakybob.site! ¡Esperamos que disfrutes el sitio web tanto como nosotros!',
    thanksButton: '¡Gracias!',
    gplLicenseText: 'Sin derechos reservados. Todas las páginas están licenciadas bajo GPL-3.',
},
fr : {
    mainTitle: 'Freakybob',
   
    popupText: 'Bienvenue sur freakybob.site! Nous sommes impatients de vous offrir le site Internet comme nous le faisons!',
    infoButton: 'Regardez la page d\'information!',
    teamButton: 'Venez voir le team derrière freakybob.site!',
    galleryButton: 'Regardez la galerie d\'images!',
    musicButton: 'Ecoutez la musique depongebob!',
    activitiesButton: 'Plus d\'activité!',
    popupText: 'Bienvenue sur freakybob.site! Nous sommes impatients de vous offrir le site Internet comme nous le faisons!',
    thanksButton: 'Merci!',
    gplLicenseText: 'Aucun droit réservé. Toutes les pages sont sous licence GPL-3.',
},
de: {
    mainTitle: 'Freakybob',
  
    popupText: 'Willkommen auf freakybob.site! Wir hoffen, dass dir die Website genauso gefällt wie uns!',
    infoButton: 'Schau dir die Infoseite an!',
    teamButton: 'Sieh dir das Team hinter freakybob.site an!',
    galleryButton: 'Schau dir die Bildergalerie an!',
    musicButton: 'Höre Spongebob-Musik!',
    activitiesButton: 'Mehr Aktivität!',
    popupText: 'Willkommen auf freakybob.site! Wir hoffen, dass dir die Website genauso gefäch wie uns!',
    thanksButton: 'Danke!',
    gplLicenseText: 'Keine Rechte vorbehalten. Alle Seiten sind unter GPL-3 lizenziert.',
}
,jp : {
    mainTitle: 'Freakybob',
  
    popupText: 'Freakybob.siteへようこそ! このウェブサイトを楽しんでいただきありがとうございます!',
    infoButton: 'Freakyblogのページを確認してください',
    teamButton: 'Freakybobのページに行ってみてください',
    galleryButton: 'Freakybobのページに行ってみてください',
    musicButton: 'Freakybobのページに行ってみてください',
    activitiesButton: 'Freakybobのページに行ってみてください',
    popupText: 'Freakybob.siteへようこそ! このウェブサイトを楽しんでいただきありがとうございます!',
    thanksButton: 'ありがとうございます!',
    gplLicenseText: '無断転載禁止。すべてのページは GPL-3 ライセンスです。',
}
,ko : {
    mainTitle: 'Freakybob',
    
    popupText: '프레이티브박스가 freakybob.site에 접근하고 어떤을!',
    infoButton: '프레이티브박스를 확인해 보세요!',
    teamButton: '프레이티브박스를 확인해 보세요!',
    galleryButton: '프레이티브박스를 확인해 보세요!',
    musicButton: '프레이티브박스를 확인해 보세요!',
    activitiesButton: '프레이티브박스를 확인해 보세요!',
    popupText: '프레이티브박스가 freakybob.site에 접근하고 어떤을!',
    thanksButton: '프레이티브박스를 확인해 보세요!',
    gplLicenseText: '권리 없음. 모든 페이지는 GPL-3에 따라 라이센스됩니다.',
}
,pt : {
    mainTitle: 'Freakybob',
   
    popupText: 'Bem-vindo ao freakybob.site! Esperamos que goste do site como eu fizemos!',
    infoButton: 'Veja a página de informação!',
    teamButton: 'Veja o time de traço do freakybob.site!',
    galleryButton: 'Veja a galleria de imagens!',
    musicButton: 'Escute a música de.spongebob!',
    activitiesButton: 'Mais Atividades Sociais, Galeria de Imagens e mais!',
    popupText: 'Bem-vindo ao freakybob.site! Esperamos que goste do site como eu fizemos!',
    thanksButton: 'Obrigado!',
    gplLicenseText: 'Nenhum direito reservado. Todas as páginas estão licenciadas sob GPL-3.',
}
,pl : {
    mainTitle: 'Freakybob',
   
    popupText: 'Witaj na freakybob.site! Zapewniamy, że zobaczyłes strone jak ja zrobiłes!',
    infoButton: 'Sprawdź stronę informacyjną!',
    teamButton: 'Sprawdź drapień przeciw freakybob.site!',
    galleryButton: 'Sprawdź galerię obrazów!',
    musicButton: 'Ogarnij muzyczę spongebob!',
    activitiesButton: 'Miejsce aktywności, galeria obrazów i inne!',
    thanksButton: 'Dziekuje!',
    gplLicenseText: 'Brak Zastrzeżonych Praw. Wszystkie strony są licencjonowane na zasadach GPL-3.',
}
,tr : {
    mainTitle: 'Freakybob',
   
    popupText: 'Freakybob.site\'e hos geldiniz! Burada site size hızlıca çıkaracaktır!',
    infoButton: 'Freakyblog sayfasını deneyin!',
    teamButton: 'Freakybob sayfasını deneyin!',
    galleryButton: 'Freakybob sayfasını deneyin!',
    musicButton: 'Freakybob sayfasını deneyin!',
    activitiesButton: 'Freakybob sayfasını deneyin!',
    popupText: 'Freakybob.site\'e hos geldiniz! Burada site size hızlıca çıkaracaktır!',
    thanksButton: 'Tesekkürler!',
    gplLicenseText: 'Hiçbir Hakkı Saklı Değildir. Tüm sayfalar GPL-3 lisansı altındadır.',
}
,th : {
    mainTitle: 'Freakybob',
   
    popupText: 'ยินดีต้อนรับสู่ freakybob.site! ระบบของคุณจะใช้งานตอนนี้แล้ว!',
    infoButton: 'ดูหน้าต่างข้อมูล!',
    teamButton: 'ดูทีมของคุณที่หลังจาก freakybob.site!',
    galleryButton: 'ดูภาพกิจกรรม!',
    musicButton: 'ดูเพลง spongebob!',
    activitiesButton: 'ดูกิจกรรมสวัสดิการ, ภาพกิจกรรมและอื่นๆ!',
    popupText: 'ยินดีต้อนรับสู่ freakybob.site! ระบบของคุณจะใช้งานตอนนี้แล้ว!',
    thanksButton: 'ขอบคุณ!',
    gplLicenseText: 'ไม่สงวนลิขสิทธิ์ ทุกหน้าได้รับอนุญาตภายใต้ GPL-3',
}
,vi : {
    mainTitle: 'Freakybob',
   
    popupText: 'Chào mừng đến freakybob.site! Chúng tôi mong muốn được ủng hộ trang web này!',
    infoButton: 'Xem trang thông tin!',
    teamButton: 'Xem đội ngũ trước freakybob.site!',
    galleryButton: 'Xem hình ảnh!',
    musicButton: 'Nghe nhạc spongebob!',
    activitiesButton: 'Xem hoạt động, hình ảnh và nhiều hoạt động khác!',
    popupText: 'Chào mừng đến freakybob.site! Chúng tôi mong muốn được ủng hộ trang web này!',
    thanksButton: 'Cảm ơn!',
    gplLicenseText: 'Không có quyền được bảo lưu. Tất cả các trang được cấp phép theo GPL-3.',
}
,uk : {
    mainTitle: 'Freakybob',
   
    popupText: 'Добро пожаловать на freakybob.site! Мы рады, что вам понравилось сайт как мы это делали!',
    infoButton: 'Перегляньте сторінку інформації!',
    teamButton: 'Перегляньте команду против freakybob.site!',
    galleryButton: 'Перегляньте галерею зображень!',
    musicButton: 'Слухай музику spongebob!',
    activitiesButton: 'Більше активності, галерея зображень та інші активності!',
    popupText: 'Добро пожаловать на freakybob.site! Мы рады, что вам понравилось сайт как мы это делали!',
    thanksButton: 'Дякую!',
    gplLicenseText: 'Права не захищені. Усі сторінки мають ліцензію GPL-3.',
}
,zh : {
    mainTitle: 'Freakybob',
   
    popupText: '欢迎来到 freakybob.site! 我们很高兴为您服务!',
    infoButton: '看看信息页面!',
    teamButton: '看看我们的队伍后面的 freakybob.site!',
    galleryButton: '看看照片活动!',
    musicButton: '听听.spongebob 音乐!',
    activitiesButton: '更多活动, 照片和其他活动!',
    popupText: '欢迎来到 freakybob.site! 我们很高兴为您服务!',
    thanksButton: '谢谢!',
    gplLicenseText: '未保留任何权利。所有页面均根据 GPL-3 授权。',
}
,ru : {
    mainTitle: 'Freakybob',
   
    popupText: 'Добро пожаловать на freakybob.site! Мы рады, что вам понравилось сайт как мы это делали!',
    infoButton: 'Посмотрите страницу информации!',
    teamButton: 'Посмотрите команду против freakybob.site!',
    galleryButton: 'Посмотрите галерею изображений!',
    musicButton: 'Слушай музыку.spongebob!',
    activitiesButton: 'Больше активностей, галерей изображений и другие активности!',
    popupText: 'Добро пожаловать на freakybob.site! Мы рады, что вам понравилось сайт как мы это делали!',
    thanksButton: 'Спасибо!',
    gplLicenseText: 'Права не защищены. Все страницы лицензированы по GPL-3.',
}
,it : {
    mainTitle: 'Freakybob',
    
    popupText: 'Benvenuto su freakybob.site! Abbiamo apprezzato il sito come lo facciamo!',
    infoButton: 'Clicca sul sito di informazione!',
    teamButton: 'Clicca sul team di freakybob.site!',
    galleryButton: 'Clicca sul galleria di immagini!',
    musicButton: 'Ascolta la canzone di spongebob!',
    activitiesButton: 'Altre attività, galleria di immagini e altro!',
    popupText: 'Benvenuto su freakybob.site! Abbiamo apprezzato il sito come lo facciamo!',
    thanksButton: 'Grazie!',
    gplLicenseText: 'Nessun diritto riservato. Tutte le pagine sono concesse in licenza GPL-3.',
}
,lc : {
mainTitle: 'Feakybob',
    
    popupText: 'Welcome to freakybob.site! Hope you enjoy the website just as much as we do!',
    infoButton: 'CHECK OUT TEH INFO PAEG!',
    teamButton: 'See the team behind freakybob.site!',
    galleryButton: 'Check out the image gallery!',
    musicButton: 'Listen to Spongebob music!',
    activitiesButton: 'Social, Image Gallery and more!',
    popupText: 'Welcome to freakybob.site! Hope you enjoy the website just as much as we do!',
    thanksButton: 'kthxbai',
    gplLicenseText: 'No Rights Reserved. All pages are licensed under GPL-3.'
}
,gr : {
    mainTitle: 'Gregreg',
    popupText: 'Greg greg greg to gregreg! Greg you gregy the gregsite grst as greg greg as we do!',
    teamButton: 'The gregs of gregybob.site',
    
    musicButton: 'Check out the Music gregs!',
    activitiesButton: 'Greg Socials, Greg Gallery and more!',
    popupText: 'Welcome to gregybob.site! We hope you greg and enjoy greg as much as we do :WHAT~1:',
    thanksButton: 'greg!',
    gplLicenseText: 'No Rights Reserved. All pages are licensed under GPL-3.'
}
};
    const languageSelector = document.getElementById('language-selector');

    function updateLanguage(lang) {
document.getElementById('main-title').textContent = translations[lang].mainTitle;
document.getElementById('info-button').textContent = translations[lang].infoButton;
document.getElementById('team-button').textContent = translations[lang].teamButton;
document.getElementById('gallery-button').textContent = translations[lang].galleryButton;
document.getElementById('music-button').textContent = translations[lang].musicButton;
document.getElementById('activities-button').textContent = translations[lang].activitiesButton;
document.getElementById('marquee-text').textContent = translations[lang].marqueeText;
document.getElementById('popup-text').textContent = translations[lang].popupText;
document.getElementById('thanks-button').textContent = translations[lang].thanksButton;
document.getElementById('gpl-3').textContent = translations[lang].gplLicenseText;
    }

    function setLanguage(lang) {
if (translations.hasOwnProperty(lang)) {
    languageSelector.value = lang;
    updateLanguage(lang);
}
    }

    languageSelector.addEventListener('change', (event) => {
        const selectedLanguage = event.target.value;
        updateLanguage(selectedLanguage);
    });

    updateLanguage('en');
});
document.addEventListener("DOMContentLoaded", function() {
    var myAudio = document.getElementById('background-music');

if (myAudio.duration > 0 && !myAudio.paused) {

element = document.getElementById('sound-popup')
element.delete();

} else {

//Not playing...maybe paused, stopped or never played.

}})
