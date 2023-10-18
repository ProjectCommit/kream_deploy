$(function(){
	$.ajax({
		type: 'post',
		url: '/kream/ranking/cykgetProductList2',
		data: 'pg=' +$('#pg').val(),
		dataType: 'json',
		success: function(data){
			console.log(JSON.stringify(data));
			$('#productPagingDv').html(data.userPaging.pagingHTML);
			
		},
		error:function(e){
			console.log(e);
		}
	});
});