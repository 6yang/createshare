<?php
$stu_id = $_GET['stu_id'];
$sch_id = $_GET['sch_id'];
$play_id = $_GET['play_name'];
$sch_time = $_GET['sch_time'];
$sch_price = $_GET['sch_price'];

$link = mysqli_connect("127.0.0.1", "root", "","ttms");
if(!$link){
	echo "数据库连接失败".mysqli_connect_error();
}

$sql = "insert into schedule values('$sch_id','$stu_id','$play_id','$sch_time','$sch_price')";
$result = mysqli_query($link,$sql);



$sql_col_row = "select * from studio where studio_id = '$stu_id'";
$re_1 = mysqli_query($link, $sql_col_row);
$row_1 = mysqli_fetch_array($re_1);
$row = $row_1['studio_row_count'];
$col = $row_1['studio_col_count'];
for($i = 1 ;$i<=$row ; $i++){
	for($j = 1 ;$j<=$col ;$j++){
		$seat_id =$stu_id*1000+ $col*($i-1)+$j;
		$sql_ticket = "insert into ticket(seat_id,sched_id,ticket_price,ticket_status) values($seat_id,'$sch_id','$sch_price',0)";
		mysqli_query($link, $sql_ticket);	
	}
}




?>