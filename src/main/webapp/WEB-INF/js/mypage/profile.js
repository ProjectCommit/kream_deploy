/*
$(function(){
	var maskingEmail = $('#maskingEmail').val();
	alert(maskingEmail);
	
});*/


// 이메일 변경
$(document).ready(function() {
	// 이메일 형식을 검증하는 정규 표현식
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // 변경 버튼 클릭 시
    $("#changeButton").click(function() {
        // 보기/수정 모드 전환
        $("#beforeChange").hide();
        $("#modifySection").show();
    });

    // 취소 버튼 클릭 시
    $("#cancelButton").click(function() {
        // 수정/보기 모드 전환
        $("#beforeChange").show();
        $("#modifySection").hide();
    });

    // 이메일 입력란 변경 시
    $("#newEmailInput").on("input", function() {
        // 이메일 중복 체크 로직
        var newEmail = $(this).val();
        var inputBox = $(".input_box");

        if (!emailRegex.test(newEmail)) {
            // 올바르지 않은 이메일 형식일 때 에러 메시지 표시
            $("#emailError").show().text("이메일 주소를 정확히 입력해주세요.");
            $("#saveButton").prop("disabled", true);
            inputBox.addClass("has_error");
        } else {
            $.ajax({
                type: 'post',
                url: '/kream/my/profile/isExistId',
                data: 'email=' + newEmail,
                dataType: 'text',
                cache: false,
                success: function(data) {
                    if (data === 'exist') {
                        $("#emailError").show().text("이미 사용 중인 이메일입니다.");
                        $("#saveButton").prop("disabled", true);
                        inputBox.addClass("has_error");
                    } else if (data === 'non_exist') {
                        $("#emailError").hide();
                        $("#saveButton").prop("disabled", false);
                        inputBox.removeClass("has_error");
                    }
                },
                error: function(e) {
                    console.log(e);
                }
            });
        }
    });

    // 저장 버튼 클릭 시
    $("#saveButton").click(function() {
    	var newEmail = $("#newEmailInput").val();
    	
        // 변경된 내용을 서버로 전송하고 저장하는 로직
        $.ajax({
            type: 'post',
            url: '/kream/my/profile/updateEmail',
            data: {
        		newEmail: newEmail,
       			oldEmail: oldEmail // 기존 이메일 값 추가
            },
            dataType: 'text',
            success: function(response) {
                // 서버로부터의 응답에 따른 처리 (예: 성공 메시지 표시)
                if (response === 'success') {
	                alert("이메일이 성공적으로 변경되었습니다.");
	                window.location.href = '/kream/login'
	                
	                // 변경 성공 시 수정/보기 모드 전환
	                $("#beforeChange").show();
	                $("#modifySection").hide();
                } else if (response === 'failure') {
                    alert("이메일 변경에 실패하였습니다.");
                }
            },
            error: function(e) {
                console.log(e);
            }
        }); //ajax
    });
});




// 비밀번호 변경
$(document).ready(function() {
	// 비밀번호를 마스킹 처리하는 함수
    function maskPassword(password) {
        // 비밀번호 길이만큼 '*'로 이루어진 문자열을 반환
        return '*'.repeat(password.length);
    }
    // 서버로부터 받은 비밀번호 값
    var userPassword = "${user.pwd}"; // 이 부분에 서버에서 받아온 비밀번호 값 넣어주세요

    // 마스킹된 비밀번호로 교체
    var maskedPassword = maskPassword(userPassword);
    // 마스킹된 비밀번호를 <p> 태그에 적용
    $(".desc.password").text(maskedPassword);
    
    
    // 정규 표현식을 사용하여 올바른 비밀번호 형식을 검증
    var pwdRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    
    // 변경 버튼 클릭 시
    $("#changePwdButton").click(function() {
        // 보기/수정 모드 전환
        $("#beforePwdChange").hide();
        $("#modifyPwdSection").show();
    });
    
    // 취소 버튼 클릭 시
    $("#cancelPwdButton").click(function() {
        // 수정/보기 모드 전환
        $("#beforePwdChange").show();
        $("#modifyPwdSection").hide();
    });
    
    // 이전 비밀번호 입력란 변경 시
    $("#oldPwdInput").on("input", function() {
        var oldPwd = $(this).val();
        var inputBox = $(this).closest(".input_box");

        if (oldPwd === "") {
            // 이전 비밀번호를 입력하지 않은 경우 에러 메시지 표시 및 CSS 클래스 적용
            inputBox.find(".input_error").text("영문, 숫자, 특수문자를 조합해서 입력해주세요. (8-16자)");
            inputBox.addClass("has_error");
        } else {
            // 이전 비밀번호를 입력한 경우 에러 메시지 제거 및 CSS 클래스 제거
            inputBox.find(".input_error").text("");
            inputBox.removeClass("has_error");
        }
    });

    // 새 비밀번호 입력란 변경 시
    $("#newPwdInput").on("input", function() {
        var newPwd = $(this).val();
        var inputBox = $(this).closest(".input_box");

        if (!pwdRegex.test(newPwd)) {
            // 올바르지 않은 새 비밀번호 형식일 때 에러 메시지 표시 및 CSS 클래스 적용
            inputBox.find(".input_error").text("영문, 숫자, 특수문자를 조합해서 입력해주세요. (8-16자)");
            inputBox.addClass("has_error");
        } else {
            // 올바른 새 비밀번호 형식일 때 에러 메시지 제거 및 CSS 클래스 제거
            inputBox.find(".input_error").text("");
            inputBox.removeClass("has_error");
        }
    });
    
    // 저장 버튼 클릭 시
    $("#savePwdButton").click(function() {
        var oldPwd = $("#oldPwdInput").val();
        var newPwd = $("#newPwdInput").val();
		
		// 서버로 전송할 데이터
        var data = {
            oldPassword: oldPwd,
            newPassword: newPwd
        };
        
        
        // 변경된 내용을 서버로 전송하고 저장하는 로직
        $.ajax({
            type: 'post',
            url: '/kream/my/profile/updatePassword',
            data: JSON.stringify(data),
            contentType: 'application/json',
            dataType: 'text',
            success: function(response) {
                if (response === 'success') {
                    alert("비밀번호가 성공적으로 변경되었습니다.");
                    window.location.href = '/kream/login';
                } else if (response === 'incorrect_password') {
                    alert("기존 비밀번호가 다릅니다. 다시 확인해주세요.");
                } else {
                    alert("비밀번호 변경에 실패하였습니다.");
                }
            },
            error: function(e) {
                console.log(e);
            }
        });//ajax
    });
});


// "변경" 버튼 클릭 시 통신사 인증 팝업 띄우기
$("#changePhoneNumberButton").click(function() {
    // 팝업 띄우는 로직 추가
    // 팝업에서 통신사 인증 후 사용자가 입력한 번호를 서버로 전송
    var newPhoneNumber = prompt("휴대폰 번호를 입력하세요:");
    
    // 서버로 휴대폰 번호 업데이트 요청 보내기
    $.ajax({
        type: 'post',
        url: '/kream/my/profile/updatePhoneNumber',
        data: { phoneNumber: newPhoneNumber },
        dataType: 'text',
        success: function(response) {
            // 서버에서 성공적으로 처리한 후의 로직 추가
            // 예: 성공 메시지를 출력하거나 페이지 새로고침 등
        },
        error: function(e) {
            console.log(e);
        }
    });
});