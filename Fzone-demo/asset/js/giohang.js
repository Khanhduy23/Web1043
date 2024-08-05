document.addEventListener('DOMContentLoaded', () => {
    const addToCartButton = document.querySelector('.add-to-cart-button');
    
    if (addToCartButton) {
        addToCartButton.addEventListener('click', () => {
            const productId = addToCartButton.getAttribute('data-product-id');
            const quantityInput = document.getElementById('quantity');
            const quantity = parseInt(quantityInput.value);

            // Lấy thông tin sản phẩm từ DOM
            const productName = document.querySelector('.box-product-left .box-product-large img').alt;
            const productImg = document.querySelector('.box-product-left .box-product-large img').src;
            const productPrice = document.querySelector('.discounted-price').textContent;

            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            const existingProductIndex = cart.findIndex(item => item.id === productId);

            if (existingProductIndex >= 0) {
                cart[existingProductIndex].quantity += quantity;
            } else {
                const product = {
                    id: productId,
                    name: productName,
                    img: productImg,
                    price: productPrice,
                    quantity: quantity
                };
                
                cart.push(product);
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            alert('Sản phẩm đã được thêm vào giỏ hàng!');
        });
    }
});
