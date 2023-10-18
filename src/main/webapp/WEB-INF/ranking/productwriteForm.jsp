<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title><!-- [ 김찬영  2023-10-4 오후 09:51:36 ] -->
<style type="text/css">
table {
	border-collapse: collapse;
}
th, td {
	padding: 5px;
}
#writeForm div {
	color: red;
	font-size: 8pt;
	font-weight: bold;
}
</style>
</head>
<body>
<form id="writeForm">
		<table border="1">
		<tr>
			<td colspan="2" align="center">
				<input type="button" value="입력" id="writeBtn">
				<input type="reset" value="취소">
			</td>
		</tr>
	</table>
</form>

<script src="http://code.jquery.com/jquery-3.7.0.min.js"></script>
<script type="text/javascript" src="../js/cykJS/cykwriteProduct.js"></script>
</body>
</html>









