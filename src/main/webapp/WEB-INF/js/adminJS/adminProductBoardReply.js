$(function() {
    $('body').on('click', '.replyBoardBtn', function() {
    
    
    
    
     
    	var result=`
			<tr>
			    <td colspan="11">
			  	  <div class="custom-textarea-cell">
				    	<div class="custom-textareaDiv">
				    		<img src="../img/gpt.png" alt="gptImage" class="gptDiv"/>
					        <textarea id="boardContent" class="custom-textarea" placeholder="답변을 입력해주세요"></textarea>
				        </div>
				        <div class="replyCompleteBtnDiv">
					        <button class="replyCompleteBtn">등록</button>
				        </div>
			        </div>
			    </td>
			</tr>
    	`;
    	$(this).addClass('cancleBoardBtn').removeClass('replyBoardBtn');
    	$(this).text('취소');
    	
    	$(this).parent().parent().after(result);
    
        
    });
    
    $('body').on('click','.cancleBoardBtn', function(){
    var response = $(this).closest('tr').find('td[name="response"]').text();
    if(response=='미답변'){//응답이 되지않은건 답변하기
	    	$(this).removeClass('cancleBoardBtn').addClass('replyBoardBtn');
	    	$(this).text('답변하기');
    	}else{//응답이 된건 답변 확인버튼으로!!
	    	$(this).removeClass('cancleBoardBtn').addClass('replyCheckBtn');
	    	$(this).text('답변확인');
    	
    	}
    	
    	$(this).parent().parent().next().remove();
    });
    
    
    
    $('body').on('click', '.replyCompleteBtn', function(){
    	if(confirm('※주의 : 답변을 등록하시겠습니까?')){
    	var productId = $(this).closest('tr').prev().find('#productId').text();
    	var boardId = $(this).closest('tr').prev().find('#boardId').text();
    	var boardContent = $(this).parent().prev().find('#boardContent').val();
        var adminNickname =$('#adminNickname').val();

	
	            $.ajax({
                    type: 'post',
                    url: '/kream/product/setProductReply',
                    data: {
                        productId: productId,
                        boardId: boardId,
                        boardContent: boardContent,
                        nickname: adminNickname
                    },
                    success: function () {
                        alert('등록에 성공하였습니다.');
                        window.location.reload();
                    },
                    error: function () {
                        alert('등록에 실패하였습니다. 잠시후 다시 등록해 주세요.');
                        window.location.reload();
                    }
                });
			
			
		}//if
    
    });

    
});
