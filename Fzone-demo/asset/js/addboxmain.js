const boxMain = [
    // Đây là một mảng chứa các đối tượng sản phẩm để lưu trữ thông tin của 1 box sản phẩm 
    // Box 4 ảnh
    { id: 1, title: 'Phụ Kiện Chơi Game', img1: 'tainghe.jpg', img2: 'banphim.jpg', img3: 'chuot.jpg', img4: 'ghe.jpg', name: 'Tai nghe', name2: 'Bàn phím', name3: 'Chuột', name4: 'Ghế', order: 1, link1: 'sanphamtainghe.html' },
    { id: 2, title: 'Tăng Cấp Trò Chơi Của Bạn', img1: 'choigametrenPC.jpg', img2: 'xbox.jpg', img3: 'playstation.jpg', img4: 'nintendo.jpg', name: 'Chơi game trên PC', name2: 'Xbox', name3: 'PlayStation', name4: 'Nintendo Switch', order: 2 },
    { id: 5, title: 'Làm Đẹp Không Gian Của Bạn', img1: 'dungcuanuong.jpg', img2: 'vatlieutrangtrinha.jpg', img3: 'phongbep.jpg', img4: 'suckhoevasacdep.jpg', name: 'Dụng cụ ăn uống', name2: 'Trang trí nhà', name3: 'Phòng bếp', name4: 'Mỹ phẩm', order: 5 },
    { id: 6, title: 'Nâng Cấp Thói Quen Làm Đẹp', img1: 'trangdiem.jpg', img2: 'buttrangdiem.jpg', img3: 'botbien.jpg', img4: 'botbienguong.jpg', name: 'Trang điểm', name2: 'Bút trang điểm', name3: 'Bọt biển', name4: 'Bọt biển gương', order: 6 },
    { id: 9, title: 'Hàng Hóa Trò Chơi', img1: 'trangphuc.jpg', img2: 'non.jpg', img3: 'nhanvat.jpg', img4: 'coc.jpg', name: 'Trang phục', name2: 'Nón', name3: 'Nhân vật hành động', name4: 'Cốc', order: 9 },
    { id: 10, title: 'Ưu Đãi Qùa Tặng Cho Bố', img1: 'congnghe.jpg', img2: 'thietbiphieuluu.jpg', img3: 'banco.jpg', img4: 'dungcutapta.jpg', name: 'Công nghệ', name2: 'Thiết bị phiên lưu', name3: 'Bàn cờ', name4: 'Dụng cụ tập tạ', order: 10 },
    { id: 13, title: 'Trang Trí Nhà', img1: 'nhabep.jpg', img2: 'tranhtreo.jpg', img3: 'dungcuanuong1.jpg', img4: 'thongminh.jpg', name: 'Nhà bếp', name2: 'Tranh treo tường', name3: 'Dụng cụ', name4: 'Thiết bị thông minh', order: 13 },
    { id: 14, title: 'Phong Cách Thời Trang', img1: 'tainghe.jpg', img2: 'banphim.jpg', img3: 'chuot.jpg', img4: 'ghe.jpg', name: 'Nữ', name2: 'Nam', name3: 'Tuổi tin', name4: 'Trẻ em', order: 14 },
    { id: 15, title: 'Trò Chơi Cho Bé', img1: 'cautuot.jpg', img2: 'phao.jpg', img3: 'nhanvatdochoi.jpg', img4: 'banhangdochoi.jpg', name: 'Cầu tuột', name2: 'Phao', name3: 'Nhân vật đồ chơi', name4: 'Bán hàng đồ chơi', order: 15 },
    { id: 16, title: 'Điểm số PC & Phụ kiện hàng đầu', img1: 'thungcpu.jpg', img2: 'laptop.jpg', img3: 'ocung.jpg', img4: 'phukienPC.jpg', name: 'Thùng CPU', name2: 'Laptop', name3: 'Ổ cứng', name4: 'Phụ kiện PC', order: 16 },
    { id: 20, title: 'Ưu Đãi Qùa Tặng Cho Bố', img1: 'congnghe.jpg', img2: 'thietbiphieuluu.jpg', img3: 'banco.jpg', img4: 'dungcutapta.jpg', name: 'Công nghệ', name2: 'Thiết bị phiên lưu', name3: 'Bàn cờ', name4: 'Dụng cụ tập tạ', order: 20 },
    { id: 21, title: 'Làm Đẹp Không Gian Của Bạn', img1: 'dungcuanuong.jpg', img2: 'vatlieutrangtrinha.jpg', img3: 'phongbep.jpg', img4: 'suckhoevasacdep.jpg', name: 'Dụng cụ ăn uống', name2: 'Trang trí nhà', name3: 'Phòng bếp', name4: 'Mỹ phẩm', order: 21 },
    { id: 24, title: 'Tăng Cấp Trò Chơi Của Bạn', img1: 'choigametrenPC.jpg', img2: 'xbox.jpg', img3: 'playstation.jpg', img4: 'nintendo.jpg', name: 'Chơi game trên PC', name2: 'Xbox', name3: 'PlayStation', name4: 'Nintendo Switch', order: 24 },
    { id: 25, title: 'Làm Đẹp Không Gian Của Bạn', img1: 'dungcuanuong.jpg', img2: 'vatlieutrangtrinha.jpg', img3: 'phongbep.jpg', img4: 'suckhoevasacdep.jpg', name: 'Dụng cụ ăn uống', name2: 'Trang trí nhà', name3: 'Phòng bếp', name4: 'Mỹ phẩm', order: 25 },
    { id: 28, title: 'Nâng Cấp Thói Quen Làm Đẹp', img1: 'trangdiem.jpg', img2: 'buttrangdiem.jpg', img3: 'botbien.jpg', img4: 'botbienguong.jpg', name: 'Trang điểm', name2: 'Bút trang điểm', name3: 'Bọt biển', name4: 'Bọt biển gương', order: 28 },
    { id: 29, title: 'Hàng Hóa Trò Chơi', img1: 'trangphuc.jpg', img2: 'non.jpg', img3: 'nhanvat.jpg', img4: 'coc.jpg', name: 'Trang phục', name2: 'Nón', name3: 'Nhân vật hành động', name4: 'Cốc', order: 29 },

    // Box 1 ảnh
    { id: 3, title: 'Ưu Đãi PC', img: 'PC.jpg', name5: 'Thùng PC', order: 3 },
    { id: 4, title: 'Tạo Ra Giải Pháp Kinh Doanh', img: 'taoragiaiphapkinhdoanh.jpg', name5: 'Laptops', order: 4 },
    { id: 7, title: 'Đồ Dưới 500k', img: 'doduoi500l.jpg', name5: 'Các loại quà tặng', order: 7 },
    { id: 8, title: 'Qùa Tặng Hấp Dẫn', img: 'quatanghapdan.jpg', name5: 'Qùa xịn không đó', order: 8 },
    { id: 11, title: 'Thiên Đường Trò Chơi', img: 'thienduong.jpg', name5: 'Các lại mấy chơi game', order: 11 },
    { id: 12, title: 'Laptop Cho Mọi Nhu Cầu', img: 'laptopchomoinhucau.jpg', name5: 'Laptop xịn không đó', order: 12 },
    { id: 16, title: 'Ưu Đãi Về Giày', img: 'uudaivegiay.jpg', name5: 'Giày tốt', order: 16 },
    { id: 17, title: 'Đồng Hồ Thông Minh', img: 'donghothongminh.jpg', name5: 'Đồng hồ đeo tay', order: 17 },
    { id: 18, title: 'Nâng Cấp Nội Thất Văn Phòng', img: 'ghevanphong.jpg', name5: 'Ghế văn phòng', order: 18 },
    { id: 19, title: 'Chăm sóc cá nhân dưới 100k', img: 'banchaidanhrang.jpg', name5: 'Bàn chải', order: 19 },
    { id: 22, title: 'Laptop Cho Mọi Nhu Cầu', img: 'laptopchomoinhucau.jpg', name5: 'Laptop xịn không đó', order: 22 },
    { id: 23, title: 'Trò Chơi Cho Bé', img1: 'cautuot.jpg', img2: 'phao.jpg', img3: 'nhanvatdochoi.jpg', img4: 'banhangdochoi.jpg', name: 'Cầu tuột', name2: 'Phao', name3: 'Nhân vật đồ chơi', name4: 'Bán hàng đồ chơi', order: 23 },
    { id: 26, title: 'Ưu Đãi PC', img: 'PC.jpg', name5: 'Thùng PC', order: 26 },
    { id: 27, title: 'Tạo Ra Giải Pháp Kinh Doanh', img: 'taoragiaiphapkinhdoanh.jpg', name5: 'Laptops', order: 27 },
    { id: 30, title: 'Laptop Cho Mọi Nhu Cầu', img: 'laptopchomoinhucau.jpg', name5: 'Laptop xịn không đó', order: 30 },
    { id: 31, title: 'Ưu Đãi Về Giày', img: 'uudaivegiay.jpg', name5: 'Giày tốt', order: 31 },
];

