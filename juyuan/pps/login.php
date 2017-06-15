<?php
	session_start();
	$lname = $_POST['lnn'];
	$lpassword = $_POST['lpp'];
	$lss = $_POST['lss'];	
	$link = mysqli_connect("127.0.0.1", "root","","ttms");
	
	$check = "select * from user where uname ='$lname'";
	$re = mysqli_query($link, $check);
	$rows = mysqli_fetch_array($re);
	$c_password = $rows['upassword'];
	$c_ss = $rows['uper'];
	$u_id = $rows['uid'];
	if($lpassword == $c_password && $lss == $c_ss){
		$_SESSION['name'] = $lname;
		$_SESSION['uper'] = $lss;
		$_SESSION['uid'] = $u_id;
		echo 1;
	}else if($lpassword == $c_password && $lss != $c_ss){
		echo 2;
	}else{
		echo 0;
	}
	
	
?>