<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>KREAM | 회원가입</title>
<link rel="stylesheet" href="/kream/css/join.css" type="text/css" />
<script type="text/javascript">
<script type="text/javascript">
function updateEmailBox() {
    var userEmail = document.getElementById("userEmail").value;
    var emailBox = document.getElementById("userEmail1");
    emailBox.value = userEmail;
}

function submitJoin() {
    var userEmail = document.getElementById("userEmail").value;
    var password = document.getElementById("password").value;
    var password2 = document.getElementById("password_2").value;
    var phone = document.getElementById("phone").value;
    var shoeSize = document.getElementById("shoeSize").value;
    var termsAgree = document.getElementById("termsAgree").checked;

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    var numberPattern = /^[0-9]+$/;

    // 이메일 주소 유효성 검사
    if (!emailPattern.test(userEmail)) {
        document.getElementById("emailError").style.display = "block";
        return false;
    } else {
        document.getElementById("emailError").style.display = "none";
    }

    // 비밀번호 유효성 검사
    if (!passwordPattern.test(password)) {
        document.getElementById("passwordError").style.display = "block";
        return false;
    } else {
        document.getElementById("passwordError").style.display = "none";
    }

    // 비밀번호 재확인 유효성 검사
    if (password !== password2) {
        document.getElementById("passwordError").style.display = "block";
        return false;
    } else {
        document.getElementById("passwordError").style.display = "none";
    }

    // 휴대폰 번호 유효성 검사
    if (!numberPattern.test(phone)) {
        document.getElementById("phoneError").style.display = "block";
        return false;
    } else {
        document.getElementById("phoneError").style.display = "none";
    }

    // 신발 사이즈 유효성 검사
    if (!numberPattern.test(shoeSize)) {
        document.getElementById("shoeSizeError").style display = "block";
        return false;
    } else {
        document.getElementById("shoeSizeError").style.display = "none";
    }

    // 회원 약관 동의 검사
    if (!termsAgree) {
        alert("회원 약관에 동의해야 합니다.");
        return false;
    }

    return true;
}

function showTerms() {
    document.getElementById('termsPopup').style.display = 'block';
}

function closeTerms() {
    document.getElementById('termsPopup').style.display = 'none';
}

 </script>
</head>
<body>
<form action="/join" method="get">

	<div class="container">
	<jsp:include page="../includeMain/headerMy.jsp"/>
		<div class="join_area">	
<!-- 로고 -->
	<header>
		<h2 class="join_title">회원가입</h2>
	</header>
<!-- 이메일 -->
<div class="joinBox">
    <label for="userEmail">이메일 주소</label>
    <input id="userEmail" type="text" name="userEmail" 
        onfocus="this.placeholder=''" 
        onblur="this.placeholder='예) kream@kream.co.kr'"
        placeholder="예) kream@kream.co.kr">
    <div id="emailError" class="error-message">올바른 이메일 주소를 입력하세요.</div>
</div>

<!-- 비밀번호 -->
<div class="joinBox">
    <label for="password">비밀번호</label>
    <input id="password" type="password" name="password"
        onfocus="this.placeholder=''" 
        onblur="this.placeholder='영문,숫자,특수문자 조합 8-16자'"
        placeholder="영문,숫자,특수문자 조합 8-16자">
    <div id="passwordError" class="error-message">비밀번호가 일치하지 않습니다.</div>
</div>

<!-- 비밀번호 확인 -->
<div class="joinBox">
    <label for="password_2">비밀번호 재확인</label>
    <input id="password_2" type="password" name="password_2"
        onfocus="this.placeholder=''" 
        onblur="this.placeholder='비밀번호 재입력'"
        placeholder="비밀번호 재입력">
    <div id="password2Error" class="error-message">비밀번호가 일치하지 않습니다.</div>
</div>

<!-- 휴대폰 번호 -->
<div class="joinBox">
    <label for="phone">휴대폰 번호</label>
    <input id="phone" type="text" name="phone"
        onfocus="this.placeholder=''" 
        onblur="this.placeholder='휴대폰 번호를 입력하세요'"
        placeholder="휴대폰 번호를 입력하세요">
    <div id="phoneError" class="error-message">올바른 휴대폰 번호를 입력하세요.</div>
</div>

<!-- 신발 사이즈 -->
<div class="joinBox">
    <label for="shoeSize">신발 사이즈</label>
    <input id="shoeSize" type="text" name="shoeSize"
        onfocus="this.placeholder=''" 
        onblur="this.placeholder='신발사이즈를 입력하세요'"
        placeholder="신발사이즈를 입력하세요">
    <div id="shoeSizeError" class="error-message">올바른 신발 사이즈를 입력하세요.</div>
</div>

	<div class="terms">
	    <input type="checkbox" id="termsAgree" name="termsAgree">
	    <label for="termsAgree">회원 약관에 동의합니다.</label>
	    <a href="javascript:void(0);" onclick="showTerms()">※KREAM 서비스 이용 약관</a>
	</div>

	<div id="termsPopup" class="terms-popup">
    <div class="terms-content">

        <h2> ※KREAM 서비스 확인하기</h2>
        <p>제 1 조 (목적)</p>
			이 약관은 "회원" 개인 상호 간 또는 “제휴 사업자”, 
			"입점 사업자"와 “회원” 개인 간에 상품 등을 매매하는 것을 중개하고, 
			"상품" 등에 관한 정보를 상호 교환할 수 있도록 크림 주식회사(이하 "회사"라 합니다)가 운영, 
			제공하는 KREAM 서비스(이하 "서비스")에 대한 것으로 
			본 약관에서는 "서비스"의 이용과 관련하여 "회사"와 "회원"과의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정합니다.
			<p>제 2조 (용어의 정의)</p>
			제 2 조 (용어의 정의)

			이 약관에서 사용하는 용어의 정의는 다음 각 호와 같으며, 정의되지 않은 용어에 대한 해석은 관계 법령 및 지침, 본 이용약관, 개인정보취급방침, 상관례 등에 의합니다.
			"서비스"라 함은 회사가 PC 및/또는 모바일 환경에서 제공하는 KREAM 서비스 및 관련 제반 서비스를 말합니다.
			"회원"이라 함은 "회사"의 "서비스"에 접속하여 이 약관에 따라 "회사"와 이용계약을 체결하고 "회사"가 제공하는 "서비스"를 이용하는 고객을 말합니다.
			"구매자" 또는 "구매회원"이라 함은 "상품"을 구매하거나 또는 구매할 의사로 서비스를 이용하는 회원을 말합니다.
			"판매자" 또는 "판매회원"이라 함은 "서비스"에 "상품"을 등록하여 판매하거나 또는 제공할 의사로 서비스를 이용하는 회원을 말합니다.
			"입찰"이라 함은 "상품"을 구매하기 위하여 원하는 "상품"의 구매 가격을 제출하는 행위 또는 "상품"을 판매하기 위하여 원하는 "상품"의 판매 가격을 제출하는 행위를 말합니다.
			"거래 체결"이라 함은 "입찰"에 의하여 상품의 거래가 성립되는 것을 말합니다.

        <span class="close-terms" onclick="closeTerms()">&#10006;</span>
    </div>
</div>
	
<!-- 가입하기 박스 -->
	
	<button onclick="submitJoin()" id="joinBtn" class="login_button">가입하기</button>

	
</div>
</div>


<jsp:include page="../includeMain/footer.jsp"/>
</form>
<script type="text/javascript" src="http://code.jquery.com/jquery-3.7.0.min.js"></script>
<script src="/kream/js/join.js"></script>
</body>
</html>