// Hàm xử lý tạo html cho các sản phẩm và chèn chúng vào html
function loadProducts() {
    let productHtml = '';
    // Sắp xếp các sản phẩm dựa trên thuộc tính `order`
    boxMain.sort((a, b) => a.order - b.order);
    boxMain.forEach(product => {
        if (product.img1) {
            // Xử lý box có 4 ảnh
            productHtml += `
                <div class="box-product">
                    <div class="topic">
                        <h3>${product.title}</h3>
                    </div>
                    <div class="box-product-inline">
                        ${generateImageBox(product.img1, product.name, product.link1)}
                        ${generateImageBox(product.img2, product.name2)}
                        ${generateImageBox(product.img3, product.name3)}
                        ${generateImageBox(product.img4, product.name4)}
                    </div>
                </div>
            `;
        } else if(product.img){
            // Xử lý box có 1 ảnh
            productHtml += `
                <div class="box-product">
                    <div class="topic">
                        <h3>${product.title}</h3>
                    </div>
                    <div class="box-product-inline">
                         <div class="box-product-large">
                            <a href="#"><img src="asset/img/${product.img}" alt="${product.title}"></a>
                            <p>${product.name5}</p>
                        </div>
                    </div>
                </div>
            `;
        }
    });

    document.getElementById('box-main').innerHTML = productHtml;
}

// Hàm giúp tạo HTML cho box ảnh
function generateImageBox(imgSrc, imgAlt, link = '#') {
    return `
        <div class="box-product-small">
            <a href="${link}"><img src="asset/img/${imgSrc}" alt="${imgAlt}"></a>
            <p>${imgAlt}</p>
        </div>
    `;
}
// Gọi hàm để load sản phẩm khi trang được tải
// Điều này đảm bảo rằng các sản phẩm sẽ được hiển thị ngay sau khi trang được tải và sẵn sàng cho người dùng.
document.addEventListener('DOMContentLoaded', loadProducts);
