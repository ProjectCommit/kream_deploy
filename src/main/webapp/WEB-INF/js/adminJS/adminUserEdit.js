$(function(){
	$('body').on('click','#cancleBtn',function(){
		$('.userList').trigger('click');
	});

    $('body').on('click','#userEditCompleteBtn',function(){

        var targetTr = $(this).parent().parent(); // 해당 input의 부모 td와 그의 부모 tr를 찾습니다.

        var formData = {};

        targetTr.find('input[type="text"]').each(function() {
            var inputName = $(this).attr('name');
            var inputValue = $(this).val();

            // name이 phone 또는 shoeSize인 경우 parseInt를 사용하여 값을 정수로 변환합니다.
            if(inputName === 'phone' || inputName === 'shoeSize') {
                inputValue = parseInt(inputValue);
                if(isNaN(inputValue)) {
                    alert(inputName + "는 반드시 숫자여야 합니다.");
                    return false;
                }
            }

            formData[inputName] = inputValue;
        });



        $.ajax({
            url: '/kream/admin/adminUserEdit_Ajax',
            type: 'POST',
            data: formData,
            success: function() {
                alert('회원 정보 수정 완료');
                //location.href="/kream/admin/adminMain"
                $('.userList').trigger('click');
            },
            error: function(e) {
                console.log(e);
            }
        });
    });
});
