<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>


<link rel="stylesheet" href="/kream/css/mypage/myHeader.css">
<div style="clear:both; display:flex; justify-content:center; width:100vw;">
<header style="width:1920px; height:183px;">
<div id="header">
   <div style="width:1900px; clear:both; display:flex;">
      <h1 class="logo"><a href="#">LOGO</a></h1>
      <div class="topnav">
         <span><a href="#">고객센터</a></span>
      <c:if test="${ sessionScope.userEmail == null }">
		 <span><a href="/kream/login">마이페이지</a></span>
         <span><a href="/kream/login">관심상품</a></span>
      </c:if>
      <c:if test="${ sessionScope.userEmail != null}">
         <span><a href="/kream/my">마이페이지</a></span>
         <span><a href="/saved">관심상품</a></span>
	  </c:if> 
      <c:if test="${ sessionScope.userEmail == null }">
         <span><a href="/kream/login">로그인</a></span>
      </c:if>
      <c:if test="${ sessionScope.userEmail != null}">
			<h3><a href="/kream/logout">로그아웃</a></h3>
	  </c:if>
         
         <div class="topnav2">
            <span><a href="/kream">HOME</a></span>
            <span><a href="#" style="font-weight:bold;">SHOP</a></span>
            <span><a href="#"><img style="width:25px; height:25px;" src="/kream/img/search.png" alt="Search"></a></span>
         </div>
      </div>
   </div>
</div><!-- header -->
</header>
</div>
<hr class="header_hr">
