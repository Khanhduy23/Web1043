document.addEventListener('DOMContentLoaded', () => {
    // Thay đổi giá sản phẩm và thông báo khi hết thời gian flash sale
    function checkFlashSale() {
        const saleEndTime = new Date('2024-08-10T00:00:00'); // Thay đổi thời gian kết thúc flash sale
        const now = new Date();
        const saleStatusElement = document.getElementById('sale-status');
        const originalPriceElement = document.querySelector('.discounted-price');
        const discountedPriceElement = document.querySelector('.discounted-price');

        if (now > saleEndTime) {
            // Nếu hết thời gian flash sale
            saleStatusElement.textContent = 'Khuyến mãi đã kết thúc!';
            discountedPriceElement.textContent = originalPriceElement.textContent;
            discountedPriceElement.style.textDecoration = 'line-through'; // Gạch ngang giá cũ
            originalPriceElement.style.color = 'grend'; // Đổi màu giá gốc
        } else {
            // Nếu còn thời gian khuyến mãi
            const timeRemaining = saleEndTime - now;
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            saleStatusElement.textContent = `Khuyến mãi còn lại: ${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây`;
        }
    }

    // Kiểm tra flash sale khi tải trang
    checkFlashSale();

    // Cập nhật mỗi giây
    setInterval(checkFlashSale, 1000);
});
