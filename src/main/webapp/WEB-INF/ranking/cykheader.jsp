<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="../css/cykcss/cykheader.css">
</head>
<body>
        <div class="header">
            <div class="header_topWrapper">
                <div class="header_top">
                    <div class="top_inner">
                        <ul class="top_list">
                            <li class="top_item">
                                <a href="#" class="top_link">고객센터</a>
                            </li>
                            <c:if test="${ sessionScope.userEmail == null }">
	                            <li class="top_item">
	                                <a href="/kream/login" class="top_link">마이페이지</a>
	                            </li>
	                            <li class="top_item">
	                                <a href="/kream/login" class="top_link">관심상품</a>
	                            </li>
							</c:if>
                            <c:if test="${ sessionScope.userEmail != null }">
	                            <li class="top_item">
	                                <a href="/kream/my" class="top_link">마이페이지</a>
	                            </li>
	                            <li class="top_item">
	                                <a href="/kream/saved" class="top_link">관심상품</a>
	                            </li>
							</c:if>
                            <li class="top_item">
                                <a href="#" class="top_link">알림</a>
                            </li>
                            <li class="top_item">
	      						<c:if test="${ sessionScope.userEmail != null}">
	                                <a href="/kream/login" class="top_link">로그아웃</a>
								</c:if>
								<c:if test="${ sessionScope.userEmail == null}">
	                                <a href="/kream/logout" class="top_link">로그인</a>
								</c:if>                                   
                            </li>                    
                        </ul>
                    </div>
                </div>
            </div>
            <div class="header_mainWrapper">
                <div class="header_main">
                    <div class="main_inner">
                         <a href="/kream"><h1><img class="logo"  src="../css/cykcss/cssimage/logo.png" ></h1></a> 
                        <div class="main_center"></div>
                        <div class="main_right">
                            <div class="homeStyleShopSearchArea">
                                <div class="homeStyleShop">
                                    <ul class="homeStyleShop_list">
                                        <li class="homeStyleShop_item" style="font-weight: bold;">Home</li>
                                        <li class="homeStyleShop_item">STYLE</li>
                                        <li class="homeStyleShop_item">SHOP</li>
                                        <!-- <li><img class="micro" src="https://svgsilh.com/svg/1093183.svg" style="width: 30px; height: 25px;"></img></li> -->
                                        <li><img class="micro" src="../css/cykcss/cssimage/search.png" style="width: 25px; height: 25px;"></img></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header_header_bottomWrapper">
                <div class="header_bottom">
                    <nav class="bottom_tabs">
                        <ul class="bottom_tab_ul">
                            <li class="bottom_tab_li header_bottomline_element one" style="color: rgb(242, 87, 0)">23FW신상</li>
                            <li class="bottom_tab_li header_bottomline_element two">추천</li>
                            <li class="bottom_tab_li header_bottomline_element three" onclick="location.href='/kream/ranking/rankingMain'">랭킹</li>
                            <li class="bottom_tab_li header_bottomline_element four">럭셔리</li>
                            <li class="bottom_tab_li header_bottomline_element five">남성</li>
                            <li class="bottom_tab_li header_bottomline_element six">여성</li>
                            <li class="bottom_tab_li header_bottomline_element eight">발견</li>
                            <!-- <li class="bottom_tab_li header_bottomline_element nine"  onclick="location.href='/kream/ranking/homeTest'">찬영의메인화면</li> -->
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        <div class="header_bottomline">
        </div>

        
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script>
            $(document).ready(function() {
                const sibilings = $('.header_bottomline_element').siblings();
                $('.header_bottomline_element').on("click", function() {
                    sibilings.css({"border-bottom": "none"});
                    $(this).css({
                        "border-bottom": "2px solid orange"
                    });
                    
                });
            });
        </script>
</body>
</html>