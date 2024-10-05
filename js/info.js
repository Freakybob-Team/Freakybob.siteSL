function showInfo(id) {
    var para = document.getElementById('para7');
    para.style.display = para.style.display === 'block' ? 'none' : 'block';
  }
  function showInfo(id) {
    var descriptionDiv = document.getElementById('description');
    var para = document.getElementById('para7');
    
    if (!para) {
      para = document.createElement('p');
      para.id = 'para7';
      para.textContent = 'Listen, you do not know how many times we hear this. The point of the website is just a website refering to the meme Freakybob and just having fun LMAO';
      descriptionDiv.appendChild(para);
    }
    
    para.style.display = para.style.display === 'block' ? 'none' : 'block';
  }
let currentIndex = 0;
const images = document.querySelectorAll('#image-track img');
const totalImages = images.length;
const modal = document.getElementById("image-modal");
const modalImage = document.getElementById("modal-image");
const descriptionDiv = document.getElementById('description');
function updateCarousel() {
    const imageTrack = document.getElementById('image-track');
    const width = images[0].clientWidth;
    imageTrack.style.transform = `translateX(-${currentIndex * width}px)`;
}
function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
}
function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
}
function openModal(src) {
    modalImage.src = src;
    modal.style.display = "flex";
}
function closeModal() {
    modal.style.display = "none";
}

images.forEach(image => {
    image.addEventListener('click', () => openModal(image.src));
});

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

window.addEventListener('keydown', (event) => {
    if (event.key === "Escape") {
        closeModal();
    }
});
window.addEventListener('resize', updateCarousel);
