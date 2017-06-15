<?php
$id = $_GET['studio_id'];
$link = mysqli_connect("127.0.0.1","root","");
	if(!$link){
	echo "数据库连接失败";
	}
	mysqli_select_db($link, "ttms");
	
	$sql = "select * from studio where studio_id = '$id'";
	$result = mysqli_query($link, $sql);
	while($row = mysqli_fetch_array($result)){
		echo $row['studio_row_count']."-".$row['studio_col_count'];
	}
?>