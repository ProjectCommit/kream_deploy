$(function(){
	$('body').on('click','#orderCancleBtn',function(){
		if(confirm('주문을 취소하시겠습니까?')){
		var orderId = $(this).closest('tr').find('#orderId').text();
        


        $.ajax({
            url: '/kream/admin/adminOrderCancle_ajax',
            type: 'POST',
            data: {
            	orderId : orderId
            },
            success: function() {
                alert('주문 취소 완료');
                $('.orderListForm').trigger('click');
            },
            error: function(e) {
            alert('머선일이고ㅠㅠ');
                console.log(e);
            }
        });//ajax
    
    }
	});
	
	
	

    $('body').on('click','#orderCheckBtn',function(){
    
    if(confirm('발주를 확인하시겠습니까?')){
		var orderId = $(this).closest('tr').find('#orderId').text();
        


        $.ajax({
            url: '/kream/admin/adminOrderCheck_ajax',
            type: 'POST',
            data: {
            	orderId : orderId
            },
            success: function() {
                alert('발주 확인 완료');
                $('.orderListForm').trigger('click');
            },
            error: function(e) {
            alert('머선일이고');
                console.log(e);
            }
        });//ajax
    
    }
    });//orderCheckBtn




});
