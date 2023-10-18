<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Insert title here</title>
<style>
/* 슬라이드 관련 */
figcaption{
	color:#333;
	margin:5px; 
	font-size:0.8em;
}

.slides_container {
	max-width: 1200px;
	max-height: 230px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
}

.owl-nav {
	width: 200px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: 50px;
}

.owl-dots {	
	width: 100px;
	margin-top: 15px;
	display:flex;
	justify-content: space-around;
	align-items: center;
}

.owl-dot {
	width: 10px;
	height: 10px;
	background: #d3d3d3;
	border-radius: 50%;
	border: 0px;
}

.owl-dot.active {
	background: #222;
}

.owl-prev-custom, .owl-next-custom {
	background: transparent;
	border: 0px;
	font-size: 50px;
	line-height: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
}

</style>
<link rel="stylesheet" href="/kream/css/main.css">

<!-- 캐러셀 -->
<link rel="stylesheet" href="/kream/css/carousel/owl.carousel.css">
<link rel="stylesheet" href="/kream/css/carousel/owl.carousel.min.css">
<link rel="stylesheet" href="/kream/css/carousel/owl.theme.default.min.css">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" 
	  rel="stylesheet" 
	  integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" 
	  crossorigin="anonymous">	  
</head>
<!-- header -->
<jsp:include page="\WEB-INF\includeMain\header.jsp"></jsp:include>
<body style="width:100vw;">
<!-- 캐러셀 -->
	<br>	
	<div style="display: flex; justify-content:center;">		
		<div class="slides_container">
			<div class="owl-carousel owl-theme" style="text-align:center; display:flex; justify-content:center;">
				<figure style="margin-bottom:0;">
					<img id="carousel_img0" src="/kream/img/null_img.png" width="100" height="100" style="border-radius: 10px;" alt="">
					<figcaption id="figcaption_img0" style="font-weight:bold;"></figcaption>
				</figure>
				<figure style="margin-bottom:0;">
					<img id="carousel_img1" src="/kream/img/null_img.png" width="100" height="100" style="border-radius: 10px;" alt="">
					<figcaption id="figcaption_img1" style="font-weight:bold;"></figcaption>
				</figure>
				<figure style="margin-bottom:0;">
					<img id="carousel_img2" src="/kream/img/null_img.png" width="100" height="100" style="border-radius: 10px;" alt="">
					<figcaption id="figcaption_img2" style="font-weight:bold;"></figcaption>
				</figure>
				<figure style="margin-bottom:0;">
					<img id="carousel_img3" src="/kream/img/null_img.png" width="100" height="100" style="border-radius: 10px;" alt="">
					<figcaption id="figcaption_img3" style="font-weight:bold;"></figcaption>
				</figure>
				<figure style="margin-bottom:0;">
					<img id="carousel_img4" src="/kream/img/null_img.png" width="100" height="100" style="border-radius: 10px;" alt="">
					<figcaption id="figcaption_img4" style="font-weight:bold;"></figcaption>
				</figure>
				<figure style="margin-bottom:0;">
					<img id="carousel_img5" src="/kream/img/null_img.png" width="100" height="100" style="border-radius: 10px;" alt="">
					<figcaption id="figcaption_img5" style="font-weight:bold;"></figcaption>
				</figure>
				<figure style="margin-bottom:0;">
					<img id="carousel_img6" src="/kream/img/null_img.png" width="100" height="100" style="border-radius: 10px;" alt="">
					<figcaption id="figcaption_img6" style="font-weight:bold;"></figcaption>
				</figure>
				<figure style="margin-bottom:0;">
					<img id="carousel_img7" src="/kream/img/null_img.png" width="100" height="100" style="border-radius: 10px;" alt="">
					<figcaption id="figcaption_img7" style="font-weight:bold;"></figcaption>
				</figure>
				<figure style="margin-bottom:0;">
					<img id="carousel_img8" src="/kream/img/null_img.png" width="100" height="100" style="border-radius: 10px;" alt="">
					<figcaption id="figcaption_img8" style="font-weight:bold;"></figcaption>
				</figure>
				<figure style="margin-bottom:0;">
					<img id="carousel_img9" src="/kream/img/null_img.png" width="100" height="100" style="border-radius: 10px;" alt="">
					<figcaption id="figcaption_img9" style="font-weight:bold;"></figcaption>
				</figure>
				<figure style="margin-bottom:0;">
					<img id="carousel_img10" src="/kream/img/null_img.png" width="100" height="100" style="border-radius: 10px;" alt="">
					<figcaption id="figcaption_img10" style="font-weight:bold;"></figcaption>
				</figure>
				<figure style="margin-bottom:0;">
					<img id="carousel_img11" src="/kream/img/null_img.png" width="100" height="100" style="border-radius: 10px;" alt="">
					<figcaption id="figcaption_img11" style="font-weight:bold;"></figcaption>
				</figure>
				<figure style="margin-bottom:0;">
					<img id="carousel_img12" src="/kream/img/null_img.png" width="100" height="100" style="border-radius: 10px;" alt="">
					<figcaption id="figcaption_img12" style="font-weight:bold;"></figcaption>
				</figure>
				<figure style="margin-bottom:0;">
					<img id="carousel_img13" src="/kream/img/null_img.png" width="100" height="100" style="border-radius: 10px;" alt="">
					<figcaption id="figcaption_img13" style="font-weight:bold;"></figcaption>
				</figure>
				<figure style="margin-bottom:0;">
					<img id="carousel_img14" src="/kream/img/null_img.png" width="100" height="100" style="border-radius: 10px;" alt="">
					<figcaption id="figcaption_img14" style="font-weight:bold;"></figcaption>
				</figure>
				<figure style="margin-bottom:0;">
					<img id="carousel_img15" src="/kream/img/null_img.png" width="100" height="100" style="border-radius: 10px;" alt="">
					<figcaption id="figcaption_img15" style="font-weight:bold;"></figcaption>
				</figure>
				<figure style="margin-bottom:0;">
					<img id="carousel_img16" src="/kream/img/null_img.png" width="100" height="100" style="border-radius: 10px;" alt="">
					<figcaption id="figcaption_img16" style="font-weight:bold;"></figcaption>
				</figure>
				<figure style="margin-bottom:0;">
					<img id="carousel_img17" src="/kream/img/null_img.png" width="100" height="100" style="border-radius: 10px;" alt="">
					<figcaption id="figcaption_img17" style="font-weight:bold;"></figcaption>
				</figure>
				<figure style="margin-bottom:0;">
					<img id="carousel_img18" src="/kream/img/null_img.png" width="100" height="100" style="border-radius: 10px;" alt="">
					<figcaption id="figcaption_img18" style="font-weight:bold;"></figcaption>
				</figure>
				<figure style="margin-bottom:0;">
					<img id="carousel_img19" src="/kream/img/null_img.png" width="100" height="100" style="border-radius: 10px;" alt="">
					<figcaption id="figcaption_img19" style="font-weight:bold;"></figcaption>
				</figure>
				<figure style="margin-bottom:0;">
					<img id="carousel_img20" src="/kream/img/null_img.png" width="100" height="100" style="border-radius: 10px;" alt="">
					<figcaption id="figcaption_img20" style="font-weight:bold;"></figcaption>
				</figure>
			</div>
			
		    <div class="owl-nav">
		        <div class="owl-prev-custom"></div>
			    <div class="owl-dots"></div>
		        <div class="owl-next-custom"></div>
		    </div>
		</div>
	</div>
