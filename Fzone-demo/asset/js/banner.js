document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.banner-images img');
    const bannerImages = document.querySelector('.banner-images');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    let currentIndex = 0;
    const totalImages = images.length;

    function showImage(index) {
        bannerImages.style.transform = `translateX(${-index * 100}%)`;
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showImage(currentIndex);
    }

    // Auto change image every 2 seconds
    setInterval(nextImage, 4000);

    // Add event listeners for arrows
    leftArrow.addEventListener('click', prevImage);
    rightArrow.addEventListener('click', nextImage);
});
