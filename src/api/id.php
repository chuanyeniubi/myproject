<?php
//配置参数
	$servername = 'localhost';
	$username = 'root';
	$password = '';
	$database = '123';
//链接数据库
	$conn = new mysqli($servername,$username,$password,$database);

//链接检测
	if($conn->connect_errno){
		die('连接失败'.$conn->connect_error);
	}
//查询数据库
	$id = isset($_GET['id'])?$_GET['id']:1;
	$conn->set_charset('utf8');
	$sql = "select * from lists where id='$id'";
	// $sql = "select id=".$id." from underclothes";

	$res = $conn->query($sql);

	$row = $res->fetch_all(MYSQLI_ASSOC);
	echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>