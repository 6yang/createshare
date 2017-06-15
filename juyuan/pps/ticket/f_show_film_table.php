<?php
$link = mysqli_connect("127.0.0.1", "root", "","ttms");
if(!$link){
	echo "数据库连接失败".mysqli_connect_error();
}

$sql = "select * from play where play_status = '上映'";
$result = mysqli_query($link, $sql);
while($row = mysqli_fetch_array($result)){
	echo "<div>";
	echo "<span>".$row['play_name']."</span>";
	echo "<img src =' "."img/movie/". $row['play_image'] ."'/>" ;
	echo "<a>点击购票</a>";
	echo "</div>";
}
?>
