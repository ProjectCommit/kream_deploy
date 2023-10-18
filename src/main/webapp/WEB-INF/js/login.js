$(document).ready(function() {
    $("#loginBtn").click(function() {
        var email = $("#email").val();
        var password = $("#password").val();
        
        // 초기화
	    $('#idDiv').empty();
	    $('#pwdDiv').empty();
		
		if ($('#email').val() == '') {
	        $('#idDiv').text('아이디를 입력하세요.');
	        $('#email').focus();
	        //event.preventDefault(); // 제출 방지
	    } else if ($('#password').val() == '') {
	        $('#pwdDiv').text('비밀번호를 입력하세요.');
	        $('#password').focus();
	        //event.preventDefault(); // 제출 방지
	    } else {
	    	$.ajax({
	            type: "POST",
	            url: "/kream/login",
	            data: {
	                email: email,
	                pwd: password
	            },
	            success: function(response) {
	                if (response === "success") {
	                    window.location.href = "/kream";
	                } else {
	                    alert("이메일 또는 비밀번호가 올바르지 않습니다.");
	                }
	            },
	            error: function() {
	                alert("서버 요청에 실패했습니다. 나중에 다시 시도해주세요.");
	            }
	        }); //ajax
	    } //if문
    });
});
