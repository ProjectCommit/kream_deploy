$(function(){
	$.ajax({
		type: 'post',
		url: '/kream/ranking/cykgetUpload_list_AJax',
		dataType: 'json',
		success: function(data){
			console.log(JSON.stringify(data));
			console.log(data[0].seq)
			
		var result;
		var plus = 4;
		var maxToShow =4; // 표시할 최대 항목 수
		var test1 = document.querySelector('.test1');

		$.each(data, function(index , item){
			if(index < maxToShow){
				result = `<tr>` + 
						`<td align="center">` + item.seq + `</td>` +
						`<td align="center">` + 
							`<img src="../storage/` + item.image1 + `" style="width: 70px; height: 70px;" alt="">` +
						`</td>` +
							`<td align="center">` + item.imageName + `</td>` +
						`</tr>`;
				$('#imageListTable').append(result);		 	
					}
				});

		test1.onclick = function(){
			maxToShow += plus;
			$('#imageListTable').empty();
			
			$.each(data, function(index , item){
				if(index < maxToShow){
					result = `<tr>` + 
							`<td align="center">` + item.seq + `</td>` +
							`<td align="center">` + 
								`<img src="../storage/` + item.image1 + `" style="width: 70px; height: 70px;" alt="">` +
							`</td>` +
								`<td align="center">` + item.imageName + `</td>` +
							`</tr>`;
					$('#imageListTable').append(result);		 	
						}
					});
		}; //동적쿼리 쓰면 테이블 너비 변경됨.

		},
		error: function(e){
			console.log(e);
		}
	});
});