$(function(){
	$('body').on('click','#userDeleteBtn',function(){
			if(confirm('※주의 : 정말 상품을 삭제하시겠습니까?\n- 삭제한 상품은 복원 및 수정이 불가능합니다.')){
	            var email = $(this).closest('tr').find('td[name="email"]').text();
	            
	            $.ajax({
                url : '/kream/admin/adminUserDelete_Ajax',
                type: 'post',
                contentType: "application/json", 
                data: JSON.stringify({email: email}),
                success: function(){
                        alert("상품이 성공적으로 삭제되었습니다.");
                        $('.userList').trigger('click');
                },
                error: function(e){
                    console.log(e);
                    alert("상품 삭제 중 에러가 발생하였습니다.");
                }
			
			});
			
			
		}//if
	});
	
	$('body').on('click','.selectedUserDeleteBtn',function(){
	if(confirm('※주의 : 정말 상품을 삭제하시겠습니까?\n- 삭제한 상품은 복원 및 수정이 불가능합니다.')){
   
        let selectedEmails = [];
        $(".checkBox[data-checked='true']").each(function() {
            selectedEmails.push($(this).parent().next().next().next().text());
        });
        

        // 선택된 상품이 없는 경우 경고 메시지 표시
        if (selectedEmails.length === 0) {
            alert("선택된 회원이 없습니다.");
            return;
        }

        // AJAX를 사용하여 서버에 목록 전송
        $.ajax({
            url: '/kream/admin/adminUserSelectDelete_Ajax',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify({ userEmailList: selectedEmails }), 
            success: function(response) {
                alert("선택된 상품이 삭제되었습니다.");
                $('.userList').trigger('click');
            },
            error: function(err) {
                alert("상품 삭제 중 오류가 발생했습니다.");
                console.error(err);
            }
        });
    
		}//if
	
	});
});