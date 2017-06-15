<?php
$link = mysqli_connect("127.0.0.1","root","");
	if(!$link){
		echo "数据库连接失败";
	}
	
	mysqli_select_db($link, "ttms");
$str = $_GET['str'];

$arr1 = explode(" ", $str);
$sched_id = intval( $arr1[0]);
$arr2 = array();

$sql_stu_id = "select studio_id from schedule where sched_id = '$sched_id' ";
$re_stu_id = mysqli_query($link, $sql_stu_id);
$row_stu_id = mysqli_fetch_array($re_stu_id);
$stu_id = $row_stu_id['studio_id'];

$sql_row_col = "select studio_col_count from studio where studio_id = '$stu_id' ";
$re_row_col =  mysqli_query($link, $sql_row_col);
$row_row_col = mysqli_fetch_array($re_row_col);
$studio_col_count =$row_row_col['studio_col_count'];  // 查询出*号演出厅的列数

for($i = 1 ;$i < count($arr1);$i++ ){
	$arr2[$i] = explode("_", $arr1[$i]);
//	修改票的状态
	$seat_id = $studio_col_count*($arr2[$i][0]-1) + $arr2[$i][1] + $stu_id*1000;
	$ticket_update = "update ticket set ticket_status = 1 where seat_id = '$seat_id' and sched_id='$sched_id'";
	mysqli_query($link, $ticket_update);   
}
	$get_arr =$arr1[1];

for($i = 2 ;$i < count($arr1);$i++ ){
	$get_arr = $get_arr . ",".$arr1[$i];
		
}
	
	echo $get_arr;
?>