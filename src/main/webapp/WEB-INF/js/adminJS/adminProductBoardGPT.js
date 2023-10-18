$(function(){
	$('body').on('click','.gptDiv',function(){
		var comment = $(this).closest('tr').prev().find('td[name="boardContent"]').text();
		var boardContent = $(this).closest('tr').find('#boardContent');
		 
	
		$.ajax({
    	                url: '/kream/chatGPT',
    	                method: 'POST',
    	                contentType: 'application/json',
    	                data: JSON.stringify({ inputText: comment }),
    	                dataType:'text',
    	                success: function(response) {
    	                   boardContent.val(response);
    	                },
    	                error: function(e) {
    	                    console.log(e);
    	                    alert('뭔가 잘못됐수다!');
    	                }
    	            });
	
	});
});