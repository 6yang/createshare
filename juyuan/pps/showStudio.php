<?php
$link = mysqli_connect("127.0.0.1","root","");
if(!$link){
	echo "数据库连接失败";
}

mysqli_select_db($link, "ttms");

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