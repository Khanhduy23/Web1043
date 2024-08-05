document.addEventListener('DOMContentLoaded', function() {
    const smallImages = document.querySelectorAll('.box-product-small a');
    const largeImage = document.getElementById('largeImage');
    
    // Lưu trữ ảnh ban đầu
    const originalSrc = largeImage.src;

    smallImages.forEach(image => {
        image.addEventListener('mouseover', function(e) {
            e.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
            const newSrc = this.getAttribute('data-src');
            largeImage.src = newSrc;
        });

        image.addEventListener('mouseout', function(e) {
            // Khôi phục ảnh ban đầu khi di chuột ra
            largeImage.src = originalSrc;
        });
    });
});
