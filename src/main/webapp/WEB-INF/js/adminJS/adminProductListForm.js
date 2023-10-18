$(function () {
  $(".productList").on("click", function () {
 


  
    var contentToAdd = `
<div class="right--zeroColumn">
	<span style="color:gray; cursor:pointer" onclick='location.href="/kream/admin/adminMain"'>관리자페이지 홈 > </span>
	<span id="adminPageSpan" class="specifyTitle" > 전체 상품 조회/수정</span>
 </div>
<div class="right--firstColumn">
	<div class="title"><span class="flex">전체 상품 조회/수정</span></div>
</div>
	        `;
    var inputField = `
<!-- ----------------------- 전체 상품 HTML 폼--------------------------- -->
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
    <div class="deleteNotice">
    <div class="deleteNotice--icon">
		    <svg 
		    style="width:20px;
		    	color:red;"
		    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
		  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
		</svg>
		    
    </div>
    <div class="deleteNotice--content">
	    <div class="deleteNotice--spanContainer">
	    	<svg style="width:3px; margin:3px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
		  <path fill-rule="evenodd" d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8 1a1 1 0 100-2 1 1 0 000 2zm-3-1a1 1 0 11-2 0 1 1 0 012 0zm7 1a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
		</svg>
	    	
	    	<span>삭제한 상품은 복원 및 수정이 불가능합니다.</span>
    	</div>
	    <div class="deleteNotice--spanContainer">
			<svg style="width:3px; margin:3px;"
			xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
		  <path fill-rule="evenodd" d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8 1a1 1 0 100-2 1 1 0 000 2zm-3-1a1 1 0 11-2 0 1 1 0 012 0zm7 1a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
		</svg>
			<span>삭제된 상품은 재고수량 "0” 변경 및 품절 처리 진행되며, 연동된 제휴몰에서 삭제가 아닌 품절 처리됩니다.</span>
    	</div>
    	</div>
    </div>
    <div class="tableInfo--container">
    	<div class="tableInfo">
		</div>
    	<div class="selectedDeleteBtn">
    		<span>선택 상품 일괄 삭제처리</span>
		</div>
    </div>
    
<div class="right--productList">
		<table>
		    <thead>
		        <tr class="titleTr" >
		            <th>선택</th>
		            <th>수정</th>
		            <th>삭제</th>					
		            <th>상품번호</th>
		            <th>대표이미지</th>
		            <th>카테고리</th>
		            <th>카테고리2</th>
		            <th>성별</th>
		            <th>브랜드</th>
		            <th>상품명</th>
		            <th>상품 설명</th>
		            <th>상품 상세설명</th>
		            <th>가격</th>
		            <th>재고</th>
		            <th>색상</th>
		            <th>조회수</th>
		            <th>등록일</th>
		            <th>출시일</th>
		            <th>사이즈</th>
		            <th>추가이미지1</th>
		            <th>추가이미지2</th>
		            <th>추가이미지3</th>
		            <th>추가이미지4</th>
		            <th>추가이미지5</th>
		            <th>추가이미지6</th>
		            <th>추가이미지7</th>
		            <th>추가이미지8</th>
		            <th>추가이미지9</th>
		        </tr>
		    </thead>
		    <tbody id="firstTr">
		    </tbody>
		</table>
</div>

	        `;

    $("#right").html(contentToAdd);
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
			url : '/kream/admin/adminProductList_Ajax',
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
				var imageUrl1 = "../storage/"+ item.productImg1;
				var imageUrl2 = "../storage/"+ item.productImg2;
				var imageUrl3 = "../storage/"+ item.productImg3;
				var imageUrl4 = "../storage/"+ item.productImg4;
				var imageUrl5 = "../storage/"+ item.productImg5;
				var imageUrl6 = "../storage/"+ item.productImg6;
				var imageUrl7 = "../storage/"+ item.productImg7;
				var imageUrl8 = "../storage/"+ item.productImg8;
				var imageUrl9 = "../storage/"+ item.productImg9;
				var imageUrl10 = "../storage/"+ item.productImg10;

					
					result = `<tr>
					    <th>
					    	<svg 
					    	class="checkBox unchecked"
					    	data-checked="false" data-product-id="1"
						    	xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
					    	</svg>
					    </th>
    <td><input id="editBtn" type="button" value="수정" class="editDeleteBtn"/><br></td>
    <td><input id="deleteBtn" type="button" value="삭제" class="deleteBtn"/></td>  
    <td align="center" name="productId">${item.productId}</td>
    <td align="center" name="productImg1">${item.productImg1}
        <br>
        <img class="productImgesClass" src="${imageUrl1}"/>
    </td>
    <td align="center" name="category">${item.category}</td>
    <td align="center" name="category2">${item.category2}</td>
    <td align="center" name="gender">${item.gender}</td>
    <td align="center" name="brand">${item.brand}</td>
    <td align="center" name="productName">${item.productName}</td>
    <td align="center" name="productExplain">${item.productExplain}</td>
    <td align="center" name="productDetail">${item.productDetail}</td>
    <td align="center" name="price">${item.price}</td>
    <td align="center" name="stock">${item.stock}</td>
    <td align="center" name="productColor">${item.productColor}</td>
    <td align="center" name="hit">${item.hit}</td>
    <td align="center" name="createdDate">${item.createdDate}</td>
    <td align="center" name="releaseDate">${item.releaseDate}</td>
    <td align="center" name="size">${item.size}</td>
    <td align="center" name="productImg2">${item.productImg2}
        <br>
        <img class="productImgesClass" src="${imageUrl2}"/>
    </td>
    <td align="center" name="productImg3">${item.productImg3}
        <br>
        <img class="productImgesClass" src="${imageUrl3}"/>
    </td>
    <td align="center" name="productImg4">${item.productImg4}
        <br>
        <img class="productImgesClass" src="${imageUrl4}"/>
    </td>
    <td align="center" name="productImg5">${item.productImg5}
        <br>
        <img class="productImgesClass" src="${imageUrl5}"/>
    </td>
    <td align="center" name="productImg6">${item.productImg6}
        <br>
        <img class="productImgesClass" src="${imageUrl6}"/>
    </td>
    <td align="center" name="productImg7">${item.productImg7}
        <br>
        <img class="productImgesClass" src="${imageUrl7}"/>
    </td>
    <td align="center" name="productImg8">${item.productImg8}
        <br>
        <img class="productImgesClass" src="${imageUrl8}"/>
    </td>
    <td align="center" name="productImg9">${item.productImg9}
        <br>
        <img class="productImgesClass" src="${imageUrl9}"/>
    </td>
    <td align="center" name="productImg10">${item.productImg10}
        <br>
        <img class="productImgesClass" src="${imageUrl10}"/>
    </td>
</tr>`;
	  
		$('#firstTr').after(result);

// 이제 방금 추가된 행에 대해서만 "null" 검사 및 이미지 삽입 로직 실행
var lastAddedRow = $('#firstTr').next();

lastAddedRow.find(":contains('null')").each(function() {
    var nullImg = `
        <img src="https://www.qualipieces.com/images/virtuemart/typeless/imagenotfound_400x400.jpg"
        class="noProductImg"
        />`;

    // Check if the name attribute starts with "productImg"
    if ($(this).attr("name") && $(this).attr("name").startsWith("productImg")) {
        $(this).append(nullImg);
    }
});

				});
		
			}
			,
			error: function(e){
				console.log(e);
			}
			
			
			
	});

  });
});
