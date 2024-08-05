const newPro = [
    {id: 1, name: 'Bánh ngọt', price: 80000, img: 'banhngot.jpg'},
    {id: 2, name: 'Bánh ngọt 2', price: 90000, img: 'banhngot.jpg'},
    {id: 3, name: 'Bánh ngọt 3', price: 100000, img: 'banhngot.jpg'},
    {id: 4, name: 'Bánh ngọt 4', price: 110000, img: 'banhngot.jpg'},
];

function loadnewPro() {
    const productsContainer = document.getElementById('products');
    let kq = '';
    for (let i = 0; i < newPro.length; i++) {
        kq += `
            <div class="product-box">
                <img src="${newPro[i].img}" alt="${newPro[i].name}">
                <h3>${newPro[i].name}</h3>
                <p>Giá: ${newPro[i].price.toLocaleString()} VNĐ</p>
                <button onclick="addcart(this)">Mua Ngay</button>
            </div>
        `;
    }
    productsContainer.innerHTML = kq;
}

function addcart(btn) {
    const productBox = btn.parentElement;
    const name = productBox.querySelector('h3').textContent;
    const price = productBox.querySelector('p').textContent.replace('Giá: ', '');

    let kq = `
        <div class="cart-item">
            <span>${name}</span>
            <span>${price}</span>
            <button onclick="deletCart(this)">Xóa</button>
        </div>
    `;
    document.getElementById('cart').innerHTML += kq;
}

function deletCart(btn) {
    const cartItem = btn.parentElement;
    cartItem.remove();
    // Kiểm tra nếu giỏ hàng trống
    const cartContainer = document.getElementById('cart');
    if (cartContainer.children.length === 0) {
        cartContainer.innerHTML = '<p>Giỏ hàng trống</p>';
    }
}
