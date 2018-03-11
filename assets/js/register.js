function $(id){
	return document.getElementById(id);
}

// 手机号
function doPhone(){
	var phone=$("phone").value;
	var reg=/^1\d{10}$/;
	if(reg.test(phone)){
		$("first-text").innerHTML="输入合法";
		$("first-text").style.color="green";
		$("phone").style.borderColor="green";
		$("logo1").style.borderColor="green";
		$("logo1").style.backgroundColor="#c2e5d2";
		$("logo1").style.color="green";
		return true;

	}else{
		$("first-text").innerHTML="手机号11位，以1开头";
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
	var reg=/^[\da-z]{6,10}$/;
	var password=$("password").value;
	if(password=="")
	{
		$("third-text").innerHTML="密码不能为空";
		$("third-text").style.color="red";
		$("password").style.borderColor="red";
		$("logo3").style.borderColor="red";
		$("logo3").style.backgroundColor="#f2dede";
		$("logo3").style.color="red";
		return false;
	}
	if(reg.test(password)){
		$("third-text").innerHTML="输入合法";
		$("third-text").style.color="green";
		$("password").style.borderColor="green";
		$("logo3").style.borderColor="green";
		$("logo3").style.backgroundColor="#c2e5d2";
		$("logo3").style.color="green";
		return true;

	}else{
		$("third-text").innerHTML="密码只能由数字和字母组成，长度为6-10位";
		$("third-text").style.color="red";
		$("password").style.borderColor="red";
		$("logo3").style.borderColor="red";
		$("logo3").style.backgroundColor="#f2dede";
		$("logo3").style.color="red";
		return false;
	}
}
// 重置密码
function doRe(){
	if($("repassword").value=="")
	{
		$("four-text").innerHTML="密码不能为空";
		$("four-text").style.color="red";
		$("repassword").style.borderColor="red";
		$("logo4").style.borderColor="red";
		$("logo4").style.backgroundColor="#f2dede";
		$("logo4").style.color="red";
		return false;
	}
	if($("password").value==$("repassword").value){
		$("four-text").innerHTML="输入合法";
		$("four-text").style.color="green";
		$("repassword").style.borderColor="green";
		$("logo4").style.borderColor="green";
		$("logo4").style.backgroundColor="#c2e5d2";
		$("logo4").style.color="green";
		return true;

	}else{
		$("four-text").innerHTML="请再次确认密码";
		$("four-text").style.color="red";
		$("repassword").style.borderColor="red";
		$("logo4").style.borderColor="red";
		$("logo4").style.backgroundColor="#f2dede";
		$("logo4").style.color="red";
		return false;
	}
}
// 设置验证码
function setNum(){
	$("donum").style.backgroundColor="#b7b6b5";
	var s="0123456789qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXVBNM";
	var num="";
	for(var i=0;i<4;i++)
	{
		var n=s.charAt(parseInt(Math.random()*61));
		num+=n;
	}
	$("donum").innerHTML=num;
}
// 判断验证码
function doNum(){
	if($("num").value.toString()==$("donum").innerHTML){
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
// 注册成功
function doLogin(){
	console.log(1);
	if( doPhone()&&doPassword()&&doRe()&&doNum()==true){
		localStorage.setItem($("phone").value,$("password").value);
		location.href="login.html";
	}else{
		swal(
				'注册失败！',
				'请重新注册',
				'error'
			)
	}
}
// 眼睛可见与否
function doEye(obj){
	if(obj.className=="icon iconfont icon-yanjing"){
		obj.className="icon iconfont icon-yanjing1";
		if(obj.id=="eye1"){
			$("password").type="text";
		}else{
			$("repassword").type="text";
		}
		
	}else{
		obj.className="icon iconfont icon-yanjing";
		if(obj.id=="eye1"){
			$("password").type="password";
		}else{
			$("repassword").type="password";
		}
	}
}
