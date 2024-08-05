const dssp = [
    { id: 1, name: 'BENGOO G9000', price: '1.490.000₫', img: 'tainghe1.webp' },
    { id: 2, name: 'BENGOO G9000', price: '1.490.000₫', img: 'tainghe2.jpg' },
    { id: 3, name: 'BENGOO G9000', price: '1.490.000₫', img: 'tainghe3.webp' },
    { id: 4, name: 'BENGOO G9000', price: '1.490.000₫', img: 'tainghe4.webp' },
    { id: 5, name: 'BENGOO G9000', price: '1.490.000₫', img: 'tainghe5.webp' },
    { id: 6, name: 'BENGOO G9000', price: '1.490.000₫', img: 'tainghe6.webp' },
    { id: 7, name: 'BENGOO G9000', price: '1.490.000₫', img: 'tainghe7.webp' },
    { id: 8, name: 'BENGOO G9000', price: '1.490.000₫', img: 'tainghe8.webp' },
    { id: 9, name: 'BENGOO G9000', price: '1.490.000₫', img: 'tainghe1.webp' },
    { id: 10, name: 'BENGOO G9000', price: '1.490.000₫', img: 'tainghe2.webp' },
    { id: 11, name: 'BENGOO G9000', price: '1.490.000₫', img: 'tainghe3.webp' },
    { id: 12, name: 'BENGOO G9000', price: '1.490.000₫', img: 'tainghe4.webp' },
    { id: 13, name: 'BENGOO G9000', price: '1.490.000₫', img: 'tainghe5.webp' },
    { id: 14, name: 'BENGOO G9000', price: '1.490.000₫', img: 'tainghe6.webp' },
    { id: 15, name: 'BENGOO G9000', price: '1.490.000₫', img: 'tainghe7.webp' },
    { id: 16, name: 'BENGOO G9000', price: '1.490.000₫', img: 'tainghe8.webp' },
    { id: 17, name: 'BENGOO G9000', price: '1.490.000₫', img: 'tainghe5.webp' },
    { id: 18, name: 'BENGOO G9000', price: '1.490.000₫', img: 'tainghe6.webp' },
    { id: 19, name: 'BENGOO G9000', price: '1.490.000₫', img: 'tainghe7.webp' },
    { id: 20, name: 'BENGOO G9000', price: '1.490.000₫', img: 'tainghe4.webp' },
    { id: 21, name: 'BENGOO G9000', price: '1.490.000₫', img: 'tainghe1.webp' },
    { id: 22, name: 'BENGOO G9000', price: '1.490.000₫', img: 'tainghe2.webp' },
    { id: 23, name: 'BENGOO G9000', price: '1.490.000₫', img: 'tainghe3.webp' },
    { id: 24, name: 'BENGOO G9000', price: '1.490.000₫', img: 'tainghe8.webp' },

];

function loadProducts() {
    let productHtml = '';
    dssp.forEach(product => {
        productHtml += `
            <div class="box-product">
                <div class="topic">
                    <h3>${product.name}</h3>
                </div>
                <div class="box-product-inline">
                    <div class="box-product-large">
                        <a href="#"><img src="asset/img/${product.img}" alt="${product.name}"></a>
                        <p>${product.price}</p>
                        <div class="product-icons">
                            <a href="#" class="icon-heart" title="Thêm vào yêu thích"><i class="fa fa-heart"></i></a>
                            <a href="sanphamtainghect-${product.id}.html" class="icon-info" title="Thông tin sản phẩm"><i class="fa fa-info-circle"></i></a>
                            <a href="#" class="icon-cart" title="Thêm vào giỏ hàng"><i class="fa fa-cart-plus"></i></a>
                            <a href="#" class="icon-plus" title="Cộng vào giỏ hàng"><i class="fa-solid fa-plus"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    document.getElementById('sp').innerHTML = productHtml;
}


// Gọi hàm để load sản phẩm khi trang được tải
window.onload = function() {
    loadProducts();
};
