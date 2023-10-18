<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Default Content</title>
<!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" 
	  rel="stylesheet" 
	  integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" 
	  crossorigin="anonymous"> -->
<link rel="stylesheet" href="/kream/css/mypage/mypageMain.css" type="text/css"> 
<link rel="stylesheet" href="/kream/css/mypage/defaultMain.css" type="text/css"> 
<!-- <link rel="stylesheet" href="/kream/css/cd94494.css" type="text/css">
<link rel="stylesheet" href="/kream/css/efffbde.css" type="text/css">
<link rel="stylesheet" href="/kream/css/c9eea23.css" type="text/css"> -->
</head>
<body>

<div class="container my lg content_area my-page-content">
    <div class="my_home">
        <div class="user_membership">
            <div class="user_detail">
                <div class="user_thumb">
                    <img src="/kream/img/blank_profile.png" alt="사용자 이미지" class="thumb_img">
                </div>
                <div class="user_info">
                    <div class="info_box">
                        <strong class="name">${user.nickname}</strong>
                        <p class="email"> ${maskedEmail} </p>
                        <a href="${pageContext.request.contextPath}/my/profile-edit" id="goProfileEdit" class="btn btn outlinegrey small" type="button"> 프로필 관리 </a>
                        <a href="/social/users/@2g22bbi1" class="btn btn btn_my_style outlinegrey small" type="button"> 내 스타일 </a>
                    </div>
                </div>
            </div>
            <div class="membership-menu">
                <a href="/my/point" class="menu-item">
                    <div class="icon-wrap">
                        <img src="/kream/img/ico-my-shortcut-point.png" name="ico-my-shortcut-point" width="28" height="28" class="icon">
                        <!---->
                    </div>
                    <span class="name">0P</span>
                </a>
                <a href="/my/coupon" class="menu-item">
                    <div class="icon-wrap">
                        <img src="/kream/img/ico-my-shortcut-coupon.png" name="ico-my-shortcut-coupon" width="28" height="28" class="icon">
                        <!---->
                    </div>
                    <span class="name">쿠폰 0</span>
                </a>
                <a href="/notice" class="menu-item">
                    <div class="icon-wrap">
                        <img src="/kream/img/ico-my-shortcut-announce.png" name="ico-my-shortcut-announce" width="28" height="28" class="icon">
                        <span class="badge"></span>
                    </div>
                    <span class="name">공지사항</span>
                </a>
            </div>
        </div>
        <div class="inventory_box">
            <div>
	            <div class="my_home_title">
	            <h3 class="title"> 구매 내역 </h3>
	            <a href="my" id="buyingMore" class="btn_more">
	                <span class="btn_txt">더보기</span>
	                <img src="/kream/img/more.png" alt="더보기" class="more">
	               <!--  	<use href="/_nuxt/b685a18dbba161b5c3cf613cb39a8946.svg#i-arr-right-gray" xlink:href="/_nuxt/b685a18dbba161b5c3cf613cb39a8946.svg#i-arr-right-gray"></use>
	                <svg xmlns="http://www.w3.org/2000/svg" class="icon sprite-icons arr-right-gray">
	                    <use href="/_nuxt/b685a18dbba161b5c3cf613cb39a8946.svg#i-arr-right-gray" xlink:href="/_nuxt/b685a18dbba161b5c3cf613cb39a8946.svg#i-arr-right-gray"></use>
	                </svg> -->
	            </a>
	       		</div>
		        <div class="recent_purchase">
		            <div class="purchase_list_tab">
		                <div class="tab_item total">
		                    <a href="#" class="tab_link">
		                        <dl class="tab_box">
		                            <dt class="title">전체</dt>
		                            <dd class="count">0</dd>
		                        </dl>
		                    </a>
		                </div>
		                <div class="tab_item tab_on">
		                    <a href="#" class="tab_link">
		                        <dl class="tab_box">
		                            <dt class="title">입찰 중</dt>
		                            <dd class="count">0</dd>
		                        </dl>
		                    </a>
		                </div>
		                <div class="tab_item">
		                    <a href="#" class="tab_link">
		                        <dl class="tab_box">
		                            <dt class="title">진행 중</dt>
		                            <dd class="count">0</dd>
		                            <!---->
		                        </dl>
		                    </a>
		                </div>
		                <div class="tab_item">
		                    <a href="#" class="tab_link">
		                        <dl class="tab_box">
		                            <dt class="title">종료</dt>
		                            <dd class="count">0</dd>
		                        </dl>
		                    </a>
		                </div>
		            </div>
		            <div>
		                <div class="purchase_list all bid">
		                    <!---->
		                    <div class="empty_area">
		                        <p class="desc">구매 내역이 없습니다.</p>
		                        <!---->
		                    </div>
		                    <div class="v-portal" style="display: none;"></div>
		                </div>
		                <!---->
		            </div>
		        </div>
            </div>
            <div class="banner_inventory available">
                <a href="#" class="banner_link">
                    <div class="banner_detail">
                        <p class="banner_title">보관 신청하기</p>
                        <p class="banner_desc">한 번에 신청하고 한 번에 발송하세요.</p>
                    </div>
                </a>
                <!---->
                <!---->
            </div>
        </div>
        <div class="my_home_title">
            <h3 class="title"> 관심 상품 </h3>
            <a href="my" id="savedMore" class="btn_more">
                <span class="btn_txt">더보기</span>
                <img src="/kream/img/more.png" alt="더보기" class="more">
              <!--   	<use href="/_nuxt/b685a18dbba161b5c3cf613cb39a8946.svg#i-arr-right-gray" xlink:href="/_nuxt/b685a18dbba161b5c3cf613cb39a8946.svg#i-arr-right-gray"></use>
                <svg  xmlns="http://www.w3.org/2000/svg" class="icon sprite-icons arr-right-gray">
                    <use href="/_nuxt/b685a18dbba161b5c3cf613cb39a8946.svg#i-arr-right-gray" xlink:href="/_nuxt/b685a18dbba161b5c3cf613cb39a8946.svg#i-arr-right-gray"></use>
                </svg> -->
            </a>
        </div>
        <div class="interest_product">
            <div class="product_list">
