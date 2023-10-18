<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>주소록</title>
    <link rel="stylesheet" href="/kream/css/mypage/mypageMain.css" type="text/css">
    <link rel="stylesheet" href="/kream/css/mypage/address.css" type="text/css">
  <!--   <link rel="stylesheet" href="/kream/css/mypage/cd94494.css" type="text/css">
    <link rel="stylesheet" href="/kream/css/efffbde.css" type="text/css">
    <link rel="stylesheet" href="/kream/css/c9eea23.css" type="text/css"> -->
</head>
<body>
<div class="content_area my-page-content">
    <div class="my_addressbook">
        <div class="content_title">
            <div class="title">
                <h3>주소록</h3>
                <!---->
            </div>
            <div class="btn_box">
                <a href="#" class="btn btn_add" id="addAddressDefault">
                    <!---->
                    <span class="btn_txt">+ 새 배송지 추가</span>
                </a>
            </div>
        </div>
        <div class="my_list">
        <!-- 배송지 목록이 있을 시 -->
        <c:if test="${not empty addressList}" var="address">	
        	<!-- 기본 배송지 -->
        	<div class="basic">
				<div class="my_item is_active" default-mark="기본 배송지">
					<div class="info_bind">
						<!---->
						<div class="address_info">
							<div class="name_box">
								<span class="name">${defaultAddress.addressName}</span>
								<span class="mark">기본 배송지</span>
							</div>
							<p class="phone">${defaultAddress.phone}</p>
							<div class="address_box">
								<span class="zipcode">(${defaultAddress.zipcode})</span>
								<span class="address">${defaultAddress.address} ${defaultAddress.address2}</span>
							</div>
						</div>
					</div>
					<div class="btn_bind">
						<!---->
						<a href="#" class="btn outlinegrey small"> 수정 </a>
           				<a href="#" class="btn outlinegrey small"> 삭제 </a>
					</div>
				</div>
			</div>
            <!-- 기본 배송지 이외의 배송지 -->
            <div class="other">
            	<div class="other_list">
	                <c:forEach var="address" items="${addressList}">
	                    <!-- 각 배송지 정보를 여기에 표시하세요 -->
	                    <div class="my_item">
	                        <!-- 배송지 정보를 표시하세요 -->
	                        <div class="info_bind">
	                            <!---->
	                            <div class="address_info">
	                                <div class="name_box">
						                <span class="name">${address.addressName}</span>
						                <!---->
						            </div>
	                                <p class="phone">${address.phone}</p>
	                                <div class="address_box">
						                <span class="zipcode">(${address.zipcode})</span>
						                <span class="address">${address.address} ${address.address2}</span>
						            </div>
	                            </div>
	                        </div><!-- info_bind -->
	                        <div class="btn_bind">
	                            <a href="#" class="btn outlinegrey small"> 기본 배송지 </a>
						        <a href="#" class="btn outlinegrey small"> 수정 </a>
						        <a href="#" class="btn outlinegrey small"> 삭제 </a>
	                        </div>
	                    </div><!-- my_item -->
	                </c:forEach>
	            </div>
            </div>
		</c:if>
		<!-- 주소 목록이 없을 경우 -->
		<div>
	        <c:if test="${empty addressList}">
	            <div class="empty_area">
	                <p class="desc">배송지 정보가 없습니다.<br>새 배송지를 등록해주세요</p>
	                <a href="#" class="btn outlinegrey small" id="addAddressIfNone">새 배송지 추가</a>
	            </div>
	        </c:if>
        </div>
            <!-- 페이징 -->
            <div class="pagination">
            	<div class="pagination_box first last">
					<div class="prev_btn_box">
						<a href="/my/address?page=1" class="btn_arr" aria-label="첫 페이지">
							<svg xmlns="http://www.w3.org/2000/svg" class="arr-page-first icon sprite-icons">
								<use href="/_nuxt/b685a18dbba161b5c3cf613cb39a8946.svg#i-arr-page-first" xlink:href="/_nuxt/b685a18dbba161b5c3cf613cb39a8946.svg#i-arr-page-first"></use>
							</svg>
						</a>
							<a href="/my/address?page=0" class="btn_arr" aria-label="이전 페이지">
								<svg xmlns="http://www.w3.org/2000/svg" class="arr-page-prev icon sprite-icons">
								<use href="/_nuxt/b685a18dbba161b5c3cf613cb39a8946.svg#i-arr-page-prev" xlink:href="/_nuxt/b685a18dbba161b5c3cf613cb39a8946.svg#i-arr-page-prev"></use>
							</svg></a></div>
					<div class="page_bind">
						<a href="/my/address?page=1" class="btn_page active" aria-label="1페이지"> 1 </a>
					</div>
					<div class="next_btn_box">
						<a href="/my/address?page=2" class="btn_arr" aria-label="다음 페이지">
							<svg xmlns="http://www.w3.org/2000/svg" class="arr-page-next icon sprite-icons">
								<use href="/_nuxt/b685a18dbba161b5c3cf613cb39a8946.svg#i-arr-page-next" xlink:href="/_nuxt/b685a18dbba161b5c3cf613cb39a8946.svg#i-arr-page-next"></use>
							</svg>
						</a>
						<a href="/my/address?page=1" class="btn_arr" aria-label="마지막 페이지">
							<svg xmlns="http://www.w3.org/2000/svg" class="arr-page-last icon sprite-icons">
								<use href="/_nuxt/b685a18dbba161b5c3cf613cb39a8946.svg#i-arr-page-last" xlink:href="/_nuxt/b685a18dbba161b5c3cf613cb39a8946.svg#i-arr-page-last"></use>
							</svg>
						</a>
					</div>
				</div>
            </div><!-- pagination -->
        </div> <!---->

        <!-- 배송지 추가 모달창 -->
        <div class="layer_delivery layer md">
        	<!---->
	        <div id="modalContainer" class="layer_container">
			    <a href="#" class="btn_layer_close">
			        <div>
			            <svg xmlns="http://www.w3.org/2000/svg" class="ico-close icon sprite-icons">
			                <use href="/_nuxt/b685a18dbba161b5c3cf613cb39a8946.svg#i-ico-close" xlink:href="/_nuxt/b685a18dbba161b5c3cf613cb39a8946.svg#i-ico-close"></use>
			            </svg>
			        </div>
			        <!---->
			    </a>
			    <div class="layer_header">
			        <h2 class="title"> 새 주소 추가 </h2>
			    </div>
			    <div class="layer_content">
			        <div class="delivery_bind">
			            <div class="delivery_input">
			                <div class="input_box">
			                    <h4 class="input_title">이름</h4>
			                    <div class="input_item"><input type="text" id="nameInput" placeholder="수령인의 이름" autocomplete="off" class="input_txt"></div>
			                    <p class="input_error" id="nameError"></p>
			                </div>
			                <div class="input_box">
			                    <h4 class="input_title">휴대폰 번호</h4>
			                    <div class="input_item"><input type="tel" id="phoneInput" placeholder="- 없이 입력" autocomplete="off" class="input_txt"></div>
			                    <p class="input_error" id="phoneError"></p>
			                </div>
			                <div class="input_box">
			                    <h4 class="input_title">우편번호</h4>
			                    <div class="input_item">
			                        <input type="text" id="zipcodeAfter" placeholder="우편 번호를 검색하세요" readonly="readonly" autocomplete="off" class="input_txt">
			                        <a href="#" id="zipcode" class="btn btn_zipcode outline small"> 우편번호 </a>
			                    </div>
			                </div>
			                <div class="input_box">
			                    <h4 class="input_title">주소</h4>
			                    <div class="input_item">
			                    	<input type="text" id="addressAfter" placeholder="우편 번호 검색 후, 자동입력 됩니다" readonly="readonly" autocomplete="off" class="input_txt">
			                    </div>
			                </div>
			                <div class="input_box">
			                    <h4 class="input_title">상세 주소</h4>
			                    <div class="input_item">
			                        <input type="text" id="address2After" placeholder="건물, 아파트, 동/호수 입력" autocomplete="off" class="input_txt">
			                    </div>
			                </div>
			            </div>
			            <div class="delivery_check">
			                <div class="checkbox_item">
			                    <input id="check1" type="checkbox" name="" class="blind">
			                    <label for="check1" class="check_label">
			                    	 <svg style="width: 21px; height:22px; color: white; border : 1px solid gray" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-square" viewBox="0 0 16 16">
								      	<path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" fill="white"></path> 
								      </svg>
			                        <span class="label_txt">기본 배송지로 설정</span>
			                        <!---->
			                    </label>
			                </div>
			            </div>
			        </div>
			        <div class="layer_btn">
			            <a href="#" id="addressCancle" class="btn btn_delete outlinegrey medium"> 취소 </a>
			            <a disabled="disabled" href="#" id="saveAddress" class="btn btn_save solid medium disabled"> 저장하기 </a>
			        </div>
			    </div>
			</div>
		</div>
		<!---->
    </div>
</div>
<script type="text/javascript" src="http://code.jquery.com/jquery-3.7.0.min.js"></script>
<script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
<script src="/kream/js/mypage/post.js"></script>
<script src="/kream/js/mypage/address.js"></script>
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
</body>
</html>
