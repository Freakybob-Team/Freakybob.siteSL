let currentIndex = 0;
const images = document.querySelectorAll('#image-track img');
const totalImages = images.length;
const modal = document.getElementById("image-modal");
const modalImage = document.getElementById("modal-image");
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