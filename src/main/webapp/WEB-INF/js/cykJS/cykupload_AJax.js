$(function(){
	$('#uploadBtn').click(function(){
		var formData = new FormData($('#uploadForm')[0]);
		
		$.ajax({
			type: 'post',
			enctype: 'multipart/form-data',
			processData: false,
			contentType: false,
			url: '/kream/ranking/cykupload_AJax',
			data: formData,
			success: function(data){
				alert(data);
				$('#resultDiv').html(data);
			},
			error: function(e){
				console.log(e);
				
			}
		});
	});
});