<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title><!-- [ 김찬영  2023-10-4 오후 09:51:36 ] -->
</head>
<style type="text/css">
table {
	border-collapse: collapse;
}
th, td {
	padding: 5px;
}
#updateForm div {
	color: red;
	font-size: 8pt;
	font-weight: bold;
}
</style>
<body>
<h1>상품단건조회 폼</h1>
<form id="selectOneForm">
		<table border="1">
		<tr>
			<th>아이디</th>
			<td>
				<input type="text" name="productId" id="productId">
			</td>
		</tr>
		
		<tr>
			<td colspan="2" align="center">
				<input type="button" value="조회" id="searchBtn">
			</td>
		</tr>
	</table>
	<h6>우측에 F12창에 조회된 내용 뜹니다.</h6>
</form>

<script src="http://code.jquery.com/jquery-3.7.0.min.js"></script>
<script type="text/javascript" src="../js/cykJS/cykproductSearch.js"></script>


</body>
</html>