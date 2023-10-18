<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title><!-- [ 김찬영  2023-10-4 오후 09:51:36 ] -->
</head>
<style>
.done{
	color: green;
}
.ing{
	color: red;
}
.orange{
	color: orange;
}
</style>
<body style="text-align: center;">
<jsp:include page="cykheader.jsp"/>

<h3>*** 찬영의메인화면!! ***</h3> <br>
	<p><a href="/kream/ranking/cykproductwriteForm" class="done">단순입력-(이미지 안들어가는거)</a></p>
	<p><a href="/kream/ranking/cykproductOneForm" class="done">상품단건조회!!</a></p>
 	<p><a href="/kream/ranking/cykproductListForm" class="done">상품출력-사진은없음.</a></p>
 	<p><a href="/kream/ranking/cykuploadForm" class="done">업로드 폼 !!!이거쓰지 마시오!!</a></p>
 	<p><a href="/kream/ranking/cykuploadForm_AJax" class="done">업로드 아작스 폼!</a></p>
 	<p><a href="/kream/ranking/cykupload_list_AJax" class="done">여기서 부터 시작(아작스업로드)</a></p>
 	<p><a href="/kream/ranking/rankingMain" class="ing">랭킹</a></p>
 	<p><a href="/kream/admin/adminMain" class="orange">어드민데이터입력</a></p>
<jsp:include page="cykfooter.jsp"/>
</body>
</html>