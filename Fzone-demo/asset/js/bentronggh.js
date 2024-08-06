document.addEventListener('DOMContentLoaded', function() {
    function updateCart() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartTableBody = document.querySelector('#cart tbody');
        cartTableBody.innerHTML = '';

        cart.forEach((item, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><input type="checkbox" class="select-item" data-product-id="${item.id}" ${item.selected ? 'checked' : ''}></td>
                <td>${index + 1}</td>
                <td><img src="${item.img}" alt="${item.name}" style="width: 100px;"></td>
                <td>${item.name}</td>
                <td><input type="number" class="update-quantity" data-product-id="${item.id}" value="${item.quantity}" min="1" style="width: 60px;"></td>
                <td>${item.color || 'Chưa chọn màu'}</td>
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

        const selectedCheckboxes = document.querySelectorAll('.select-item:checked');
        const selectedProductIds = Array.from(selectedCheckboxes).map(checkbox => checkbox.getAttribute('data-product-id'));

        cart.forEach(item => {
            if (selectedProductIds.includes(item.id)) {
                const price = parseFloat(item.price.replace(/\D/g, ''));
                total += price * item.quantity;
            }
        });

        totalPriceElement.textContent = `${total.toLocaleString()} VNĐ`;
    }

    document.getElementById('buyNowButton').addEventListener('click', function() {
        const selectedProducts = [];

        document.querySelectorAll('#cart tbody input[type="checkbox"]:checked').forEach(function(checkbox) {
            const row = checkbox.closest('tr');
            const product = {
                name: row.querySelector('td:nth-child(4)').textContent.trim(),
                quantity: row.querySelector('td:nth-child(5) input').value.trim(),
                color: row.querySelector('td:nth-child(6)').textContent.trim(),
                totalPrice: row.querySelector('td:nth-child(7)').textContent.trim()
            };
            selectedProducts.push(product);
        });

        if (selectedProducts.length > 0) {
            localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
            window.location.href = 'payment.html';
        } else {
            alert('Vui lòng chọn sản phẩm để mua.');
        }
    });

    document.querySelector('#cart').addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-button')) {
            const productId = event.target.getAttribute('data-product-id');
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart = cart.filter(item => item.id !== productId);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCart();
        }
    });

    document.querySelector('#cart').addEventListener('change', (event) => {
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
        } else if (event.target.classList.contains('select-item')) {
            updateTotalPrice(JSON.parse(localStorage.getItem('cart')) || []);
        }
    });

    updateCart();
});