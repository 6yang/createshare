<?php
	$name = $_GET["name"];
	
	$link = mysqli_connect("127.0.0.1","root","");
	if(!$link){
	echo "数据库连接失败";
	}
	mysqli_select_db($link, "ttms");
	
	$sql1  = "select play_id from play where play_name = '$name'";
	$result1 = mysqli_query($link, $sql1);
	$row1 = mysqli_fetch_array($result1);
	$play_id = $row1['play_id'];
	
	$sql2 = "select * from schedule where play_id = '$play_id'";
	$result2 = mysqli_query($link, $sql2);
	echo "<table border='1'>
	<tr>
	<th>演出计划</th>
	<th>影片名称</th>
	<th>演出日期</th>
	<th>演出厅ID</th>
	<th>演出票价</th>
	<th>购票操作</th>
	</tr>";
	while($row2 = mysqli_fetch_array($result2)){
		echo "<tr>";
		echo "<td>".$row2['sched_id'];
		echo "<td>".$name."</td>";
		echo "<td>".$row2['sched_time']."</td>";
		echo "<td>".$row2['studio_id']."号演出厅"."</td>";
		echo "<td>".$row2['sched_ticket_price']."</td>";
		echo "<td>"."<button>"."购票"."</button>"."</td>";
		echo "</tr>";
	}
	echo "</table>";
?>