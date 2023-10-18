$(document).ready(function() {
    // 새 배송지 추가 버튼 클릭 시 모달 창 보이기
    $('#addAddressDefault, #addAddressIfNone').on('click', function(e){
        e.preventDefault();
        $('#modalContainer').show(); // 모달 창 보이기
    });

    // 닫기 버튼 또는 모달 외부를 클릭 시 모달 창 숨기기
    $('#addressCancle').on('click', function(e) {
        e.preventDefault();
        $('#modalContainer').hide(); // 모달 창 숨기기
    });
    
    // 이름 입력란 변경시
    $("#nameInput").on("input", function() {
        var patternName = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,50}$/;
        var newName = $(this).val();
        var inputBox = $(this).closest(".input_box");
		
		 if(!patternName.test(newName)){
            $("#nameError").show().text("올바른 이름을 입력해주세요. (2 - 50자)");
            inputBox.addClass("has_error");
        } else {
            $("#nameError").hide();
            inputBox.removeClass("has_error");
        }
        updateSaveButtonState();
    });
    
    // 휴대폰 입력란 변경시
    $("#phoneInput").on("input", function() {
        //var patternPhone = new RegExp("01[016789]-[^0][0-9]{2,3}-[0-9]{3,4}"); // "-" 있어야 함
        //var patternPhone = /^01[016789]-?\d{3,4}-?\d{4}$/; // "-" 있어도, 없어도 됨
        var patternPhone = /^\d{10,11}$/; // 번호만 ("-" 없어야 됨)
        
        var newPhone = $(this).val();
        var inputBox = $(this).closest(".input_box");

        if (!patternPhone.test(newPhone)) {
            $("#phoneError").show().text("정확한 휴대폰 번호를 입력해주세요.");
            inputBox.addClass("has_error");
        } else {
        	$("#phoneError").hide();
            inputBox.removeClass("has_error");
        }
        updateSaveButtonState();
    });
    
    // 우편번호 입력란 변경시
    $("#zipcodeAfter").on("input", function() {
        updateSaveButtonState(); // 입력값 변경 시 버튼 상태 업데이트
    });

    // 주소 입력란 변경시
    $("#addressAfter").on("input", function() {
        updateSaveButtonState();
    });

    // 상세 주소 입력란 변경시
    $("#address2After").on("input", function() {
        updateSaveButtonState();
    });
 	
 	// 모든 입력 값이 비어있지 않으면 버튼 활성화
 	function updateSaveButtonState() {
 		var name = $('#nameInput').val(); 
	    var phone = $('#phoneInput').val();
	    var zipcode = $('#zipcodeAfter').val(); 
	    var address = $('#addressAfter').val(); 
	    var address2 = $('#address2After').val(); 
	    if (name && phone && zipcode && address && address2) {
	        $("#saveAddress").prop("disabled", false);
	        $('#saveAddress').removeClass('disabled') // 활성화 시 클래스 변경
	    } else {
	        $("#saveAddress").prop("disabled", true);
	        $('#saveAddress').addClass('disabled'); // 비활성화 시 클래스 변경
	    }
 	}
 	
 
    // 저장하기 버튼 클릭 시 처리
    $('#saveAddress').on('click', function(e) {
        e.preventDefault();
        var name = $('#nameInput').val(); 
        var phone = $('#phoneInput').val();
        var zipcode = $('#zipcodeAfter').val(); 
        var address = $('#addressAfter').val(); 
        var address2 = $('#address2After').val(); 
        //var isDefault = $('#check1').is(':checked'); // 기본 배송지 여부
        var isDefault = $('.blind').siblings('.check_label').hasClass('checked'); // 기본 배송지 여부
       	console.log(name + phone + zipcode + address + address2 + isDefault);

    	// AJAX 요청 보내기
        $.ajax({
            type: 'POST',
            url: '/kream/my/address/insert',
            data: {
                addressName: name,
                phone: phone,
                zipcode: zipcode,
                address: address,
                address2: address2,
                isDefault: isDefault
            },
            dataType: 'json',  // 데이터 타입 명시
            success: function(response) {
           		console.log("isDefault: " + isDefault);
            	console.log(response);
                // 예: $('#modalContent').html(response);
            	$('#addressInfo').trigger('click');
            	
            	$('#modalContainer').hide();
            	
		        // 주소 정보 생성
		        var addressHtml = `
		        	${isDefault ? '<div class="basic">' : '<div class="other_list">'}
			            <div class="my_item ${isDefault ? 'is_active' : ''}" default-mark="${isDefault ? '기본 배송지' : ''}">
			                <div class="info_bind">
			                    <div class="address_info">
			                        <div class="name_box">
			                            <span class="name">${address.addressName}</span>
			                            ${isDefault ? '<span class="mark">기본 배송지</span>' : ''}
			                        </div>
			                        <p class="phone">${address.phone}</p>
			                        <div class="address_box">
			                            <span class="zipcode">${address.zipcode}</span>
			                            <span class="address">${address.address} ${address.address2}</span>
			                        </div>
			                    </div>
			                </div>
			                <div class="btn_bind">
			                    ${isDefault ? '<a href="#" id="addressModify" class="btn outlinegrey small"> 수정 </a><a href="#" class="btn outlinegrey small"> 삭제 </a>' : 
			                    '<a href="#" class="btn outlinegrey small"> 기본 배송지 </a><a href="#" id="addressModify" class="btn outlinegrey small"> 수정 </a><a href="#" class="btn outlinegrey small"> 삭제 </a>'}
			                </div>
			            </div>
		            </div>
		        `;
		        
		        console.log(addressHtml);
		        
		        // 기본 배송지로 추가하는 경우
		        if (isDefault) {
		            // 기존 기본 배송지가 있는지 확인
		            if ($('.basic').length > 0) {
		                // 기존 기본 배송지가 있는 경우, 해당 주소를 갱신
		                $('.my_list').html(addressHtml);
		            } else {
		                // 기존 기본 배송지가 없는 경우, .my_list에 새로운 기본 배송지 정보 추가
		                $('.my_list').prepend(addressHtml);
		            }
		        } else {
		            // 기본 배송지로 추가하지 않는 경우, .other에 주소 추가
		            $('.my_list .other').append(addressHtml);
		        }
		        
            },
            error: function(error) {
                // 서버에서 오류 응답을 받았을 때 실행할 코드
                console.error('Error:', error);
            }
        }); //ajax
        
    });
    
    // checkbox_item 클래스를 클릭했을 때 이벤트 처리
    function handleCheckboxClick() {
	     var isDefault = !$(this).siblings('.check_label').hasClass('checked');
    	console.log('클릭 이벤트 발생 : ' + isDefault);
	    
	    // SVG 이미지 교체
	    var checkboxIcon = $(this).siblings('.check_label');
	    checkboxIcon.empty();
	        
	    if (isDefault) {
	    	checkboxIcon.addClass('checked');
	        checkboxIcon.append('<svg style="width: 21.5px; height: 22px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square-fill" viewBox="0 0 16 16"><path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/></svg>');
	        checkboxIcon.append('<span class="label_txt">&nbsp기본 배송지로 설정</span>');
	    } else {
	    	checkboxIcon.removeClass('checked');
	        checkboxIcon.append('<svg style="width: 21px; height: 22px; color: white; border : 1px solid gray" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-square" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" fill="white"></path></svg>');
	        checkboxIcon.append('<span class="label_txt">&nbsp기본 배송지로 설정</span>');
	    }
	};
	// 기존 이벤트 핸들러 등록 여부를 확인하여 한 번만 등록하도록 수정
	var isCheckboxEventRegistered = false;	
	// 기존 이벤트 핸들러 제거 후 새로운 핸들러 등록
	if (!isCheckboxEventRegistered) {
	    $('.blind').on('click', handleCheckboxClick);
	    isCheckboxEventRegistered = true;
	}
    
    /*
    // 주소가 없는 경우 기본 배송지로 설정
    if ($('.my_list .my_item').length === 0) {
        isDefault = true;
    }*/
        
    /*
	$('#check1').on('change', function() {
	    var isChecked = $(this).is(':checked');
	    if (isChecked) {
	        // 체크되어 있는 경우
	        $(this).siblings('.check_label').find('use').attr('href', '/path/to/checked-icon.svg#checked-icon'); // 체크된 이미지로 교체
	    } else {
	        // 체크되어 있지 않은 경우
	        $(this).siblings('.check_label').find('use').attr('href', '/path/to/inactive-icon.svg#inactive-icon'); // 체크 안된 이미지로 교체
	    }
	    
	    // 여기에서 isChecked 값을 이용하여 원하는 동작 수행
	    isDefault = $(this).is(':checked');
	});*/
});