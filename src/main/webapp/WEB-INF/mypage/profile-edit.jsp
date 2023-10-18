<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>프로필 관리</title>
    <link rel="stylesheet" href="/kream/css/mypage/mypageMain.css" type="text/css">
    <link rel="stylesheet" href="/kream/css/mypage/profile-edit.css" type="text/css">
  <!--   <link rel="stylesheet" href="/kream/css/mypage/cd94494.css" type="text/css">
    <link rel="stylesheet" href="/kream/css/efffbde.css" type="text/css">
    <link rel="stylesheet" href="/kream/css/c9eea23.css" type="text/css"> -->
</head>
<body>
<div class="content_area my-page-content">
    <div class="my_profile">
        <div class="v-portal" style="display:none;"></div>
        <div class="content_title border">
            <div class="title">
                <h3>프로필 관리</h3>
                <!---->
            </div>
            <!---->
        </div>
        <div class="user_profile">
            <input type="file" accept="image/jpeg,image/png" hidden="hidden">
            <div class="profile_thumb">
                <img src="/kream/img/blank_profile.png" alt="사용자 이미지" class="thumb_img">
            </div>
            <div class="profile_detail">
                <strong class="name">${user.nickname}</strong>
                <div class="profile_btn_box"><button type="button" class="btn outlinegrey small"> 이미지 변경 </button>
                    <button type="button" class="btn outlinegrey small"> 삭제 </button>
                </div>
            </div>
        </div>
        <div class="profile_info">
            <div class="profile_group">
                <h4 class="group_title">프로필 정보</h4>
                <div class="unit">
                    <h5 class="title">프로필 이름</h5>
                    <div class="unit_content">
                        <p class="desc desc_modify"> ${user.nickname} </p>
                        <button type="button" class="btn btn_modify outlinegrey small"> 변경 </button>
                    </div>
                </div>
                <div class="unit">
                    <h5 class="title">이름</h5>
                    <div class="unit_content">
                        <p class="desc desc_modify"> ${user.userName} </p>
                        <button type="button" class="btn btn_modify outlinegrey small"> 변경 </button>
                    </div>
                </div>
                <div class="unit">
                    <h5 class="title">소개</h5>
                    <div class="unit_content">
                        <p class="desc desc_modify placeholder"> 나를 소개하세요 </p>
                        <button type="button" class="btn btn_modify outlinegrey small"> 변경 </button>
                    </div>
                </div>
            </div>
            <div class="profile_group">
                <h4 class="group_title">프로필 차단/해제</h4>
                <div class="unit">
                    <!---->
                    <div class="unit_content">
                        <p role="button" class="desc"> 차단한 프로필
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="v-portal" style="display: none;"></div>
</div>


<script type="text/javascript" src="http://code.jquery.com/jquery-3.7.0.min.js"></script>
<script type="text/javascript" src="../js/#"></script>
<script type="text/javascript">
$.ajax({
    type: "GET",
    url: "/getSession",
    success: function(response) {
        var userEmail = response.email;
        console.log("세션 값: " + userEmail);
    }
});
</script>
</body>
</html>
