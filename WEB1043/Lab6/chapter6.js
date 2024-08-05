const menus = document.querySelectorAll(".title");
const openText = document.querySelectorAll(".myText");
menus.forEach((el) =>{
    el.addEventListener("click",(e) =>{
        // nextElementSibling là thuộc tính của phần tử DOM trả về phần tử kế tiếp ngay sau phần tử hiện tại trong cùng một cấp cha.
        //In ra phần tử kế tiếp ngay sau phần tử tiêu đề hiện tại trong cùng một cấp cha.
        console.log(el.nextElementSibling); 
        remover();
        //Nếu lớp active đã có, nó sẽ bị loại bỏ; nếu không, nó sẽ được thêm vào
        el.nextElementSibling.classList.toggle("active"); // toggle: chuyển đổi
    })
})
//Hàm này loại bỏ lớp active khỏi tất cả các phần tử nội dung trong openText.
//Hàm remover đảm bảo rằng khi một tiêu đề mới được nhấp, nội dung của các tiêu đề khác sẽ bị ẩn.
function remover() {
    // Duyệt qua tất cả các phần tử nội dung và loại bỏ lớp active từ chúng.
    openText.forEach((ele) =>{
        ele.classList.remove("active");
    })
}