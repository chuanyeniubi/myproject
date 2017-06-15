<?php
	include 'connect.php';


	// SQL语句
	$sql = "select * from indexs ";
	// 获取查询结果
	$res = $conn->query($sql);

	// 使用查询结果集
	$rows = $res->fetch_all(MYSQLI_ASSOC);

	// // 格式化数据
 //    $result = array(
 //    	'pageNo'=>$page,
 //    	'qty'=>$qty,
 //    	'total'=>$conn->query('select count(*) from goods')->fetch_row()[0],
 //    	'data'=>$rows,
 //    );

	echo json_encode($rows,JSON_UNESCAPED_UNICODE);


	//关闭连接
	$conn->close();
?>