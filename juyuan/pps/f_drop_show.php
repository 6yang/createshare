<?php
$name = $_GET['name'];
$link = mysqli_connect("127.0.0.1", "root", "","ttms");
if(!$link){
	echo "数据库连接失败".mysqli_connect_error();
}
mysqli_query($link,"delete from play where play_name='$name'");

$result = mysqli_query($link,"select * from play");
echo "<table border='1'>
	<tr>
	<th>影片图片</th>
	<th>影片类型</th>
	<th>影片语言</th>
	<th>影片名称</th>
	<th>影片描述</th>
	<th>影片长度</th>
	<th>影片价格</th>
	<th>影片状态</th>
	</tr>";
while($row = mysqli_fetch_array($result)){
	echo "<tr>";
    echo "<td>" ."<img src =' "."img/movie/". $row['play_image'] ."'/>" ."</td>";
    echo "<td>" . $row['play_type_id'] . "</td>";
    echo "<td>" . $row['play_lang_id'] . "</td>";
    echo "<td>" . $row['play_name'] . "</td>";
	echo "<td>" . $row['play_introduction'] . "</td>";
    echo "<td>" . $row['play_length'] . "</td>";
    echo "<td>" . $row['play_ticket_price'] . "</td>";
    echo "<td>" . $row['play_status'] . "</td>";
    echo "</tr>";
}
echo "</table>";
?>