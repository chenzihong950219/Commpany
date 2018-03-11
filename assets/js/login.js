function $(id){
	return document.getElementById(id);
}

// 用户名
function doPhone(){
	var phone=$("phone").value;
	var rephone=localStorage.getItem($("phone").value);
	if($("phone").value==""){
		$("first-text").innerHTML="用户名不能为空";
		$("first-text").style.color="red";
		$("phone").style.borderColor="red";
		$("logo1").style.borderColor="red";
		$("logo1").style.backgroundColor="#f2dede";
		$("logo1").style.color="red";
		return false;
	}
	if(rephone!=null){
		$("first-text").innerHTML="输入合法";
		$("first-text").style.color="green";
		$("phone").style.borderColor="green";
		$("logo1").style.borderColor="green";
		$("logo1").style.backgroundColor="#c2e5d2";
		$("logo1").style.color="green";
		return true;

	}else{
		$("first-text").innerHTML="此用户名不存在，请重新输入";
		$("first-text").style.color="red";
		$("phone").style.borderColor="red";
		$("logo1").style.borderColor="red";
		$("logo1").style.backgroundColor="#f2dede";
		$("logo1").style.color="red";
		return false;
	}
}
// 密码
function doPassword(){
	var password=$("password").value;
	var repassword=localStorage.getItem($("phone").value);
	if(password==""){
		$("third-text").innerHTML="密码不能为空";
		$("third-text").style.color="red";
		$("password").style.borderColor="red";
		$("logo3").style.borderColor="red";
		$("logo3").style.backgroundColor="#f2dede";
		$("logo3").style.color="red";
		return false;
	}
	if(password==repassword){
		$("third-text").innerHTML="密码正确";
		$("third-text").style.color="green";
		$("password").style.borderColor="green";
		$("logo3").style.borderColor="green";
		$("logo3").style.backgroundColor="#c2e5d2";
		$("logo3").style.color="green";
		return true;

	}else{
		$("third-text").innerHTML="密码错误，请重新输入";
		$("third-text").style.color="red";
		$("password").style.borderColor="red";
		$("logo3").style.borderColor="red";
		$("logo3").style.backgroundColor="#f2dede";
		$("logo3").style.color="red";
		return false;
	}
}
// 设置验证码
function setNum(){
	var num="";
	var s="0123456789qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXVBNM";
	for(var i=0;i<4;i++)
	{
		var n=s.charAt(parseInt(Math.random()*61));
		num+=n;
	}
	$("changenum").innerHTML=num;
}
// 判断验证码
function doNum(){
	if($("num").value.toString()==$("changenum").innerHTML){
		$("second-text").innerHTML="输入合法";
		$("second-text").style.color="green";
		$("num").style.borderColor="green";
		$("logo2").style.borderColor="green";
		$("logo2").style.backgroundColor="#c2e5d2";
		$("logo2").style.color="green";
		return true;

	}else{
		$("second-text").innerHTML="请再次输入验证码";
		$("second-text").style.color="red";
		$("num").style.borderColor="red";
		$("logo2").style.borderColor="red";
		$("logo2").style.backgroundColor="#f2dede";
		$("logo2").style.color="red";
		return false;
	}
}
// 登陆成功
function doLogin(){
	console.log(1);
	if( doPhone()&&doPassword()&&doNum()==true){
		localStorage.setItem("cc",$("phone").value);
		location.href="index.html";
	}else{
		swal(
				'登陆失败！',
				'请重新登陆',
				'error'
			)
	}
}
// 眼睛
function doEye(obj){
	if(obj.className=="icon iconfont icon-yanjing"){
		obj.className="icon iconfont icon-yanjing1";
		$("password").type="text";
		
	}else{
		obj.className="icon iconfont icon-yanjing";
		$("password").type="password";
	}
}