<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>문의 내역글 조회</title>
    <link rel="stylesheet" href="/kream/css/mypage/mypageMain.css" type="text/css">
    <link rel="stylesheet" href="/kream/css/mypage/mypageMain.css" type="text/css">
    <link rel="stylesheet" href="/kream/css/mypage/cd94494.css" type="text/css">
    <link rel="stylesheet" href="/kream/css/efffbde.css" type="text/css">
    <link rel="stylesheet" href="/kream/css/c9eea23.css" type="text/css">
</head>
<body>
<div class="content_area my-page-content">
    <div class="my_purchase">
        <div class="v-portal" style="display: none;"></div>
        <div class="content_title">
            <div class="title">
                <h3>문의 내역글 조회</h3>
                <!---->
            </div>
            <!---->
        </div>
        <div class="purchase_list_tab detail_tab">
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
                        <dt class="title">구매 입찰</dt>
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
        <div class="period_search">
            <div class="period_month">
                <ul class="month_list">
                    <li class="month_item">
                        <a href="#" class="month_link">최근 2개월</a>
                    </li>
                    <li class="month_item">
                        <a href="#" class="month_link">4개월</a>
                    </li>
                    <li class="month_item">
                        <a href="#" class="month_link">6개월</a>
                    </li>
                    <li class="month_item custom">
                        <a href="#" class="month_link">기간조회</a>
                    </li>
                </ul>
                <div class="period_option">
                    <label class="selected_txt">"기간 선택"
                        <svg xmlns="http://www.w3.org/2000/svg" class="ico-arr-down-gray icon sprite-icons">
                           <use href="/_nuxt/b685a18dbba161b5c3cf613cb39a8946.svg#i-ico-arr-down-gray" xlink:href="/_nuxt/b685a18dbba161b5c3cf613cb39a8946.svg#i-ico-arr-down-gray"></use>
                        </svg>
                    </label>
                    <select>
                        <option value="[object Object]"> 2023년 10월 </option>
                        <option value="[object Object]"> 2023년 09월 </option>
                        <option value="[object Object]"> 2023년 08월 </option>
                        <option value="[object Object]"> 2023년 07월 </option>
                        <option value="[object Object]"> 2023년 06월 </option>
                        <option value="[object Object]"> 2023년 05월 </option>
                    </select>
                </div>
            </div>
            <!---->
            <div class="period_calendar_wrapper" today="Fri Oct 06 2023 00:56:19 GMT+0900 (한국 표준시)">
                <div class="period_calendar">
                    <div class="calendar_wrap"><span>
                            <div class="calendar">
                                <input disabled="disabled" class="cal_input">
                                <span class="cal_btn"></span>
                            </div>
                            <div data-v-4cb7b681="" class="vc-popover-content-wrapper">
                                <!---->
                            </div>
                        </span>
                    </div>
                    <span class="swung_dash">~</span>
                    <div class="calendar_wrap">
                        <span>
                            <div class="calendar">
                                <input class="cal_input">
                                <span class="cal_btn"></span>
                            </div>
                            <div data-v-4cb7b681="" class="vc-popover-content-wrapper">
                            <!---->
                            </div>
                        </span>
                    </div>
                </div>
                <div class="period_btn_box">
                    <button class="btn_search is_active">조회</button>
                </div>
            </div>
        </div>
        <ul class="search_info">
            <li class="info_item">
                <p>한 번에 조회 가능한 기간은 최대 6개월입니다.</p>
            </li>
            <li class="info_item">
                <p>기간별 조회 결과는 입찰일 기준으로 노출됩니다.</p>
            </li>
        </ul>
        <div class="purchase_list bidding bid">
            <div class="purchase_head">
                <div class="head_product">
                    <a href="#" class="btn_filter"> 전체 
                        <svg xmlns="http://www.w3.org/2000/svg" class="ico-arr-dir-down-circle icon sprite-icons">
                            <use href="/_nuxt/b685a18dbba161b5c3cf613cb39a8946.svg#i-ico-arr-dir-down-circle" xlink:href="/_nuxt/b685a18dbba161b5c3cf613cb39a8946.svg#i-ico-arr-dir-down-circle">
                            </use>
                        </svg>
                    </a>
                </div>
                <div class="head_status">
                    <div class="status_box field_price">
                        <a href="#" class="status_link">
                            <span class="status_txt">구매 희망가</span>
                        </a>
                    </div>
                    <div class="status_box field_date_purchased">
                        <a href="#" class="status_link">
                            <span class="status_txt">구매일</span>
                        </a>
                    </div>
                    <div class="status_box field_date_paid">
                        <a href="#" class="status_link">
                            <span class="status_txt">정산일</span>
                        </a>
                    </div>
                    <div class="status_box field_expires_at">
                        <a href="#" class="status_link">
                            <span class="status_txt">만료일</span>
                        </a>
                    </div>
                    <div class="status_box field_status ascending">
                        <a href="#"  class="status_link">
                            <span class="status_txt">상태</span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="empty_area">
                <p class="desc">구매 입찰 내역이 없습니다.</p>
                <a href="#" class="btn outlinegrey small"> SHOP 바로가기 </a>
            </div>
            <div class="v-portal" style="display: none;">
            </div>
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
</body>
</html>
