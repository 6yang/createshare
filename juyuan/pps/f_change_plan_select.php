<?php
	$link = mysqli_connect("127.0.0.1","root","");
	if(!$link){
	echo "数据库连接失败";
	}
	mysqli_select_db($link, "ttms");

	$reid = mysqli_query($link, "select * from schedule");
	echo "演出计划 :"."<select>";
	while($row1 = mysqli_fetch_array($reid)){
		echo "<option>".$row1['sched_id']."</option>";
	}
	echo "</select>"."<br /> <br/>";


	$sql = "select * from studio";

	$result1= mysqli_query($link, $sql);
	
	echo "演出厅ID :"."<select>";
	while($row2 = mysqli_fetch_array($result1)){
		echo "<option>".$row2['studio_id']."</option>";
	}
	echo "</select>"."<br /> <br/>";
	
	$result = mysqli_query($link, "select * from play");
	echo "影片的ID :". "<select>";
	while($row = mysqli_fetch_array($result)){
	echo "<option>".$row['play_id']."</option>";
	}
	echo "</select>"."<br /> <br/>";
	
?>