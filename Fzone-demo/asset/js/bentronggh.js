document.addEventListener('DOMContentLoaded', () => {
    function updateCart() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartTableBody = document.querySelector('#cart tbody');
        cartTableBody.innerHTML = ''; // Xóa nội dung cũ
    
        cart.forEach((item, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td><img src="${item.img}" alt="${item.name}" style="width: 100px;"></td>
                <td>${item.name}</td>
                <td><input type="number" class="update-quantity" data-product-id="${item.id}" value="${item.quantity}" min="1" style="width: 60px;"></td>
                <td>${item.price}</td>
                <td><button class="remove-button" data-product-id="${item.id}">Xóa</button></td>
            `;
            cartTableBody.appendChild(row);
        });
    
        updateTotalPrice(cart);
    }
    
    function updateTotalPrice(cart) {
        const totalPriceElement = document.getElementById('totalPrice');
        let total = 0;
    
        cart.forEach(item => {
            // Chuyển giá từ chuỗi sang số để tính tổng
            const price = parseFloat(item.price.replace(/\D/g, ''));
            total += price * item.quantity;
        });
    
        totalPriceElement.textContent = `${total.toLocaleString()} VNĐ`;
    }
    
    document.addEventListener('DOMContentLoaded', updateCart);
    
    const cartTable = document.querySelector('#cart');
    if (cartTable) {
        cartTable.addEventListener('click', (event) => {
            if (event.target.classList.contains('remove-button')) {
                const productId = event.target.getAttribute('data-product-id');
                let cart = JSON.parse(localStorage.getItem('cart')) || [];
                cart = cart.filter(item => item.id !== productId);
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCart();
            }
        });

        cartTable.addEventListener('change', (event) => {
            if (event.target.classList.contains('update-quantity')) {
                const productId = event.target.getAttribute('data-product-id');
                const newQuantity = parseInt(event.target.value);
                let cart = JSON.parse(localStorage.getItem('cart')) || [];
                const item = cart.find(item => item.id === productId);
                if (item) {
                    item.quantity = newQuantity;
                    localStorage.setItem('cart', JSON.stringify(cart));
                    updateCart();
                }
            }
        });
    } else {
        console.error('Không tìm thấy phần tử giỏ hàng');
    }

    updateCart();
});
