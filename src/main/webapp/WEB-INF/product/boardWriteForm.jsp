<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta data-n-head="ssr" data-hid="viewport" name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=yes, viewport-fit=cover">
    <title>QuestionWrite</title>
    <link href="../css/boardWriteForm.css" type="text/css" rel="stylesheet">
</head>
<body>
<img style="width: 70px;" src="../img/logo.png">
<div id="mainContainer">
    <div id="titleDiv">
        <div style="margin: 0 10px 0 0; font-size: 1.1em;">제목</div>
        <input id="title" type="text">
        <div id="securityDiv">
            <input type="checkbox" id="securityCheck" name="security">
            <label for="securityCheck">비밀글</label>
            <input id="security" type="hidden" value="0">
        </div>
    </div>
    <div style="margin: 20px 0 0 0; font-size: 1.1em; ">문의사항</div>
    <div id="boardContentDiv">
        <textarea id="boardContent"></textarea>
    </div>
    <div id="btnDiv">
        <button id="closeBtn" type="button">닫기</button>
        <button type="reset">재작성</button>
        <button id="submitBtn" type="button">제출</button>
    </div>
</div>
<input id="productId" type="hidden" value="${param.productId}">
<input id="nickname" type="hidden" value="${param.nickname}">

<script src="http://code.jquery.com/jquery-3.7.0.min.js"></script>
<script src="../js/boardWriteForm.js"></script>
</body>
</html>
