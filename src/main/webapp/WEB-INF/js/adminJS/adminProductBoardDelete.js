$(function(){
	$('body').on('click','#deleteBoardBtn',function(){
			if(confirm('※주의 : 정말 문의를 삭제하시겠습니까?\n- 삭제한 문의은 복원 및 수정이 불가능합니다.')){
	            var parentBoardId = $(this).closest('tr').find('#parentBoardId').val();
	            if(parentBoardId!='0'){//관리자가 작성한 답변글이라면
	            	//boardId를 
	            	var boardId = parentBoardId;
	            
             	}else{
	            	var boardId = $(this).closest('tr').find('td[name="boardId"]').text();
             	
	            }
	            $.ajax({
                url : '/kream/admin/adminProductBoardDelete_Ajax',
                type: 'post',
                contentType: "application/json", 
                data: JSON.stringify({boardId: boardId}),
                success: function(){
                        alert("상품이 성공적으로 삭제되었습니다.");
                        $('.productBoardList').trigger('click');
                },
                error: function(e){
                    console.log(e);
                    alert("상품 삭제 중 에러가 발생하였습니다.");
                }
			
			});
			
			
		}//if
	});
	
	
});