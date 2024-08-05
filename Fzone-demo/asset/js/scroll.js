function scrollToSection() {
    // Lấy đối tượng element có id là "sectionToScrollTo"
    const section = document.getElementById('sectionToScrollTo');

    // Sử dụng phương thức scrollIntoView để cuộn đến vị trí của element đó
    section.scrollIntoView({ behavior: 'smooth' }); //behavior: hành vi ; Smooth: mượt mà
}

// 1. Tìm phần từ html của id là sectionToScrollTo và lưu vào section
// 2. Truyền phần tử tìm thấy vào section sau đó gọi hàm -> thêm đối số vào hàm chỉ định hành vi cuộn lên phầm từ id đã được chọn