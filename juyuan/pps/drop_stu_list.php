<?php
	$link = mysqli_connect("127.0.0.1","root","");
	if(!$link){
	echo "数据库连接失败";
	}

	mysqli_select_db($link, "ttms");

	$sql = "select * from studio";

	$result= mysqli_query($link, $sql);
	
	echo "选择演出厅ID:"."<select>";
	while($row = mysqli_fetch_array($result)){
		echo "<option>".$row['studio_id']."</option>";
	}
	echo "</select>";
?>