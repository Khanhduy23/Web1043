// Khai báo biến toàn cục
var flag = true; // true: X, false: O
var count = 0; // Đếm số lần click
var board = ["", "", "", "", "", "", "", "", ""]; // Mảng để lưu trữ trạng thái của các ô

function mark(index) {
    // Kiểm tra nếu ô đã được đánh dấu
    if (board[index] !== "") return;

    // Lấy phần tử button dựa trên chỉ số
    var button = document.getElementsByTagName("button")[index];
    
    // Thay đổi nội dung và màu nền của button
    button.innerText = flag ? "X" : "O";
    //Đặt lớp css cho nút để hiển thị màu sắc tương ứng
    button.className = flag ? "player-x" : "player-o";
    button.setAttribute("disabled", "true"); // Vô hiệu hóa nút được click
    
    // Cập nhật trạng thái của ô trong mảng
    board[index] = flag ? "X" : "O";
    
    // Đảo cờ để người chơi tiếp theo
    flag = !flag;
    
    // Tăng số lần click
    count++;
    
    // Kiểm tra kết thúc trò chơi
    if (checkWinner()) {
        document.getElementById("result").innerText = `Người chơi ${board[index]} thắng!`;
        disableAllButtons();
    } else if (count === 9) { // Số ô trong Tic-Tac-Toe là 9
        document.getElementById("result").innerText = "Hai bên hòa nhau!";
        disableAllButtons();
    }
}

function checkWinner() {
    const youWin = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // hàng
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // cột
        [0, 4, 8], [2, 4, 6]              // chóe
    ];
// Lặp qua từng tổ hợp chiến thắng
    for (let [a, b, c] of youWin) {
        // Lấy chỉ số của ba ô trong tổ hợp
         // Kiểm tra nếu ba ô có giá trị giống nhau và không rỗng
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return false;
}
//for duyệt qua từng nút, nếu true thì dis không cho người dùng chọn nữa
function disableAllButtons() {
    var buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.setAttribute("disabled", "true");
    }
}
