<?php
$link = mysqli_connect("127.0.0.1", "root", "","ttms");
if(!$link){
	echo "数据库连接失败".mysqli_connect_error();
}

$result = mysqli_query($link,"select * from schedule");
echo "<table border='1'>
	<tr>
	<th>演出计划</th>
	<th>影片ID</th>
	<th>演出厅ID</th>
	<th>演出日期</th>
	<th>演出票价</th>
	</tr>";
while($row = mysqli_fetch_array($result)){
	echo "<tr>";
    echo "<td>" . $row['sched_id'] . "</td>";
	echo "<td>" . $row['play_id'] . "</td>";
    echo "<td>" . $row['studio_id'] . "</td>";
    echo "<td>" . $row['sched_time'] . "</td>";
    echo "<td>" . $row['sched_ticket_price'] . "</td>";
    echo "</tr>";
}
echo "</table>";
?>