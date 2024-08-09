document.addEventListener('DOMContentLoaded', () => {
    // Thay đổi giá sản phẩm và thông báo khi hết thời gian flash sale
    function kiemTraFlashSale() {
        const thoiGianKetThucKhuyenMai = new Date('2024-08-10T00:00:00'); // Thay đổi thời gian kết thúc flash sale
        const thoiGianHienTai = new Date();
        const phanTrangThaiKhuyenMai = document.getElementById('sale-status');
        const giaGocElement = document.querySelector('.original-price');
        const giaKhuyenMaiElement = document.querySelector('.discounted-price');

        if (thoiGianHienTai > thoiGianKetThucKhuyenMai) {
            // Nếu hết thời gian flash sale
            phanTrangThaiKhuyenMai.textContent = 'Khuyến mãi đã kết thúc!';
            giaKhuyenMaiElement.textContent = giaGocElement.textContent;
            giaKhuyenMaiElement.style.textDecoration = 'line-through'; // Gạch ngang giá cũ
            giaGocElement.style.color = 'red'; // Đổi màu giá gốc
        } else {
            // Nếu còn thời gian khuyến mãi
            const thoiGianConLai = thoiGianKetThucKhuyenMai - thoiGianHienTai;
            const ngay = Math.floor(thoiGianConLai / (1000 * 60 * 60 * 24));
            const gio = Math.floor((thoiGianConLai % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const phut = Math.floor((thoiGianConLai % (1000 * 60 * 60)) / (1000 * 60));
            const giay = Math.floor((thoiGianConLai % (1000 * 60)) / 1000);

            phanTrangThaiKhuyenMai.textContent = `Khuyến mãi còn lại: ${ngay} ngày ${gio} giờ ${phut} phút ${giay} giây`;
        }
    }

    // Kiểm tra flash sale khi tải trang
    kiemTraFlashSale();

    // Cập nhật mỗi giây
    setInterval(kiemTraFlashSale, 1000);
});
