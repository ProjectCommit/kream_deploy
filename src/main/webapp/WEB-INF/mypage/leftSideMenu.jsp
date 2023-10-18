<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menu</title>
<style type="text/css">
    ul {
        list-style-type:none;
    }
    li {
        /*display:inline-block;*/
        margin:  12px 30px 0 50px;
        font-size: 13px;
        line-height: 30px;
    }
    
    .myPage{
   		color: #222222;
    	font-size: 24px;
	    font-weight: 700;
	    padding-bottom: 30px;
	    letter-spacing: -3px;
	    line-height: 18px;
    }
    .myInfo, .shopInfo {
    	color: #222222;
    	display: inline-block;
	    font-size: 18px;
	    font-weight: 700;
	    letter-spacing: -.27px;
	    line-height: 22px;
	    margin-bottom: 12px;
	    vertical-align: top;
    }
/*     .myPageShop, .myPageInfo{
		color: rgba(34,34,34,.5);
	    font-size: 15px;
	    letter-spacing: -.15px;
	    line-height: 18px;
    } */
    a {
    color: inherit !important;
}
    .sidebar a:link {
        text-decoration:none;
        color: #888a83;
    }
	.sidebar a:hover {
    	text-decoration: none;
    	color: #888a83;
	}
    .sidebar a:visited {
        text-decoration:none;
        font-size: 1.3em;
        /* color: #888a83; */
    }
    .sidebar a.active {
	    font-weight: bold;
	    color: #000000;
	    /* font-size: 1.1em; */
	}
    .sidebar a:active {
        text-decoration:none;
        color: #888a83;
    }
    .myContainer {
        width:500px;
        margin: 0 auto;
        padding-left: 0;
    }
</style>
</head>
<body>
<nav class="sidebar">
   	<div><h2 class="myPage"><a href="defaultMain" style="color: #222222;">마이&nbsp;페이지</a></h2></div>
    <div class="myContainer">
        <ul class="myPageShop">
            <strong class="shopInfo">쇼핑 정보</strong>
            <li><a id="myBuying" href="${pageContext.request.contextPath}/my/buying">구매 내역</a></li>
            <li><a id="mySaved" href="${pageContext.request.contextPath}/saved">관심 상품</a></li>
            <br/>
        </ul>
    </div>
    <div class="myContainer">
        <ul class="myPageInfo">
        	<strong class="myInfo">내 정보</strong>
            <li><a id="loginInfo" href="${pageContext.request.contextPath}/my/profile">로그인 정보</a></li>
            <li><a href="${pageContext.request.contextPath}/my/profile-edit">프로필 관리</a></li>
            <li><a id="addressInfo" href="${pageContext.request.contextPath}/my/address">주소록</a></li>
            <li><a href="${pageContext.request.contextPath}/my/payment">결제 정보</a></li>
            <li>문의 내역글 조회</li>
            <li>후기 댓글 조회</li>
           <%--  <li><a href="${pageContext.request.contextPath}/my/board">문의 내역글 조회</a></li>
            <li><a href="${pageContext.request.contextPath}/my/comment">후기 댓글 조회</a></li> --%>
        </ul>
    </div>
</nav>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<%--<script>
    $(document).ready(function() {
        $("ul li a").on("click", function(e) {
            e.preventDefault();
            var url = $(this).attr("href");
            $.ajax({
                url: url,
                method: "GET",
                success: function(response) {
                    $("#myContent").html(response);
                }
            });
        });
    });
</script>--%>
<script type="text/javascript" src="http://code.jquery.com/jquery-3.7.0.min.js"></script>
<script>
    $(document).ready(function() {
        // 초기에 defaultMain.jsp를 로드하도록 설정합니다.
        $.ajax({
            url: "defaultMain.jsp", // defaultMain.jsp로 변경 필요할 수 있습니다.
            method: "GET",
            success: function(response) {
                $("#myContent").html(response);
            }
        });

        $(".sidebar a").on("click", function(e) {
            e.preventDefault();
            
         	// 다른 활성화된 메뉴의 active 클래스 제거
            $(".sidebar a").removeClass("active");
            // 현재 클릭한 메뉴에 active 클래스 추가
            $(this).addClass("active");
            
            var url = $(this).attr("href");
            $.ajax({
                url: url,
                method: "GET",
                success: function(response) {
                    $("#myContent").html(response);
                }
            });
        });
    });
</script>
</body>
</html>
