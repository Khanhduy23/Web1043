//Bước 1: Tạo một mảng lưu trữ các mặc hàng của cửa hàng
mainArray = [];
//Bước 2: Tạo 3 items, mỗi item chứa các thông tin như đề bài
let item1 = {
    name: "Laptop",
    model: "A123",
    cost: 5000,
    quantity: 10,
}
let item2 = {
    name: "Điện thoại",
    model: "A345",
    cost: 2000,
    quantity: 8,
}
let item3 = {
    name: "Máy tính bảng",
    model: "A1223",
    cost: 15000,
    quantity: 10,
}
//Bước 3: Đưa đối tượng vào mảng rỗng đã tạo ở trên mainArray
mainArray.push(item1);
mainArray.push(item2);
mainArray.push(item3);

//Xuất mainArray bằng console
console.log("mainArray: ", mainArray);
//Bước 4: Truy xuất quantity element của item thứ 3 bằng console
console.log("Quantily item 3: ", mainArray[2].quantity);
//Bước 5: Thêm và truy xuất thêm các elements khác từ mainArray
let item4 = {
    name: "Headphones",
    model: "D012",
    cost: 150,
    quantity: 30
};
mainArray.push(item4);

//Xuất mảng mới
console.log("Update mainArray: ", mainArray);
//Truy xuất thông tin của item4
console.log("item4: ", mainArray[3]);

//Truy xuất tất cả các thông tin của item
// mainArray.forEach((item, index) => {
//     console.log(`Item ${index + 1}:`, item);
// });