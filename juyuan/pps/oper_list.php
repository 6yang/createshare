<?php
	$id = $_GET['stu_id'];
	$name = $_GET['stu_name'];
	$row = $_GET['stu_row'];
	$col = $_GET['stu_col'];
	$beizhu = $_GET['stu_beizhu'];
	
	$link = mysqli_connect("127.0.0.1", "root","","ttms");
	if(!$link){
		echo "数据库连接失败";
	}
	$updata = "update studio set studio_name='$name' ,studio_row_count='$row',studio_col_count='$col',studio_introduction='$beizhu' where studio_id = '$id'";
	mysqli_query($link, $updata);
	
	$delete = "delete from seat where studio_id = '$id'";
	mysqli_query($link, $delete);
	for($i =1 ;$i<=$row ; $i++){
		for($j = 1 ;$j<=$col;$j++){
			$seat_id =$id*1000 + $j + ($i-1)*$col ;
			$upd = "insert into seat values('$seat_id','$id','$i','$j')";
			mysqli_query($link, $upd); 
		}
	}
	
	
	
	
	$sql = "select * from studio";
	$result= mysqli_query($link, $sql);
	echo "<table border='1'>
	<tr>
	<th>演出厅ID</th>
	<th>演出厅名称</th>
	<th>演出厅行数</th>
	<th>演出厅列数</th>
	<th>备注</th>
	</tr>";
	
	while($row = mysqli_fetch_array($result)){
		echo "<tr>";
	    echo "<td>" . $row['studio_id'] . "</td>";
	    echo "<td>" . $row['studio_name'] . "</td>";
	    echo "<td>" . $row['studio_row_count'] . "</td>";
	    echo "<td>" . $row['studio_col_count'] . "</td>";
	    echo "<td>" . $row['studio_introduction'] . "</td>";
	    echo "</tr>";
	}
	echo "</table>";
?>