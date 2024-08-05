const dssp = [
    {id: 1, name: 'Bánh ngọt', price: 2000, img: 'image.png'},
    {id: 2, name: 'Bánh chuối', price: 2000, img: 'image.png'},
    {id: 3, name: 'Bánh ai biết', price: 2000, img: 'image.png'},
    {id: 4, name: 'Bánh tầm', price: 2000, img: 'image.png'},
    {id: 5, name: 'Bánh mặn', price: 2000, img: 'image.png'},
    {id: 6, name: 'Bánh chua', price: 2000, img: 'image.png'},
    {id: 7, name: 'Bánh đắng', price: 2000, img: 'image.png'},
    {id: 8, name: 'Bánh đó', price: 2000, img: 'image.png'},
];

function loadsp() {
    let kq = "";
    for (let i = 0; i < dssp.length; i++) {
        kq += `
            <div class="col">
                <img src="asset/img/${dssp[i].img}" alt="${dssp[i].name}">
                <p>${dssp[i].name}</p>
                <p>${dssp[i].price}</p>
                <button onclick="add('${dssp[i].name}', ${dssp[i].price}, 1)">Mua ngay</button>
            </div>
        `;
    }
    document.getElementById('sp').innerHTML = kq;
}

let cart = [];
let number = 0;
function add(name, price, quantity) {
    number++;
    document.getElementById('numCart').innerHTML = number;
    let pro = {
        name: name,
        price: price,
        quantity: quantity
    };
    let result = false;
    for (let i = 0; i < cart.length; i++) {
        // Sửa lỗi cú pháp bằng cách dùng dấu chấm
        if (cart[i].name === pro.name) {
            cart[i].quantity++;
            result = true;
            break;
        }
    }
    if (!result) {
        cart.push(pro);
    }

    console.log(cart);
    localStorage.setItem('cart', JSON.stringify(cart));
}
