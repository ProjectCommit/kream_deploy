<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>로그인 정보</title>
    <link rel="stylesheet" href="/kream/css/mypage/mypageMain.css" type="text/css">
    <link rel="stylesheet" href="/kream/css/mypage/profile.css" type="text/css">
   <!--  <link rel="stylesheet" href="/kream/css/mypage/cd94494.css" type="text/css">
    <link rel="stylesheet" href="/kream/css/efffbde.css" type="text/css">
    <link rel="stylesheet" href="/kream/css/c9eea23.css" type="text/css"> -->
</head>
<body>
<div class="content_area">
	<div class="my_profile">
		<div class="content_title">
			<div class="title">
				<!-- <h3 style="font-size: 34px !important; letter-spacing: -.36px; line-height: 29px; font-weight: bold;">로그인 정보</h3> -->
				<h3>로그인 정보</h3>
				<!--  -->
			</div>
			<!--  -->
		</div>
		
		<div class="profile_info">
			<div class="profile_group_email">
				<h4 class="group_title">내 계정</h4>
				<div id="beforeChange" class="unit">
				    <h5 class="h5_title">이메일 주소</h5>
				    <div class="unit_content">
				        <p id="emailInfo" class="desc email">${maskedEmail}</p>
				        <button type="button" id="changeButton" class="btn btn_modify outlinegrey small">변경</button>
				    </div>
				</div>
				<div class="modify" id="modifySection" style="display: none;">
				    <div class="input_box">
				        <h6 class="input_title">이메일 주소 변경</h6>
				        <div class="input_item">
				            <input type="email" autocomplete="off" class="input_txt" placeholder="${user.email}" value="${user.email}" id="newEmailInput">
				        </div>
				        <p class="input_error" id="emailError"></p>
				    </div>
				    <div class="modify_btn_box">
				        <button type="button" slot="button" id="cancelButton" class="btn outlinegrey medium">취소</button>
				        <button type="button" slot="button" id="saveButton" class="btn solid medium">저장</button>
				    </div>
				</div>

				<div id="beforePwdChange" class="unit">
					<h5 class="h5_title">비밀번호</h5>
					<div class="unit_content">
						<p class="desc password">${user.pwd}</p>
						<button type="button" id="changePwdButton" class="btn btn_modify outlinegrey small">변경</button>
					</div>
				</div>
				<div class="modify" id="modifyPwdSection" style="display: none;">
					<h5 class="h5_title">비밀번호 변경</h5>
					<div class="input_box">
						<h6 class="input_title">이전 비밀번호</h6>
						<div class="input_item">
							<input type="password" id="oldPwdInput" placeholder="영문, 숫자, 특수문자 조합 8-16자" autocomplete="off" value="${user.pwd}" class="input_txt">
						</div>
						<p class="input_error"></p>
					</div>
					<div class="input_box">
						<h6 class="input_title">새 비밀번호</h6>
						<div class="input_item">
							<input type="password" id="newPwdInput" placeholder="영문, 숫자, 특수문자 조합 8-16자" autocomplete="off" value="" class="input_txt">
						</div>
						<p class="input_error" id="pwdError"></p>
					</div>
					<div class="modify_btn_box">
						<button type="button" slot="button" id="cancelPwdButton" class="btn outlinegrey medium">취소</button>
						<button type="button" slot="button" id="savePwdButton" class="btn solid medium">저장</button>
					</div>
				</div>
			</div>
			<div class="profile_group">
			<div class="profile_info">
				<h4 class="group_title">개인 정보</h4>
				<div class="unit">
					<h5 class="h5_title">휴대폰 번호</h5>
					<div class="unit_content">
						<p class="desc">${maskedPhoneNumber}</p>
						<button type="button" id="changePhoneNumberButton" class="btn btn_modify outlinegrey small">변경</button>
					</div>
				</div>
				<div class="unit">
					<h5 class="h5_title">신발 사이즈</h5>
					<div class="unit_content">
						<p class="desc">270</p>
						<button type="button" class="btn btn_modify outlinegrey small">변경</button>
					</div>
				</div>
				<div class="layer md" style="display:none;">
					<!--  -->
					<div class="layer_container">
						<a class="btn_layer_close">
							<svg xmlns="http://www.w3.org/2000/svg" class="ico-close icon sprite-icons">
								<use href="/_nuxt/8324bbb58010b72506b1b489a88b4149.svg#i-ico-close" xlink:href="/_nuxt/8324bbb58010b72506b1b489a88b4149.svg#i-ico-close"></use>
							</svg>
						</a>
						<!-- <div class="layer_header">
							<h2 class="title">사이즈 선택</h2>
						</div>
						<div class="layer_content"></div> -->
					</div>
				</div>
			</div>
			</div>
			<div class="profile_info" style="padding-top: 54px;">
				<h4 class="group_title">광고성 정보 수신</h4>
				<div class="unit to_receive">
					<div class="unit_content">
						<p class="desc">문자메시지</p>
						<div class="radio_txt_box"></div>
					</div>
				</div>
				<div class="unit_to_receive">
					<div class="radio_item">
						<input id="agree1" type="radio" name="message_radio" class="radio_input">
						<label for="agree1" class="radio_label">
							<svg xmlns="http://www.w3.org/2000/svg" class="ico-radio-inactive icon sprite-icons">
								<use href="/_nuxt/8324bbb58010b72506b1b489a88b4149.svg#i-ico-radio-inactive" xlink:href="/_nuxt/8324bbb58010b72506b1b489a88b4149.svg#i-ico-radio-inactive"></use>
							</svg>
							<span class="label_txt">수신 동의</span>
							<!--  -->
						</label>
					</div>
					<div class="radio_item">
						<input id="disagree1" type="radio" name="message_radio" checked="checked" class="radio_input">
						<label for="disagree1" class="radio_label">
							<!-- ::before -->
							<svg xmlns="http://www.w3.org/2000/svg" class="ico-radio-inactive icon sprite-icons">
								<use href="/_nuxt/8324bbb58010b72506b1b489a88b4149.svg#i-ico-radio-inactive" xlink:href="/_nuxt/8324bbb58010b72506b1b489a88b4149.svg#i-ico-radio-inactive"></use>
							</svg>
							<span class="label_txt">수신거부</span>
							<!-- ::after -->
						</label>
					</div>
				</div>
				<div class="unit_to_receive">
					<!--  -->
					<div class="unit_content">
						<p class="desc">이메일</p>
						<div class="radio_txt_box">
							<div class="radio_item">
								<input id="agree2" type="radio" name="email_radio" class="radio_input">
								<label for="agree2" class="radio_label">
									<svg xmlns="http://www.w3.org/2000/svg" class="ico-radio-inactive icon sprite-icons">
										<use href="/_nuxt/8324bbb58010b72506b1b489a88b4149.svg#i-ico-radio-inactive" xlink:href="/_nuxt/8324bbb58010b72506b1b489a88b4149.svg#i-ico-radio-inactive"></use>
									</svg>
									<span class="label_txt">수신 동의</span>
									<!--  -->
								</label>
							</div>
							<div class="radio_item">
								<input id="disagree2" type="radio" name="email_radio" checked="checked" class="radio_input">
								<label for="disagree2" class="radio_label">
									<!-- ::before -->
									<svg xmlns="http://www.w3.org/2000/svg" class="ico-radio-inactive icon sprite-icons">
										<use href="/_nuxt/8324bbb58010b72506b1b489a88b4149.svg#i-ico-radio-inactive" xlink:href="/_nuxt/8324bbb58010b72506b1b489a88b4149.svg#i-ico-radio-inactive"></use>
									</svg>
									<span class="label_txt">수신거부</span>
									<!-- ::after -->
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<a href="/my/withdrawal" class="btn_withdrawal">회원 탈퇴</a>
	</div>
</div>


<script type="text/javascript" src="http://code.jquery.com/jquery-3.7.0.min.js"></script>
<script>
    var oldEmail = "${user.email}"; // userDTO.email은 기존 이메일 값이 들어있는 변수명입니다.
</script>
<script type="text/javascript" src="/kream/js/mypage/profile.js"></script>
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
