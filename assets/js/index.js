// 登陆用户名
$(function(){
    var username=localStorage.getItem("cc");
    console.log(username);
    if(username!=null)
    {
        $("#logi1").html("欢迎您:"+username+"/");
        $("#logi2").html("退出登录");
        $("#logi2").click(function(){
            document.getElementById("logi2").href="index.html";
            localStorage.removeItem("cc");

        });
    }
});