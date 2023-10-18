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

<jsp:include page="../includeMain/header.jsp"></jsp:include>
<body style="width:100vw;">
<!-- 캐러셀 -->	
	<div style="display: flex; justify-content:center;">		
		<div class="slides_container">
			<div class="owl-carousel owl-theme" style="text-align:center; display:flex; justify-content:center;">
				<figure style="margin-bottom:0;">
					<img id="carousel_img0" src="/kream/img/null_img.png" width="100" height="100" alt="">
					<figcaption id="figcaption_img0" style="font-weight:bold;"></figcaption>
				</figure>
				<figure style="margin-bottom:0;">
					<img id="carousel_img1" src="/kream/img/null_img.png" width="100" height="100" alt="">
					<figcaption id="figcaption_img1" style="font-weight:bold;"></figcaption>
				</figure>
				<figure style="margin-bottom:0;">
					<img id="carousel_img2" src="/kream/img/null_img.png" width="100" height="100" alt="">
					<figcaption id="figcaption_img2" style="font-weight:bold;"></figcaption>
				</figure>
				<figure style="margin-bottom:0;">
					<img id="carousel_img3" src="/kream/img/null_img.png" width="100" height="100" alt="">
					<figcaption id="figcaption_img3" style="font-weight:bold;"></figcaption>
				</figure>
				<figure style="margin-bottom:0;">
					<img id="carousel_img4" src="/kream/img/null_img.png" width="100" height="100" alt="">
					<figcaption id="figcaption_img4" style="font-weight:bold;"></figcaption>
				</figure>
				<figure style="margin-bottom:0;">
					<img id="carousel_img5" src="/kream/img/null_img.png" width="100" height="100" alt="">
					<figcaption id="figcaption_img5" style="font-weight:bold;"></figcaption>
				</figure>
				<figure style="margin-bottom:0;">
					<img id="carousel_img6" src="/kream/img/null_img.png" width="100" height="100" alt="">
					<figcaption id="figcaption_img6" style="font-weight:bold;"></figcaption>
				</figure>
				<figure style="margin-bottom:0;">
					<img id="carousel_img7" src="/kream/img/null_img.png" width="100" height="100" alt="">
					<figcaption id="figcaption_img7" style="font-weight:bold;"></figcaption>
				</figure>
				<figure style="margin-bottom:0;">
					<img id="carousel_img8" src="/kream/img/null_img.png" width="100" height="100" alt="">
					<figcaption id="figcaption_img8" style="font-weight:bold;"></figcaption>
				</figure>
				<figure style="margin-bottom:0;">
					<img id="carousel_img9" src="/kream/img/null_img.png" width="100" height="100" alt="">
					<figcaption id="figcaption_img9" style="font-weight:bold;"></figcaption>
				</figure>
				<figure style="margin-bottom:0;">
					<img id="carousel_img10" src="/kream/img/null_img.png" width="100" height="100" alt="">
					<figcaption id="figcaption_img10" style="font-weight:bold;"></figcaption>
				</figure>
				<figure style="margin-bottom:0;">
					<img id="carousel_img11" src="/kream/img/null_img.png" width="100" height="100" alt="">
					<figcaption id="figcaption_img11" style="font-weight:bold;"></figcaption>
				</figure>
				<figure style="margin-bottom:0;">
					<img id="carousel_img12" src="/kream/img/null_img.png" width="100" height="100" alt="">
					<figcaption id="figcaption_img12" style="font-weight:bold;"></figcaption>
				</figure>
				<figure style="margin-bottom:0;">
					<img id="carousel_img13" src="/kream/img/null_img.png" width="100" height="100" alt="">
					<figcaption id="figcaption_img13" style="font-weight:bold;"></figcaption>
				</figure>
				<figure style="margin-bottom:0;">
					<img id="carousel_img14" src="/kream/img/null_img.png" width="100" height="100" alt="">
					<figcaption id="figcaption_img14" style="font-weight:bold;"></figcaption>
				</figure>
				<figure style="margin-bottom:0;">
					<img id="carousel_img15" src="/kream/img/null_img.png" width="100" height="100" alt="">
					<figcaption id="figcaption_img15" style="font-weight:bold;"></figcaption>
				</figure>
				<figure style="margin-bottom:0;">
					<img id="carousel_img16" src="/kream/img/null_img.png" width="100" height="100" alt="">
					<figcaption id="figcaption_img16" style="font-weight:bold;"></figcaption>
				</figure>
				<figure style="margin-bottom:0;">
					<img id="carousel_img17" src="/kream/img/null_img.png" width="100" height="100" alt="">
					<figcaption id="figcaption_img17" style="font-weight:bold;"></figcaption>
				</figure>
				<figure style="margin-bottom:0;">
					<img id="carousel_img18" src="/kream/img/null_img.png" width="100" height="100" alt="">
					<figcaption id="figcaption_img18" style="font-weight:bold;"></figcaption>
				</figure>
				<figure style="margin-bottom:0;">
					<img id="carousel_img19" src="/kream/img/null_img.png" width="100" height="100" alt="">
					<figcaption id="figcaption_img19" style="font-weight:bold;"></figcaption>
				</figure>
				<figure style="margin-bottom:0;">
					<img id="carousel_img20" src="/kream/img/null_img.png" width="100" height="100" alt="">
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
			<div class="all_product_view">
				<div class="all_product_shoes"><input class="check_shoes" type="checkbox">신발</div>
					<div class="sub-items1">
					    <div><input class="check_sneakers" type="checkbox">스니커즈</div>
					    <div><input class="check_sandle/sleeper" type="checkbox">샌들/슬리퍼</div>
					    <div><input class="check_plat" type="checkbox">플랫</div>
					    <div><input class="check_loafers" type="checkbox">로퍼</div>
					</div>
			</div>
			<hr width="175px">
			 
		    <div id="category2" class="category" style="width:175px; cursor: pointer;">
			    <span style="font-weight:bold;">성별</span><span class="toggle" style="color:#bbb; font-size:25px; float:right;">+</span><br>
			    <span style="font-size:14px; color:gray;">모든 성별</span>
		    <hr>
		    </div>
		    
		    <div id="category3" class="category" style="width:175px; cursor: pointer;">
			    <span style="font-weight:bold;">브랜드</span><span style="color:#bbb; font-size:25px; float:right;">+</span><br>
			    <span style="font-size:14px; color:gray;">모든 브랜드</span>
		    <hr>
		    </div>
		    
		    <div id="category4" class="category" style="width:175px; cursor: pointer;">
			    <span style="font-weight:bold;">사이즈</span><span style="color:#bbb; font-size:25px; float:right;">+</span><br>
			    <span style="font-size:14px; color:gray;">모든 사이즈</span>
		    <hr>
		    </div>
	
			<div id="category5" class="category" style="width:175px; cursor: pointer;">
			    <span style="font-weight:bold;">혜택/가격</span><span style="color:#bbb; font-size:25px; float:right;">+</span><br>
			    <span style="font-size:14px; color:gray;">모든 혜택/가격</span>
		    <hr>
		    </div>
	  	</div>	
	  </div>
	</div>
	
	<div class="row row-cols-1 row-cols-md-4 g-4" style="padding-left:60px; width: 1100px;">
			
	</div>
	
	</div>
</div><!-- container -->
<br>
<!-- footer -->
<jsp:include page="../includeMain/footer.jsp"></jsp:include>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" 
	    integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" 
		crossorigin="anonymous">
</script>
<!-- partial -->
<script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
<script src="/kream/js/carousel/owl.carousel.min.js"></script>
<script src="/kream/js/shopfilter.js"></script>
<script src="/kream/js/productJS/shopCategory/categoryShoes.js"></script>
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