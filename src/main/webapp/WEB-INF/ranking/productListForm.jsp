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
	width: 200px;
}

#currentPaging {
	border: 1px solid #ccc;
	margin: 5px;
	padding: 5px 8px;
	color: red;
	cursor: pointer;
}
#paging {
	color: black;
	margin: 5px;
	padding: 5px;
	cursor: pointer;
}

.subjectA:link { color: black; text-decoration: none;}
.subjectA:visited { color: black; text-decoration: none;}
.subjectA:hover { color: red; text-decoration: underline;}
.subjectA:active { color: black; text-decoration: none;}
</style>
</head>
<body>
<input type="text" id="pg" value="${pg}">
<h6>상품리스트 출력 화면 입니다.</h6>
<a href="homeTest"> <img src="../img/logo.png" width="100" height="100" alt="크림"> </a>

<table border="1" frame="hsides" rules="rows" id="productListTable">
	<tr>
		<th>아이디</th>
		<th>카테고리</th>
		<th>가격</th>
	</tr>
</table>
<div id="productPagingDiv" style="width: 600px; text-align: center; margin-top:10px;"></div>

<script src="http://code.jquery.com/jquery-3.7.0.min.js"></script>
<script type="text/javascript" src="../js/cykJS/cykproductList.js"></script>
<script type="text/javascript">
function productPaging(pg){
	location.href= "/kream/ranking/cykproductListForm?pg=" + pg;
}
</script>

</body>
</html>