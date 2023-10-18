$('body').on('click','.yetReply',function(){

    var tableInfo = `
    	<div class="tableInfo">
		</div>
           `;
	
	$.ajax({
		url : '/kream/admin/adminProductBoardList_yetReply',
			type:'post',
			dataType: 'json',
			success:function(data){
			var numOfProduct;
	        var totalCount = data.length;
	        var searchCount = data.length; // 실제 검색시 변경필요.
	
	        numOfProduct = `<span>[TOTAL: ${totalCount} 개 / 검색 ${searchCount} 개]</span>`;
	        $('.tableInfo').html(numOfProduct);

				
				var result;
					$('#firstTr').html('');
				$.each(data, function(index, item){

					var response = item.response;
					if(response=='0'){
						response=`<span style="color:red;">미답변</span>`;
					}else if(response=='1'){
						response=`<span style="color:blue;">답변완료</span>`;
					}else{
						response=`<span style="color:yellow;">미식별</span>`;
					}
					result = `<tr>
						    	<td align="center"><button id="replyBoardBtn" class="replyBoardBtn">답변하기</button></td>
							    <td align="center"><button id="deleteBoardBtn"class="deleteBtn">삭제</button></td>
							    <td align="center" id="boardId" name="boardId">${item.boardId}<input type="text" id="parentBoardId" value="${item.parentBoardId}" hidden></td>
							    <td align="center" id="productId" name="productId">${item.productId}</td>
							    <td align="center" name="response">${response}</td>
							    <td align="center" name="boardTitle">${item.boardTitle}</td>
							    <td align="center" name="boardContent">${item.boardContent}</td>
							    <td align="center" name="nickname">${item.nickname}</td>
							    <td align="center" name="security">${item.security}</td>
							    <td align="center" name="boardCreatedAt">${item.boardCreatedAt}</td>
							</tr>`;
		  
			
	    	$('#firstTr').append(result);

	    	var addedTr = $('#firstTr').children().last();
			
	    	if(addedTr.find('td[name="response"]').text().trim() == '답변완료') {
			    var btn = addedTr.find('.replyBoardBtn');
			    btn.text('답변확인').addClass('replyCheckBtn').removeClass('replyBoardBtn');
			}
			
			var parentIdVal = addedTr.find('#parentBoardId').val();
			if(parentIdVal!='0'){
				addedTr.find('td[name="boardId"]').text(parentIdVal);
			}//if

					

				});
		
			}
			,
			error: function(e){
				console.log(e);
			}
			
	
	});
	
});

$('body').on('click','.allReply',function(){
$.ajax({
		url : '/kream/admin/adminProductBoardList_allReply',
			type:'post',
			dataType: 'json',
			success:function(data){
			var numOfProduct;
	        var totalCount = data.length;
	        var searchCount = data.length; // 실제 검색시 변경필요.
	
	        numOfProduct = `<span>[TOTAL: ${totalCount} 개 / 검색 ${searchCount} 개]</span>`;
	        $('.tableInfo').html(numOfProduct);

				
				var result;
					$('#firstTr').html('');
				$.each(data, function(index, item){

					var response = item.response;
					if(response=='0'){
						response=`<span style="color:red;">미답변</span>`;
					}else if(response=='1'){
						response=`<span style="color:blue;">답변완료</span>`;
					}else{
						response=`<span style="color:yellow;">미식별</span>`;
					}
					
					result = `<tr>
						    	<td align="center"><button id="replyBoardBtn" class="replyBoardBtn">답변하기</button></td>
							    <td align="center"><button id="deleteBoardBtn"class="deleteBtn">삭제</button></td>
							    <td align="center" id="boardId" name="boardId">${item.boardId}<input type="text" id="parentBoardId" value="${item.parentBoardId}" hidden></td>
							    <td align="center" id="productId" name="productId">${item.productId}</td>
							    <td align="center" name="response">${response}</td>
							    <td align="center" name="boardTitle">${item.boardTitle}</td>
							    <td align="center" name="boardContent">${item.boardContent}</td>
							    <td align="center" name="nickname">${item.nickname}</td>
							    <td align="center" name="security">${item.security}</td>
							    <td align="center" name="boardCreatedAt">${item.boardCreatedAt}</td>
							</tr>`;
		  

					$('#firstTr').append(result);

			    	var addedTr = $('#firstTr').children().last();
					
			    	if(addedTr.find('td[name="response"]').text().trim() == '답변완료') {
			    var btn = addedTr.find('.replyBoardBtn');
			    btn.text('답변확인').addClass('replyCheckBtn').removeClass('replyBoardBtn');
			}
					
					var parentIdVal = addedTr.find('#parentBoardId').val();
					if(parentIdVal!='0'){
						addedTr.find('td[name="boardId"]').text(parentIdVal);
					}//if
				});
		
			}
			,
			error: function(e){
				console.log(e);
			}
			
	
	});
	
});


