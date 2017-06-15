<?php
	include 'connect.php';

	$username = isset($_GET['username']) ? $_GET['username']:'';
	$password = isset($_GET['password']) ? $_GET['password']:'';
	// 加密方式：MD5；
	$password = md5($password);

	
	$sql = "select username from user where username='$username' and password='$password'";
	
	// 获取查询结果
	$res = $conn->query($sql);
		
	if($res->num_rows >0){
		echo 'OK';
	}else{
		echo 'NO';
	}
	// 关闭数据连接
	$conn->close();
?>