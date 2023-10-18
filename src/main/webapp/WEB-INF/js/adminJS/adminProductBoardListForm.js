$(function () {
  $(".productBoardList").on("click", function () {
 


  
    var contentToAdd = `
<div class="right--zeroColumn">
	<span style="color:gray; cursor:pointer" onclick='location.href="/kream/admin/adminMain"'>관리자페이지 홈 > </span>
	<span id="adminPageSpan" class="specifyTitle" > 문의 조회/답변</span>
 </div>
<div class="right--firstColumn">
	<div class="title"><span class="flex">문의 조회/답변</span></div>
</div>
	        `;
    
    var tableCal=`
    <div class="loading-overlay" id="loadingOverlay"
style="position:absolute;
    width: 85vw;
    height: 110vh;
    background-color: #EDF0F5;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;">
    
        <div class="loader"></div>
    </div>
    
    
    <div class="tableInfo--container">
    	<div class="tableInfo">
		</div>
    </div>
    `;
    
    var label=`
        <div class="label--container">
	    	<div class="label--element">
			    <input type="radio" id="option1" name="choice" value="option1" class="styled-radio allReply" checked>
			    <label for="option1" class="styled-label allReply">전체</label>
			</div>
			<div class="label--element ">
			    <input type="radio" id="option2" name="choice" value="option2" class="styled-radio yetReply">
			    <label for="option2" class="styled-label yetReply">미답변</label>
			</div>
			<div class="label--element " style="width:120px;">
			    <input type="radio" id="option3" name="choice" value="option3" class="styled-radio completeReply">
			    <label for="option3" class="styled-label completeReply">답변완료</label>
		    </div>
		</div>    
    
    `;
    
    var inputField = `
<!-- ----------------------- 전체 상품 HTML 폼--------------------------- -->


    
    
<div class="right--productList">
		<table>
		    <thead>
		        <tr class="titleTr">
		            <th>답변하기</th>
		            <th>삭제</th>
		            <th>게시글 번호</th>
		            <th>상품번호</th>     
		            <th>응답</th>      
		            <th>게시판제목</th>  
		            <th>게시판내용</th>  
		            <th>작성자 닉네임</th>      
		            <th>보안</th>      
		            <th>게시판 생성일</th>
		        </tr>
		    </thead>
		    <tbody id="firstTr">
		    </tbody>
		</table>
</div>


	        `;

    $("#right").html(contentToAdd);
    $("#right").append(label);
    $("#right").append(tableCal);
    $("#right").append(inputField);
    
    
      //로딩함수
  function showLoadingOverlay() {
	    const loadingOverlay = document.getElementById('loadingOverlay');
	    loadingOverlay.style.display = 'flex'; // 로딩 오버레이 보이기
	
	    setTimeout(function() {
	        loadingOverlay.style.display = 'none'; // 1초 후에 로딩 오버레이 숨기기
	    }, 600);
	}
  showLoadingOverlay();
    
    
  
 
    		$.ajax({
			url : '/kream/admin/adminProductBoardList_Ajax',
			type:'post',
			dataType: 'json',
			success:function(data){
			var numOfProduct;
	        var totalCount = data.length;
	        var searchCount = data.length; // 실제 검색시 변경필요.
	
	        numOfProduct = `<span>[TOTAL: ${totalCount} 개 / 검색 ${searchCount} 개]</span>`;
	        $('.tableInfo').html(numOfProduct);

				
				var result;
				
				$.each(data, function(index, item){

					var date = new Date(item.boardCreatedAt);
					function pad(n) {
					    return n < 10 ? '0' + n : n;
					}
					var formattedDate = 
				    date.getFullYear() + '-' +
				    pad(date.getMonth() + 1) + '-' +  // getMonth()는 0부터 시작합니다.
				    pad(date.getDate()) + ' ' +
				    pad(date.getHours()) + ':' +
				    pad(date.getMinutes()) + ':' +
				    pad(date.getSeconds());
					
					
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
							    <td align="center" name="boardCreatedAt">${formattedDate}</td>
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
				
				
					
					
				});//each
		
			}//success
			,
			error: function(e){
				console.log(e);
			}
			
			
			
	});

  });
});