$('body').on('click','.completeReply',function(){
$.ajax({
		url : '/kream/admin/adminProductBoardList_CompleteReply',
			type:'post',
			dataType: 'json',
			success:function(data){
			var numOfProduct;
	        var totalCount = data.length;
	        var searchCount = data.length; // 실제 검색시 변경필요.
	
	        numOfProduct = `<span>[TOTAL: ${totalCount} 개 / 검색 ${searchCount} 개]</span>`;
	        $('.tableInfo').html(numOfProduct);

				$('#firstTr').html('');
				var result;
				$.each(data, function(index, item){	
				
               var response = item.response;
					if(response=='0'){
						response=`<span style="color:red;">미답변</span>`;
					}else if(response=='1'){
						response=`<span style="color:blue;">답변완료</span>`;
					}else{
						response=`<span style="color:yellow;">미식별</span>`;
					}
					
					result = `<tr>
						    	<td align="center"><button id="replyBoardBtn" class="replyBoardBtn">답변하기</button></td>
							    <td align="center"><button id="deleteBoardBtn"class="deleteBtn">삭제</button></td>
							    <td align="center" id="boardId" name="boardId">${item.boardId}<input type="text" id="parentBoardId" value="${item.parentBoardId}" hidden></td>
							    <td align="center" id="productId" name="productId">${item.productId}</td>
							    <td align="center" name="response">${response}</td>
							    <td align="center" name="boardTitle">${item.boardTitle}</td>
							    <td align="center" name="boardContent">${item.boardContent}</td>
							    <td align="center" name="nickname">${item.nickname}</td>
							    <td align="center" name="security">${item.security}</td>
							    <td align="center" name="boardCreatedAt">${item.boardCreatedAt}</td>
							</tr>`;
					$('#firstTr').append(result);

			    	var addedTr = $('#firstTr').children().last();
					
			    	if(addedTr.find('td[name="response"]').text().trim() == '답변완료') {
			    var btn = addedTr.find('.replyBoardBtn');
			    btn.text('답변확인').addClass('replyCheckBtn').removeClass('replyBoardBtn');
			}
					
					var parentIdVal = addedTr.find('#parentBoardId').val();
					if(parentIdVal!='0'){
						addedTr.find('td[name="boardId"]').text(parentIdVal);
					}//if

				});
		
			}
			,
			error: function(e){
				console.log(e);
			}
			
	
	});
	
	
	
});

//답변확인 버튼
$('body').on('click','.replyCheckBtn',function(){

    var tableInfo = `
    	<div class="tableInfo">
		</div>
           `;
           var thisTr = $(this).closest('tr');
			var boardId = thisTr.find('#boardId').text();
			
	
	$.ajax({
		url : '/kream/admin/adminProductBoardList_replyCheck',
			type:'post',
			data:{
			boardId:boardId
			},
			dataType: 'json',
			success:function(data){
				
				var result;
				$.each(data, function(index, item){
				
				
					
					result = `
		<tr>
			<td colspan="11">
				<div class="custom-textarea-cell">
					<div class="custom-textareaDiv">
						<img src="../img/gpt.png" alt="gptImage" class="gptDiv"/>
						<textarea id="boardContent" class="custom-textarea">${item.boardContent}</textarea>
					</div>
					<div class="replyCompleteBtnDiv">
						<button class="replyEditBtn">답변 수정</button>
					</div>
				</div>
				<input id="productId_${item.boardId}" type="text" hidden value="${item.productId}" />
				<input id="boardId_${item.boardId}" type="text" hidden value="${item.boardId}" />
				<input id="boardTitle_${item.boardId}" type="text" hidden value="${item.boardTitle}" />
				<input id="nickname_${item.boardId}" type="text" hidden value="${item.nickname}" />
				<input id="parentBoardId_${item.boardId}" type="text" hidden value="${item.parentBoardId}" />
				<input id="security_${item.boardId}" type="text" hidden value="${item.security}" />
				<input id="response_${item.boardId}" type="text" hidden value="${item.response}" />
				<input id="boardCreatedAt_${item.boardId}" type="text" hidden value="${item.boardCreatedAt}" />
			</td>
		</tr>
	`;
		  
			
	    	thisTr.after(result);

				});
		
		var replyCheckBtn = thisTr.find('.replyCheckBtn');
	
		replyCheckBtn.addClass('cancleBoardBtn').removeClass('replyCheckBtn');
    	replyCheckBtn.text('취소');
    	
		
			}
			,
			error: function(e){
				console.log(e);
			}
			
	
	});
	
	
	
	
});