<hr class="carousel_hr" style="width:1320px">
<div id="container" style="display: flex; justify-content:center; margin-top:10px;">
	<div id="container_center" style="display:flex; justify-content:center; width:1920px;">
	<div style="width:250px;">
	  <div class="filter">
	  	<div class="filternav">
	  		<span class="filter" style="font-weight:bold;">필터</span><br><br>
		    <div id="category1" class="category" style="width:175px; cursor: pointer;">
			    <span style="font-weight:bold;">카테고리</span>
			    <span id="all_category" style="color:#bbb; font-size:25px; float:right;">+</span><br>
			    <span id="all_product" style="font-size:14px; color:gray;">모든 카테고리</span>
			</div>
			<!-- 상품카테고리 -->
			<div class="all_product_view">
				<div class="all_product_shoes"><input class="checkShoes cate1" type="checkbox">신발</div>
					<div class="sub-items1">
					    <div><input class="check_sneakers cate2" type="checkbox">스니커즈</div>
					    <div><input class="check_sandle/sleeper cate2" type="checkbox">샌들/슬리퍼</div>
					    <div><input class="check_plat cate2" type="checkbox">플랫</div>
					    <div><input class="check_loafers cate2" type="checkbox">로퍼</div>
					    <div><input class="check_shoesEtc cate2" type="checkbox">기타</div>
					</div>
				<div class="all_product_outter"><input class="checkOutter cate1" type="checkbox">아우터</div>
					<div class="sub-items2">
					    <div><input class="check_jaket cate2" type="checkbox">자켓</div>
					    <div><input class="check_anolock cate2" type="checkbox">아노락</div>
					    <div><input class="check_coat cate2" type="checkbox">코트</div>
					    <div><input class="check_padding cate2" type="checkbox">패딩</div>
					    <div><input class="check_outterEtc cate2" type="checkbox">기타</div>
					</div>
				<div class="all_product_bag"><input class="checkBag cate1" type="checkbox">가방</div>
					<div class="sub-items3">
					    <div><input class="check_premierBag cate2" type="checkbox">프리미엄 가방</div>
					    <div><input class="check_miniBag cate2" type="checkbox">미니백</div>
					    <div><input class="check_backPack cate2" type="checkbox">백팩</div>
					    <div><input class="check_bagETC cate2" type="checkbox">기타</div>
					</div>
				<div class="all_product_top_cloth"><input  class="checkTopCloth cate1" type="checkbox">상의</div>
					<div class="sub-items4">
					    <div><input class="check_halfTshirt cate2" type="checkbox">반팔 티셔츠</div>
					    <div><input class="check_longTshirt cate2" type="checkbox">긴팔 티셔츠</div>
					    <div><input class="check_cardigun cate2" type="checkbox">가디건</div>
					    <div><input class="check_shirt cate2" type="checkbox">셔츠</div>
					    <div><input class="check_hood cate2" type="checkbox">후드</div>
					    <div><input class="check_hoodie cate2" type="checkbox">후드 집업</div>
					    <div><input class="check_topClothEtc cate2" type="checkbox">기타</div>
					</div>
				<div class="all_product_bottom_cloth"><input  class="checkBottomCloth cate1" type="checkbox">하의</div>
					<div class="sub-items5">
					    <div><input class="check_pants cate2" type="checkbox">바지</div>
					    <div><input class="check_shorts cate2" type="checkbox">반바지</div>
					    <div><input class="check_skirt cate2" type="checkbox">스커트</div>
					    <div><input class="check_bottomClothEtc cate2" type="checkbox">기타</div>
					</div>
				<div class="all_product_bottom_cloth"><input class="checkWatch cate1" type="checkbox">시계</div>
					<div class="sub-items6">
					    <div><input class="check_premierWatch cate2" type="checkbox">프리미엄 시계</div>
					    <div><input class="check_electricWatch cate2" type="checkbox">전자 시계</div>
					    <div><input class="check_leatherWatch cate2" type="checkbox">가죽 시계</div>
					    <div><input class="check_watchEtc cate2" type="checkbox">기타</div>
					</div>
				<div class="all_product_wallet"><input class="checkWallet cate1" type="checkbox">지갑</div>
					<div class="sub-items7">
					    <div><input class="check_halfWallet cate2" type="checkbox">반지갑</div>
					    <div><input class="check_longWallet cate2" type="checkbox">장지갑</div>
					    <div><input class="check_cardWallet cate2" type="checkbox">카드지갑</div>
					    <div><input class="check_walletEtc cate2" type="checkbox">기타</div>
					</div>
			</div>
			<hr width="175px">
			 
			 <!-- 성별 카테고리 -->
		    <div id="category2" class="category" style="width:175px; cursor: pointer;">
			    <span style="font-weight:bold;">성별</span>
			    <span id="genderPlus" style="color:#bbb; font-size:25px; float:right;">+</span><br>
			    <span id="all_gender" style="font-size:14px; color:gray;">모든 성별</span>
		    </div>
		    <div class="all_gender_view">		    
		    	<div><input class="genderAll cate3" type="checkbox">공용</div>
		    	<div><input class="genderMale cate3" type="checkbox">남성</div>
		    	<div><input class="genderFemale cate3" type="checkbox">여성</div>
		    </div>
		    <hr width="175px">
		    
		    <div id="category3" class="category" style="width:175px; cursor: pointer;">
             <span style="font-weight:bold;">브랜드</span><span id="all_category_brand"style="color:#bbb; font-size:25px; float:right;">+</span><br>
             <span id="all_product_brand" style="font-size:14px; color:gray;">모든 브랜드</span>
          </div>
          <div class="all_product_view_brand">
          </div>
          <hr>
		    
		    <div id="category4" class="category" style="width:175px; cursor: pointer;">
		    	<div id="category4Select" style="cursor: pointer;">
		    		<span style="font-weight:bold; cursor: pointer;">사이즈</span>
			    	<span id="sizePlus" style="color:#bbb; font-size:25px; float:right;">+</span><br>
			    	<span id="all_size" style="font-size:14px; color:gray;">모든 사이즈</span>
		    	</div>
		    </div>
		    <hr class="category4_hr" width="175px">
		    <div class="all_size_view">
		    	<div class="shoesSize" style="font-size:0.8em; font-weight:bold">신발</div>
		    	<div>
		    		 <table class="shoesSizeTable">
			        <tr>
			            <td data-value="200" style="cursor: pointer;">200</td>
			            <td data-value="205" style="cursor: pointer;">205</td>
			            <td data-value="210" style="cursor: pointer;">210</td>
			        </tr>
			        <tr>
			            <td data-value="215" style="cursor: pointer;">215</td>
			            <td data-value="220" style="cursor: pointer;">220</td>
			            <td data-value="225" style="cursor: pointer;">225</td>
			        </tr>
			        <tr>
			            <td data-value="230" style="cursor: pointer;">230</td>
			            <td data-value="235" style="cursor: pointer;">235</td>
			            <td data-value="240" style="cursor: pointer;">240</td>
			        </tr>
			        <tr>
			            <td data-value="245" style="cursor: pointer;">245</td>
			            <td data-value="250" style="cursor: pointer;">250</td>
			            <td data-value="255" style="cursor: pointer;">255</td>
			        </tr>
			        <tr>
			            <td data-value="260" style="cursor: pointer;">260</td>
			            <td data-value="265" style="cursor: pointer;">265</td>
			            <td data-value="270" style="cursor: pointer;">270</td>
			        </tr>
			        <tr>
			            <td data-value="275" style="cursor: pointer;">275</td>
			            <td data-value="280" style="cursor: pointer;">280</td>
			            <td data-value="285" style="cursor: pointer;">285</td>
			        </tr>
			        <tr>
			            <td data-value="290" style="cursor: pointer;">290</td>
			            <td data-value="295" style="cursor: pointer;">295</td>
			            <td data-value="300" style="cursor: pointer;">300</td>
			        </tr>
			    </table>   
		    	</div>
		    	
		    	<br><div class="clothSize" style="font-size:0.8em; font-weight:bold">의류</div>
		    	<div>
		    		<table class="topClothSizeTable">
			        <tr>
			            <td data-value="xxs" style="width:50%; cursor: pointer;">XXS</td>
			            <td data-value="xs" style="width:50%; cursor: pointer;">XS</td>
			        </tr>
			        <tr>
			        	<td data-value="s" style="cursor: pointer;">S</td>
			            <td data-value="m" style="cursor: pointer;">M</td>
			        </tr>
			        <tr>
			            <td data-value="l" style="cursor: pointer;">L</td>
			            <td data-value="xl" style="cursor: pointer;">XL</td>
			        </tr>
			        <tr>
			            <td data-value="xxl" style="cursor: pointer;">XXL</td>
			            <td data-value="xxxl" style="cursor: pointer;">XXXL</td>
			        </tr>
			        </table>
			        <table class="bottomClothSizeTable">
			        <tr>
			            <td data-value="28" style="cursor: pointer;">28</td>
			            <td data-value="29" style="cursor: pointer;">29</td>
			            <td data-value="30" style="cursor: pointer;">30</td>
			        </tr>
			        <tr>
			            <td data-value="31" style="cursor: pointer;">31</td>
			            <td data-value="32" style="cursor: pointer;">32</td>
			            <td data-value="33" style="cursor: pointer;">33</td>
			        </tr>
			        <tr>
			            <td data-value="34" style="cursor: pointer;">34</td>
			            <td data-value="35" style="cursor: pointer;">35</td>
			            <td data-value="36" style="cursor: pointer;">36</td>
			        </tr>
			    	</table> 
		    	</div>		    	
		    <hr width="175px">
		    <!-- <hr width="175px"> -->
	    <!-- 성별, 브랜드, 사이즈, 혜택/가격에 대한 유사한 구조 추가 -->
	  	</div>	
	  </div>
	 </div>	
    </div>
    <div class="row row-cols-1 row-cols-md-4 g-4" style="padding-left:60px; width: 1100px;">
			
	</div>
  </div><!-- container -->
