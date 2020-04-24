$(document).ready(function(){
    var btb = document.getElementById('btbChangeImage');
    btb.onclick = ChangeImage;
    document.getElementById('gett').onclick (theme) ;
});
var currentImage = 1;
function ChangeImage(){
    if (currentImage ==1){
        $('#hinh').attr("src","./img/5.jpg");
        currentImage = 2;
    }else{
        if (currentImage ==2){
            $('#hinh').attr("src","");
            currentImage = 1;
        }

    }
}
var themee =1;
function theme(){
    if (themee ==1){
        $('body').addclass(w1);
        themee = 2;
    }else{
        if (themee ==2){
            $('body').removeclass(w1);
            themee = 1;
        }

    }
}
function get()
{
    var FullName = document.getElementById("FullName").value;
    var Email = document.getElementById("Email").value;
    var Address = document.getElementById("Address").value;
    var Phone = document.getElementById("Phone").value;
    if(FullName == "" )
    {
        document.getElementById("errorname").innerHTML ="Vui lòng nhập tên của bạn"
    }
    else{
        alert("Đăng ký thành công");
    }
  
}
function send()
{
    alert("Đã gửi report");
}