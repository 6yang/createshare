<?php
	header("content-type:text/html; charset=utf-8"); 
	header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Headers:X-Requested-With');
	
	$rname = $_POST['rnn'];
	$rpassword = $_POST['rpp'];
	$rss = $_POST['rss'];	
	$link = mysqli_connect("127.0.0.1", "root","","ttms");
	$re =  mysqli_query($link, "select * from user where uname = '$rname'");
	$row = mysqli_fetch_array($re);
	$uname = $row['uname']; 
	if($uname !=$rname ){
		$sql = "insert into user(uname,upassword,uper) values('$rname','$rpassword','$rss')";
		if(mysqli_query($link, $sql)){
		echo '注册成功';	
		}else{
			echo "注册失败";
		}
	}else{
		echo "该用户名已经被注册";
	}
//	echo $rname. " =".$uname.'=';
	
	mysqli_close($link);
	
?>