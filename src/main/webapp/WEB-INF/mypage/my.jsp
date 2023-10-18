<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta data-n-head="ssr" data-hid="viewport" name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover">
<title>마이 페이지</title>
<link rel="stylesheet" href="/kream/css/main.css" type="text/css">
<!-- <link rel="stylesheet" href="/kream/css/footer.css" type="text/css">
<link rel="stylesheet" href="/kream/css/header.css" type="text/css"> -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
      crossorigin="anonymous">
<style>
body {
    margin: 0;
}
header, footer {
    /* background-color: #f1f1f1; */ /* 배경색 설정 (선택 사항) */
}
.footer_hr, .header_hr {
    width: 100%;
}
</style>
</head>
<body>
<div style="width: 100vw; justify-content: center; align-items: center;">
    <!-- header -->
	<jsp:include page="../includeMain/headerMy.jsp"/>
	<br>
    
    <content>
	    <div id="container" style="display: flex; justify-content:center; margin-top:10px;">
	    <%-- <div style="display:flex; justify-content:center; width:100vw;"> --%>
		    <main style="width:1920px; min-height: 220px; justify-content:center;">
			    <div class="nav" style="float: left; width: 320px; padding-left: 200px; padding-bottom: 150px; padding-top: 15px !important;">
			        <jsp:include page="leftSideMenu.jsp" />
			    </div>
				<%-- width: 1150px;  --%>
			    <div class="content" style="float: left; width: 850px; font-weight:bold; padding-left: 50px; padding-top: 5px !important;">
			        <div id="myContent">
			        <!-- 비동기 로드 -->
			            <jsp:include page="defaultMain.jsp" />
			        </div>
			    </div>
			</main>
	    </div>
    </content>
    
	<br>
	<!-- footer -->
	<jsp:include page="../includeMain/footer.jsp"/>

</div>
<script type="text/javascript" src="http://code.jquery.com/jquery-3.7.0.min.js"></script>

</body>
</html>
