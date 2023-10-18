<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>KREAM | 로그인</title>
<link rel="stylesheet" href="/kream/css/login.css" type="text/css" />

<script type="text/javascript">
function clearError(elementId) {
    var errorMessage = document.getElementById(elementId);
    errorMessage.textContent = '';
}

function validateEmail() {
    var emailInput = document.getElementById("email");
    var emailValue = emailInput.value;
    var emailErrorMessage = document.getElementById("emailError");

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(emailValue)) {
        emailErrorMessage.textContent = "올바른 이메일 주소를 입력하세요.";
    } else {
        emailErrorMessage.textContent = '';
    }
}

function validatePassword() {
    var passwordInput = document.getElementById("password");
    var passwordValue = passwordInput.value;
    var passwordErrorMessage = document.getElementById("passwordError");

    var passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    if (!passwordPattern.test(passwordValue)) {
        passwordErrorMessage.textContent = "영문, 숫자, 특수문자를 조합해서 입력해주세요 (8-16자).";
    } else {
        passwordErrorMessage.textContent = '';
    }
}

function submitLogin() {
    validateEmail();
    validatePassword();

    // 유효성 검사를 통과한 경우 나머지 코드와 로그인 작업을 수행합니다.
}

function submitLogin() {
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    var emailValue = emailInput.value;
    var passwordValue = passwordInput.value;

    // 유효성 검사를 수행합니다.
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;

    var emailIsValid = emailPattern.test(emailValue);
    var passwordIsValid = passwordPattern.test(passwordValue);

    if (emailIsValid && passwordIsValid) {
        // 모든 검사를 통과한 경우 로그인을 수행합니다.
        document.getElementById("loginBtn").style.backgroundColor = "black";
        // 이 부분은 원하는 스타일로 변경할 수 있습니다.
    } else {
        // 유효성 검사 오류가 있으면 처리할 내용을 여기에 추가합니다.
    }
}
    // 나머지 코드 및 로그인 작업을 수행합니다.
</script>
</head>
<body>
	
	<div class="container">
<jsp:include page="../includeMain/headerMy.jsp"/>
		<div class="login_area">	
		

<!-- 로고 -->
	<header>
		<h2 class="login_title">kream</h2>
	</header>
<!-- 이메일 -->
	

	<div class="inputBox">
    <label for="email">이메일 주소</label>
    <input id="email" class="id_input" type="text" name="userEmail" 
    onfocus="clearError('emailError')" 
    onblur="validateEmail()"
    placeholder="예) kream@kream.co.kr">
    <p id="emailError" class="error-message"></p>
</div>
			
<!-- 비밀번호 -->
	<div class="inputBox">
    <label for="password">비밀번호</label>
    <input id="password" type="password" name="password" 
    onfocus="clearError('passwordError')" 
    onblur="validatePassword()">
    <p id="passwordError" class="error-message"></p>
</div>
		
<!-- 로그인 박스 -->

	<button onclick="submitLogin()" id="loginBtn" class="login_button">로그인</button>
			<!-- <button onclick="submitLogin()" id="loginBtn" class="login_button">로그인</button> -->
	
		<ul class="look_box">
		
			<li class="look_list">
				<a href="/kream/join" class="look_link" >이메일 가입</a> 
			</li>
		
			<li class="look_list">
				<a href="/login/find_email" class="look_link">이메일 찾기</a>
			</li>
		
			<li class="look_list">
				<a href="/login/find_password" class="look_link">비밀번호 찾기</a>
			</li>
		</ul>
	
</div>
<jsp:include page="../includeMain/footer.jsp"/>
</div>
<script type="text/javascript" src="http://code.jquery.com/jquery-3.7.0.min.js"></script>
<script src="/kream/js/login.js"></script>
</body>
</html>