<c:forEach var="product" items="${wishList}">
                <div class="product_item">
                    <a href="#" class="item_inner">
                        <div class="thumb_box">
                            <div class="product" style="background-color: rgb(244, 244, 244);">
                                <div class="product_inner_tag display_tag_item">
                                    <!---->
                                    <span> </span>
                                </div>
                                <picture class="picture product_img">
                                    <img alt="${product.productExplain}" src="/kream/storage/${product.productImg1}" loading="lazy" class="image full_width">
                                </picture>
                                <!---->
                                <!---->
                                <!---->
                                <span aria-label="관심상품" role="button" class="btn_wish">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon sprite-icons ico-wish-on">
                                        <use href="/_nuxt/b685a18dbba161b5c3cf613cb39a8946.svg#i-ico-wish-on" xlink:href="/_nuxt/b685a18dbba161b5c3cf613cb39a8946.svg#i-ico-wish-on">
                                        </use>
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div class="info_box">
                            <div class="brand">
                                <!---->
                                <p class="brand-text">${product.brand}</p>
                                <!---->
                            </div>
                            <p class="name">${product.productExplain}</p>
                            <span class="productNum" style="display: none">${product.productId}</span>
                            <div class="tags">
                                <div class="tag display_tag_item" style="background-color: rgb(242, 249, 246); color: rgb(49, 180, 110);">
                                    <div class="tag_icon">
                                        <img src="https://kream-phinf.pstatic.net/MjAyMjA4MTlfMjQg/MDAxNjYwODg3Mjk2NzI3.BrA9HdxKlK4SE_Nv8rSN-enO_kgRJJbWNRSn88dwX-sg.HSU5wh9arezj6oeAUj0Ju3e_Atzp4i9BNdZxeHeaw4sg.PNG/a_82699e0f38f24003897bcfc6ee5c84eb.png" class="icon">
                                    </div>
                                    <span> 빠른배송 </span>
                                </div>
                            </div>
                            <div class="price">
                                <div class="amount lg">
                                    <!---->
                                    <fmt:formatNumber type="number" value="${product.price}" pattern="#,###" var="formattedPrice"/>
                                    <em class="num">${formattedPrice}원 </em>
                                </div>
                                <div class="desc">
                                    <p>즉시 구매가</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
