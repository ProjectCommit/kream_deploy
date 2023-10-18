$(function(){
	$('body').on('click','#shippingCancleBtn',function(){
		if(confirm('발주를 취소하시겠습니까?')){
		var orderId = $(this).closest('tr').find('#orderId').text();
        


        $.ajax({
            url: '/kream/admin/adminOrderCancle_ajax',
            type: 'POST',
            data: {
            	orderId : orderId
            },
            success: function() {
                alert('발주 취소 완료');
                $('.orderCheckListForm').trigger('click');
            },
            error: function(e) {
            alert('머선일이고ㅠㅠ');
                console.log(e);
            }
        });//ajax
    
    }
	});
	
	
	

    $('body').on('click','#orderShippingBtn',function(){
    
	    if(confirm('배송이 시작되었습니다.')){
			var orderId = $(this).closest('tr').find('#orderId').text();
	        
	
	
	        $.ajax({
	            url: '/kream/admin/adminOrderShipping_ajax',
	            type: 'POST',
	            data: {
	            	orderId : orderId
	            },
	            success: function() {
	                alert('배송 완료');
	                $('.orderCheckListForm').trigger('click');
	            },
	            error: function(e) {
	            alert('머선일이고');
	                console.log(e);
	            }
	        });//ajax
	    
	    }
    });//orderCheckBtn




});
