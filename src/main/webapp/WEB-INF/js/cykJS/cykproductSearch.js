$(function(){

$('#searchBtn').click(function(){
	alert('어랏');
	$.ajax({
		type: 'post',
		url: '/kream/ranking/cykgetProductOne',
		data: {productId : $('#productId').val()},
		dataType: 'json',
		success: function(data){
			console.log(JSON.stringify(data));
			
		},
	 	error: function(e){
	 		console.log(e);
	 	}
	});
});

});