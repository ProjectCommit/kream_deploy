$(function(){
	$('body').on('click','#deleteBtn',function(){
			if(confirm('※주의 : 정말 상품을 삭제하시겠습니까?\n- 삭제한 상품은 복원 및 수정이 불가능합니다.')){
	            var productId = $(this).closest('tr').find('td[name="productId"]').text();
	            
	            $.ajax({
                url : '/kream/admin/adminProductDelete_Ajax',
                type: 'post',
                contentType: "application/json", 
                data: JSON.stringify({productId: productId}),
                success: function(){
                        alert("상품이 성공적으로 삭제되었습니다.");
                        location.reload(); 
                },
                error: function(e){
                    console.log(e);
                    alert("상품 삭제 중 에러가 발생하였습니다.");
                }
			
			});
			
			
		}//if
	});
	
	$('body').on('click','.selectedDeleteBtn',function(){
	if(confirm('※주의 : 정말 상품을 삭제하시겠습니까?\n- 삭제한 상품은 복원 및 수정이 불가능합니다.')){
   
        let selectedProductIds = [];
        $(".checkBox[data-checked='true']").each(function() {
            selectedProductIds.push(parseInt($(this).parent().next().next().next().text()));
        });

        // 선택된 상품이 없는 경우 경고 메시지 표시
        if (selectedProductIds.length === 0) {
            alert("선택된 상품이 없습니다.");
            return;
        }

        // AJAX를 사용하여 서버에 productId 목록 전송
        $.ajax({
            url: '/kream/admin/adminProductSelectDelete_Ajax',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify({ productIdList: selectedProductIds }), 
            success: function(response) {
                alert("선택된 상품이 삭제되었습니다.");
                location.reload(); 
            },
            error: function(err) {
                alert("상품 삭제 중 오류가 발생했습니다.");
                console.error(err);
            }
        });
    
		}//if
	
	});
});