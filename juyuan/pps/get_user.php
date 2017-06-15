<?php
$link = mysqli_connect("127.0.0.1", "root", "","ttms");
if(!$link){
	echo "数据库连接失败".mysqli_connect_error();
}
$sql  = "select * from user";
$re = mysqli_query($link, $sql);
echo "<table border='1'>
	<tr>
	<th>售票员ID</th>
	<th>账户名</th>
	<th>密码</th>
	<th>身份</th>
	</tr>";
while($rows = mysqli_fetch_array($re)){
	echo "<tr>";
	echo "<td>".$rows['uid']."</td>";
	echo "<td>".$rows['uname']."</td>";
	echo "<td>".$rows['upassword']."</td>";
	echo "<td>".$rows['uper']."</td>";
	echo "</tr>";
}	
echo "</table>";
?>