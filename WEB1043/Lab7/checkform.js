let tensp = document.getElementById("tensp");
let giasp = document.getElementById("giasp");
let radio = document.getElementsByName("diachi");
let btn = document.getElementById("btn");
function kiemtra(){
    if(tensp.value == ''){
        // alert("Tên sản phẩm không đc để trống");
        document.getElementById("errTen").innerText = "Tên sản phẩm không đc để trống";
        tensp.focus();
        tensp.style.backgroundColor = "red";
        return false;
    }
    if(giasp.value == ''){
        document.getElementById("errGia").innerText = "Giá sản phẩm không đc để trống";
        giasp.focus();
        giasp.style.backgroundColor = "red";
        return false;
    }else if(isNaN(giasp.value) == true){
        document.getElementById("errGia").innerText = "Giá sản phẩm phải là số";
        giasp.focus();
        giasp.style.backgroundColor = "red";
        return false;
    }else if(parseInt(giasp.value) < 0){
        document.getElementById("errGia").innerText = "Giá sản phẩm phải là số nguyên dương";
        giasp.focus();
        giasp.style.backgroundColor = "red";
        return false;
    }
    if(radio[0].checked == false && radio[1].checked == false){ 
        document.getElementById("errdiachi").innerText = "Địa chỉ giao hàng không được để trống";
        return false;
    }
    const email = document.getElementById('email');
    let reg = /^\w@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if(reg.test(email.value)==false){}
    //regex
    //Tên tài khoản @ tên miền. com,vn,net
    return true;
}




function Anerr(){
    document.getElementById("errTen").innerText = "";
    document.getElementById("errGia").innerText = "";
    giasp.style.backgroundColor = "white";
    tensp.style.backgroundColor = "white";
    if(tensp.value.length > 0 && giasp.value.length >0){
        btn.disabled = false;
    }else{
        btn.disabled = true;
    }
}


function hienthigia(x){
    let phi = document.getElementById("phi");
    phi.style.display = x ? 'block' : 'none';
}

