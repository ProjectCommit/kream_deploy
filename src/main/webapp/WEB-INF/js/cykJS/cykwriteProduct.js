$(function(){
	$('#writeBtn').click(function(){

			$.ajax({
				type: 'post',
				url: '/kream/ranking/cykproductWrite',
				data: {productId : $('#productId').val()} ,// $('writeForm').serialize()
				success: function(){
					alert('입력완료');
				}, 
				error: function(e){
					console.log(e);
				}
			
			});
		
	});
});