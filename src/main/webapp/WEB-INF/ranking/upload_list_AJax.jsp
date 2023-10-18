<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css" href="../css/reset.css">
<style type="text/css">
	#imageListTable{
		width: 500px;
	}
</style>
</head>
<body>

<div class="home_products">
	<h1>남성 신발 인기순위</h1>
</div>
<table id="imageListTable" border="1" frame="hsides" rules="rows">
	<tr>
		<th width="100">번호</th>
		<th width="200">이미지</th>
		<th width="200">상품명</th>
	</tr>
	<!-- 동적처리 -->
</table>
<input type="button" class="test1">
<script src="http://code.jquery.com/jquery-3.7.0.min.js"></script>
<script type="text/javascript" src="../js/cykJS/cykupload_list_Ajax.js"></script>
</body>
</html>