</div>
<br>
<!-- footer -->
<jsp:include page="\WEB-INF\includeMain\footer.jsp"></jsp:include>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" 
	    integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" 
		crossorigin="anonymous">
</script>
<!-- partial -->
<script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
<script src="/kream/js/carousel/owl.carousel.min.js"></script>
<script src="/kream/js/shopfilter.js"></script>
<script src="/kream/js/productJS/shopProductCategory.js"></script>
<script src="/kream/js/productJS/shopProductListView.js"></script>
<script src="/kream/js/productJS/shopProductListCarousel.js"></script>
<script>	
$(function () {
	$('.owl-carousel').owlCarousel({
	    items : 7, //화면에 표시 할 슬라이드 수
	    animateOut : 'fadeOut', // 사라질때의 애니메이션
	    margin : 20, // 슬라이드 간격
	    dots : true, // Pagination 표시 여부
	    autoplay : false, // 자동 슬라이드 여부
	    autoplayTimeout : 3000, // 자동 슬라이드 시간 (예제는 3초)
	    loop : false, // 무한 반복 여부
	    nav: true,
	    slideBy: 7,
	    navContainer: '.owl-nav',
	    dotsContainer: '.owl-dots',
	    navClass: ['owl-prev-custom', 'owl-next-custom']
	});
});
</script>
</body>
</html>