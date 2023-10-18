<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>관심 상품</title>
    <link rel="stylesheet" href="/kream/css/mypage/mypageMain.css" type="text/css">
    <link rel="stylesheet" href="/kream/css/saved.css" type="text/css">
	<!-- <link rel="stylesheet" href="/kream/css/mypage/cd94494.css" type="text/css">
    <link rel="stylesheet" href="/kream/css/mypage/efffbde.css" type="text/css">
    <link rel="stylesheet" href="/kream/css/mypage/c9eea23.css" type="text/css"> -->
<style type="text/css">

</style>
</head>
<body>
<div class="content_area my-page-content">
    <div class="content_title border">
        <div class="title">
            <h3>관심 상품</h3>
            <!---->
        </div>
        <!---->
    </div>  
<c:forEach var="product" items="${wishList}">
    <div class="my_interest">
        <ul class="wish_list">
            <li>
                <div class="wish_item">
                    <div class="wish_product">
                        <div class="product_box">
                            <div class="product" style="background-color: rgb(244, 244, 244);">
                                <div class="product_inner_tag display_tag_item">
                                    <!---->
                                    <span> </span>
                                </div>
                                <picture class="picture product_img">
    								<img alt="상품 이미지" src="/kream/storage/${product.productImg1}" loading="lazy" class="image full_width" alt="">
                                </picture>
                                <!---->
                            <!---->
                            <!---->
                            </div>
                        </div>
                        <div class="product_detail" style="width: 540px">
                            <div class="brand_link">
                                <a href="#" class="brand-text"> ${product.brand} </a>
                                <!---->
                            </div>
                            <p class="name">${product.productExplain}</p>
                            <span class="size">${product.size}</span>
                            <span class="productNum" style="display: none">${product.productId}</span>
                        </div>
                        <div class="wish_buy">
                            <div>
                                <div class="division_btn_box lg">
                                    <a href="#" disabled="disabled"class="blind btn_division">버튼</a>
                                    <button class="btn_action" style="background-color: rgb(239, 98, 83);">
                                        <strong class="title">구매</strong>
                                        <div class="price">
                                            <spanclass="amount">
                                            	<fmt:formatNumber type="number" value="${product.price}" pattern="#,###" var="formattedPrice"/>
                                                <em class="num">${formattedPrice}</em>
                                                <span class="won">원</span>
                                            </spanclass=>
                                            <span class="desc">즉시 구매가</span>
                                        </div>
                                    </button>
                                </div>
                                <a href="#" class="status_link deleteButton"> 삭제 </a>
                            </div>
                            <!---->
                        </div>
                    </div>
                </div>
            </li>
        </ul>
</c:forEach>
<div class="sessionEmail" style="display:none;">${userEmail}</div>
        <div class="pagination">
            <div class="pagination_box first last">
                <div class="prev_btn_box">
                    <a href="/saved?page=1" class="btn_arr" aria-label="첫 페이지">
                        <svg xmlns="http://www.w3.org/2000/svg" class="arr-page-first icon sprite-icons">
                            <use href="/_nuxt/b685a18dbba161b5c3cf613cb39a8946.svg#i-arr-page-first" xlink:href="/_nuxt/b685a18dbba161b5c3cf613cb39a8946.svg#i-arr-page-first"></use>
                        </svg>
                    </a>
                    <a href="/saved?page=0" class="btn_arr" aria-label="이전 페이지">
                        <svg xmlns="http://www.w3.org/2000/svg" class="arr-page-prev icon sprite-icons">
                            <use href="/_nuxt/b685a18dbba161b5c3cf613cb39a8946.svg#i-arr-page-prev" xlink:href="/_nuxt/b685a18dbba161b5c3cf613cb39a8946.svg#i-arr-page-prev"></use>
                        </svg>
                    </a>
                </div>
                <div class="page_bind">
                    <a href="/saved?page=1" class="btn_page active" aria-label="1페이지"> 1 </a>
                </div>
                <div class="next_btn_box">
                    <a href="/saved?page=2" class="btn_arr" aria-label="다음 페이지">
                        <svg xmlns="http://www.w3.org/2000/svg" class="arr-page-next icon sprite-icons">
                            <use href="/_nuxt/b685a18dbba161b5c3cf613cb39a8946.svg#i-arr-page-next" xlink:href="/_nuxt/b685a18dbba161b5c3cf613cb39a8946.svg#i-arr-page-next"></use>
                        </svg>
                    </a>
                    <a href="/saved?page=1" class="btn_arr" aria-label="마지막 페이지">
                        <svg xmlns="http://www.w3.org/2000/svg" class="arr-page-last icon sprite-icons">
                            <use href="/_nuxt/b685a18dbba161b5c3cf613cb39a8946.svg#i-arr-page-last" xlink:href="/_nuxt/b685a18dbba161b5c3cf613cb39a8946.svg#i-arr-page-last"></use>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <!---->
</div>
<script type="text/javascript" src="http://code.jquery.com/jquery-3.7.0.min.js"></script>
<script type="text/javascript" src="../js/#"></script>
<script type="text/javascript">

//product
/*
$.ajax({
    type: "GET",
    url: "/getSession",
    success: function(response) {
        var userEmail = response.email;
        console.log("세션 값: " + userEmail);
    }
});*/

// 관심상품의 해당 페이지로 이동
$(function(){
	$('.product_box, .product_detail').on('click', function(){
		var productId = $(this).closest('.wish_item').find('.productNum').text();
		console.log(productId);
		window.location.href = '/kream/product/productsForm?productId=' + productId + '&page=1';
	});
});

// 관심상품 삭제
$(function(){
	$('.deleteButton').on('click', function(){
		var button = $(this);
		
		var productId = $(this).closest('.wish_item').find('.productNum').text();
		var userEmail = $('.sessionEmail').text();
		
		console.log(productId);
		console.log(userEmail);
		
		if(confirm('※주의 : 정말 상품을 삭제하시겠습니까?')){
			$.ajax({
				type: "POST",
				url: "/kream/saved",
				data: {
					productId : productId,
					email : userEmail
				},
				cache: false,
				success: function(data){
					alert("관심상품이 삭제되었습니다.");
					//$(this).closest('.wish_item').remove();
					button.closest('.wish_item').remove();
				},
				error: function(e) {
					console.log(e);
				}
			});
		}; //if
	});
});
</script>
</body>
</html>
