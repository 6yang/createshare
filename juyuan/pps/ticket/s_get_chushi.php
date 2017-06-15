<?php
$sched_id = $_GET['sch'];

$link = mysqli_connect("127.0.0.1","root","");
	if(!$link){
		echo "数据库连接失败";
	}
mysqli_select_db($link, "ttms");
$arr = "";

$sql_stu_id = "select studio_id from schedule where sched_id = '$sched_id' ";
$re_stu_id = mysqli_query($link, $sql_stu_id);
$row_stu_id = mysqli_fetch_array($re_stu_id);
$stu_id = $row_stu_id['studio_id'];

$sql_row_col = "select studio_col_count from studio where studio_id = '$stu_id' ";
$re_row_col =  mysqli_query($link, $sql_row_col);
$row_row_col = mysqli_fetch_array($re_row_col);
$studio_col_count =$row_row_col['studio_col_count'];  // 查询出*号演出厅的列数


$sql_seat_id = "select * from ticket where sched_id = '$sched_id' and ticket_status = 1";
$re_seat_id = mysqli_query($link, $sql_seat_id);
while($row_seat_id = mysqli_fetch_array($re_seat_id)){
	$seat_idd = $row_seat_id['seat_id'];
	$seat_id = $seat_idd - $stu_id*1000 ;
	$ccol = $seat_id%$studio_col_count;   //列数
	if($ccol == 0){
		$ccol =$studio_col_count;
	}
	
	$rrow = ($seat_id - $ccol)/$studio_col_count +1;
	$seatt =  $rrow . "_".$ccol."+";
	$arr = $arr .$seatt;
}
echo $arr;
?>