<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<link rel="stylesheet" href="/kream/css/header.css">
<div style="clear:both; display:flex; justify-content:center; width:100vw;">
<header style="width:1920px; height:183px;">
<div id="header">
	<div style="width:1900px; clear:both; display:flex;">
		<h1 class="logo"><a href="/kream/shopMain.jsp">LOGO</a></h1>
		<div class="topnav">
			<span><a href="#">고객센터</a></span>
			      <c:if test="${ sessionScope.userEmail == null }">
		 <span><a href="/kream/login">마이페이지</a></span>
         <span><a href="/kream/login">관심상품</a></span>
      </c:if>
      <c:if test="${ sessionScope.userEmail != null}">
         <span><a href="/kream/my">마이페이지</a></span>
         <span><a href="/kream/saved" id="saved">관심상품</a></span>
	  </c:if> 
      <c:if test="${ sessionScope.userEmail == null }">
         <span><a href="/kream/login">로그인</a></span>
      </c:if>
      <c:if test="${ sessionScope.userEmail != null}">
		 <span><a href="/kream/logout">로그아웃</a></span>
	  </c:if>
	  <c:if test="${ sessionScope.userEmail == 'master'}">
			<span><a href="/kream/admin/adminMain">관리자페이지</a></span>
	  </c:if>
			
			<div class="topnav2">
				<div class="rankingDiv"><a href="/kream/ranking/rankingMain" style="font-weight:bold;">RANK</a></div>
				<div class="searchImgDiv"><a href="#"><img style="width:25px; height:25px;" src="/kream/img/search.png" alt="Search"></a>
				<input type="text" id="searchInput" placeholder="카테고리, 상품이름, 브랜드 입력"></div>
			</div>
		</div>
	</div>	
			
	<div><a class="title" href="/kream/shopMain.jsp">SHOP</a></div>
	
	<div style="width:1900px; clear:both; display:flex;">
		<h2 class="blind">main navigation</h2>
		<div class="mainnav">
			<span><a href="/kream/shopMain.jsp" id="product_all">전체</a></span>
			<span><a href="#" id="신발" data-value="신발">신발</a></span>
			<span><a href="#" id="가방" data-value="가방">가방</a></span>
			<span><a href="#" id="아우터" data-value="아우터">아우터</a></span>
			<span><a href="#" id="상의" data-value="상의">상의</a></span>
			<span><a href="#" id="하의" data-value="하의">하의</a></span>
			<span><a href="#" id="지갑" data-value="지갑">지갑</a></span>
			<span><a href="#" id="시계" data-value="시계">시계</a></span>
		</div>
	</div>
</div><!-- header -->
</header>
</div>
<hr class="header_hr">