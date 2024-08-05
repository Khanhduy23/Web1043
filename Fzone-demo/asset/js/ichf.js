document.addEventListener('DOMContentLoaded', function() {
    //fetch('header.html'): Gửi một yêu cầu HTTP để tải nội dung từ tệp header.html.
    fetch('header.html')
        // fetch('header.html'): Gửi một yêu cầu HTTP để tải nội dung từ tệp header.html.
        .then(response => response.text())
        //Chèn nội dung văn bản nhận được vào phần tử <header> của trang.
        .then(data => document.querySelector('header').innerHTML = data);

    fetch('footer.html')
        .then(response => response.text())
        .then(data => document.querySelector('footer').innerHTML = data);
});
