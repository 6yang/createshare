<?php

$link = mysqli_connect("127.0.0.1", "root", "","ttms");
if(!$link){
	echo "数据库连接失败".mysqli_connect_error();
}
$result = mysqli_query($link, "select * from schedule");
	echo "演出计划  :". "<select>";
	while($row = mysqli_fetch_array($result)){
	echo "<option>".$row['sched_id']."</option>";
	}
	echo "</select>";

?>