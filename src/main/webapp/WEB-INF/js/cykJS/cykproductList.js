$(function(){
	$.ajax({
		type: 'post',
		url: '/kream/ranking/cykgetProductList',
		data: 'pg=' +$('#pg').val(),
		dataType: 'json',
		success: function(data){
			console.log(JSON.stringify(data));
			
			$.each(data.list, function(index, items){
				$('<tr/>').append($('<td/>', {
					align: 'center',
					text : items.productId
				
				})).append($('<td/>',{
					align: 'center'
					
					}).append($('<a/>',{
					href: '#',
					text: items.category,
					class: 'subjectA'
					}))
				).append($('<td/>',{
					align: 'center',
					text : items.price	
				})).appendTo($('#productListTable'))
			
			}); // $.each
			
			$('#productPagingDiv').html(data.userPaging.pagingHTML);
			
			$('.subjectA').click(function(){
				
				
			});
			
		},
		error:function(e){
			console.log(e);
		}
	});
});