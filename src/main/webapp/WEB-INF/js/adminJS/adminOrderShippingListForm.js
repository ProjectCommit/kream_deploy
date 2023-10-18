$(function () {
  $(".orderShippingListForm").on("click", function () {
 


  
    var contentToAdd = `
<div class="right--zeroColumn">
	<span style="color:gray; cursor:pointer" onclick='location.href="/kream/admin/adminMain"'>관리자페이지 홈 > </span>
	<span id="adminPageSpan" class="specifyTitle" > 배송 관리</span>
 </div>
<div class="right--firstColumn">
	<div class="title"><span class="flex">배송 관리</span></div>
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
    z-index: 400;">
    
        <div class="loader"></div>
    </div>
    
    
    <div class="tableInfo--container">
    	<div class="tableInfo">
		</div>
    </div>
    `;
    
    
    
    var inputField = `
<!-- ----------------------- 전체 상품 HTML 폼--------------------------- -->


    
<div class="right--orderList">
<table cellspacing="0">
    <thead>
        <tr class="titleTr">
        <th>배송 현황</th>
            <th>주문 번호</th>
            <th>상품 번호</th>
            <th>부모 주문 번호</th>
            <th>이메일</th>
            <th>상품 색상</th>
            <th>사이즈</th>
            <th>재고</th>
            <th>가격</th>
            <th>전화번호</th>
            <th>빠른 주문 여부</th>
            <th>주소</th>
            <th>추가 주소</th>
            <th>우편 번호</th>
            <th>주문 상태</th>
            <th>수령인 이름</th>
            <th>수령인 전화번호</th>
            <th>주문 날짜</th>
        </tr>
    </thead>
    <tbody id="firstTr">
    </tbody>
</table>
</div>



	        `;

    $("#right").html(contentToAdd);
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
			url : '/kream/admin/adminShippingListForm_ajax',
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

					var date = new Date(item.orderDate);
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
					
					
					result = `<tr>
					<td align="center">배송 완료</td>
    				
							    <td id="orderId" align="center">${item.orderId}</td>
							    <td align="center">${item.productId}</td>
							    <td align="center">${item.parentId}</td>
							    <td align="center">${item.email}</td>
							    <td align="center">${item.productColor}</td>
							    <td align="center">${item.size}</td>
							    <td align="center">${item.stock}</td>
							    <td align="center">${item.price}</td>
							    <td align="center">${item.phone}</td>
							    <td align="center">${item.quickOrder}</td>
							    <td align="center">${item.address}</td>
							    <td align="center">${item.address2}</td>
							    <td align="center">${item.zipcode}</td>
							    <td align="center">${item.orderState}</td>
							    <td align="center">${item.receiverName}</td>
							    <td align="center">${item.receiverPhone}</td>
							    <td align="center">${formattedDate}</td>
							</tr>

`;
		  
		$('#firstTr').append(result);
		

					
					
				});//each
		
			}//success
			,
			error: function(e){
				console.log(e);
			}
			
			
			
	});

  });
});
