// Đảm bảo mã JavaScript chỉ chạy khi tài liệu HTML đã được tải và phân tích xong.
document.addEventListener('DOMContentLoaded', () => {
    //Lấy Các Phần Tử DOM
    const boxContainer = document.getElementById('box-container');
    const redBox = document.getElementById('red-box');
    const message = document.getElementById('message');
    
    let startTime;
    let endTime;

    function getRandomPosition() {
        // The clientWidth property is read-only.
        //Lấy chiều rộng và chiều cao của vùng chứa
        const containerWidth = boxContainer.clientWidth;
        const containerHeight = boxContainer.clientHeight;
        //Lấy chiều rộng và chiều cao của hộp đỏ 
        const boxWidth = redBox.clientWidth;
        const boxHeight = redBox.clientHeight;
        // TẠO SỐ NGẪU NHIÊN TỪ 0 - (containerW/H - box read) mục đích hộp đỏ sẽ luôn nằm trong vùng chứa
        const x = Math.floor(Math.random() * (containerWidth - boxWidth));
        const y = Math.floor(Math.random() * (containerHeight - boxHeight));
        
        return { x, y };
    }

    function showRedBox() {
        const { x, y } = getRandomPosition();
        redBox.style.left = `${x}px`;
        redBox.style.top = `${y}px`;
        redBox.style.display = 'block';
        startTime = Date.now(); //Ghi lại thời điểm hiện tại khi hộp đỏ xuất hiện
    }

    function hideRedBox() {
        redBox.style.display = 'none';
    }

    redBox.addEventListener('click', () => {
        endTime = Date.now(); //ghi lại thời gian hộp đỏ được click
        const duration = (endTime - startTime) / 1000; 
        message.textContent = `Bạn chọn trong ${duration.toFixed(2)} seconds!`;
        hideRedBox();
        //Tạo ra khoảng thời gian ngẫu nhiên từ 1 đến 3 giây sẽ xuất hiện hộp đỏ sao khi người dùng click hộp đỏ trước đó 
        setTimeout(showRedBox, Math.random() * 2000 + 1000); //
    });
    //Thời gian ngắt quãng của hộp đỏ
    setTimeout(showRedBox, 1000); // Show red box after 1 second
});
