<?php
$id = $_GET['id'];
$link = mysqli_connect("127.0.0.1", "root", "","ttms");
if(!$link){
	echo "数据库连接失败".mysqli_connect_error();
}
$sql = "delete from ticket where sched_id = '$id'";
mysqli_query($link, $sql);

mysqli_query($link,"delete from schedule where sched_id = '$id'");
?>