</c:forEach>
            </div>
            <!---->
        </div>
        <!---->
    </div>
</div>

<script type="text/javascript" src="http://code.jquery.com/jquery-3.7.0.min.js"></script>
<script type="text/javascript" src="../js/#"></script>
<script type="text/javascript">
/*
$.ajax({
    type: "GET",
    url: "/getSession",
    success: function(response) {
        var userEmail = response.email;
        console.log("세션 값: " + userEmail);
    }
});*/
</script>
<script type="text/javascript">
$(document).ready(function() {
    // 프로필 관리 버튼 클릭 이벤트 처리
    $("#goProfileEdit").on("click", function(e) {
        e.preventDefault(); // 기본 이벤트 방지

        var url = $(this).attr("href"); // 클릭한 링크의 주소를 가져옴
        $.ajax({
            url: url, // 프로필 관리 페이지의 주소로 설정
            method: "GET",
            success: function(response) {
                $("#myContent").html(response); // content 영역에 불러온 페이지 내용을 업데이트
            }
        });
    });
    
    // 더보기 클릭시 구매내역 페이지로 이동
    $("#buyingMore").on("click", function(e) {
        e.preventDefault();
        alert("test");
        
     	// saved.jsp와 leftsidemenu.jsp의 내용을 각각 가져와서 로드
        $.when(
            $.ajax({
                url: "/kream/my/buying",
                method: "GET",
                dataType: "html"
            }),
            $.ajax({
                url: "/kream/my/leftSideMenu", // leftsidemenu.jsp의 실제 경로로 변경해야 합니다.
                method: "GET",
                dataType: "html"
            })
        ).done(function(buyingResponse, leftsidemenuResponse) {
            // 두 페이지의 내용을 받아왔을 때 실행되는 부분

            // buying.jsp의 내용을 #myContent에 삽입
            $("#myContent").html(buyingResponse[0]);
            // leftsidemenu.jsp의 내용을 .sidebar에 삽입
            $(".sidebar").html(leftsidemenuResponse[0]);
			
            // 이후에 필요한 초기화 로직 등을 실행할 수 있습니다.
            $(".sidebar a").removeClass("active");
            $('#myBuying').addClass("active");
        });
    }); //#savedMore
    
    
    // 더보기 클릭시 관심상품 페이지로 이동
    $("#savedMore").on("click", function(e) {
        e.preventDefault();
        
     	// saved.jsp와 leftsidemenu.jsp의 내용을 각각 가져와서 로드
        $.when(
            $.ajax({
                url: "/kream/saved",
                method: "GET",
                dataType: "html"
            }),
            $.ajax({
                url: "/kream/my/leftSideMenu", // leftsidemenu.jsp의 실제 경로로 변경해야 합니다.
                method: "GET",
                dataType: "html"
            })
        ).done(function(savedResponse, leftsidemenuResponse) {
            // 두 페이지의 내용을 받아왔을 때 실행되는 부분

            // saved.jsp의 내용을 #myContent에 삽입
            $("#myContent").html(savedResponse[0]);
            // leftsidemenu.jsp의 내용을 .sidebar에 삽입
            $(".sidebar").html(leftsidemenuResponse[0]);
			
            // 이후에 필요한 초기화 로직 등을 실행할 수 있습니다.
            $(".sidebar a").removeClass("active");
            $('#mySaved').addClass("active");
        });
    }); //#savedMore
});

$(function(){
 	// 관심상품의 해당 페이지로 이동
    $('.product_item').on('click', function(e){
    	e.preventDefault();
		var productId = $(this).closest('.product_item').find('.productNum').text();
		//console.log(productId);
		window.location.href = '/kream/product/productsForm?productId=' + productId + '&page=1';
	});	
});
</script>
</body>
</html>