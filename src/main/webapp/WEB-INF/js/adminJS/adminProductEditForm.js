$(function () {
  $("body").on("click", "#editBtn", function () {
  
    var productId = $(this).closest("tr").find('td[name="productId"]').text();   
    var category = $(this).closest("tr").find('td[name="category"]').text();
    var category2 = $(this).closest("tr").find('td[name="category2"]').text();
    var gender = $(this).closest("tr").find('td[name="gender"]').text();
    var brand = $(this).closest("tr").find('td[name="brand"]').text();
    var productName = $(this)
      .closest("tr")
      .find('td[name="productName"]')
      .text();
    var productExplain = $(this)
      .closest("tr")
      .find('td[name="productExplain"]')
      .text();
    var productDetail = $(this)
      .closest("tr")
      .find('td[name="productDetail"]')
      .text();
    var price = $(this).closest("tr").find('td[name="price"]').text();
    var productColor = $(this)
      .closest("tr")
      .find('td[name="productColor"]')
      .text();
    var size = $(this).closest("tr").find('td[name="size"]').text();
      
    var stock = $(this).closest("tr").find('td[name="stock"]').text();
      
    var hit = $(this).closest("tr").find('td[name="hit"]').text();
    var createdDate = $(this)
      .closest("tr")
      .find('td[name="createdDate"]')
      .text();
    var releaseDate = $(this)
      .closest("tr")
      .find('td[name="releaseDate"]')
      .text();
    var productImgs = [];
    for (let i = 1; i <= 10; i++) {
      productImgs[i] = $(this)
        .closest("tr")
        .find('td[name="productImg' + i + '"]')
        .find("img")
        .attr("src");
    }


    // releaseDate 데이터포맷 변경.
    //월과 일에 0을 추가하여 두 자리로 만듦. 이렇게 안하면 input [type="date"]에 val()값으로 들어갈수없음.
    var releaseDateParts = releaseDate.split(",");
    var year = releaseDateParts[0];
    var month = String(releaseDateParts[1]).padStart(2, "0");
    var day = String(releaseDateParts[2]).padStart(2, "0");

    var formattedDate = `${year}-${month}-${day}`;

    //createdDate 데이터포맷 변경.
    var parts = createdDate.split(",");

    // 두 자릿수로 표현되어야 하는 부분을 처리합니다. 예: '2' => '02'
    function pad(number) {
      return number.length < 2 ? "0" + number : number;
    }

    // 문자열을 MySQL DATETIME 형식으로 변환
    var createdformatted =
      parts[0] +
      "-" +
      pad(parts[1]) +
      "-" +
      pad(parts[2]) +
      " " +
      pad(parts[3]) +
      ":" +
      pad(parts[4]) +
      ":" +
      pad(parts[5]);

    

    var contentToAdd = `
	            <div class="right--zeroColumn">
		    	<span style="color:gray; cursor:pointer" onclick='location.href="/kream/admin/adminMain"'>관리자페이지 홈 > </span>
		    	<span id="adminPageSpan"> 상품 수정</span>
		    </div>
		    <div class="right--firstColumn">
		    	<div class="title">
		    		<span class="flex">상품 수정</span>
	    		</div>
		    </div>
	        `;
    var inputField = `
<!-- ----------------------- 상품 수정 HTML 폼--------------------------- -->
<div class="loading-overlay" id="loadingOverlay"
style="position:absolute;
	width: 80vw;
    height: 100vh;
    background-color: #EDF0F5;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;">
    
        <div class="loader"></div>
    </div>
<form id="editForm" enctype="multipart/form-data">

	<!-- 1. 카테고리 상세분류 -->
	<div class="right--firstColumn">
        <div class="title"><span class="flex" style="font-size: 0.9em;">상품 분류 정보</span>
            <span style="color:red; transform:translateY(2px)">*</span>
            </div>
    </div>

<span style="font-size: 0.8em;">1차 분류를 선택하시면 2차 분류가 자동으로 제안됩니다.</span>
	<div class="content--container">
            <div class="content--container__category">
                <span style="font-weight: 700; font-size: 0.9em;">1차 분류</span>
                <input type="text" id="category" name="category" hidden>
				<input type="text" id="category2" name="category2" hidden>
				<input type="text" id="gender" name="gender"  hidden>
                <div class="content--container__category__smallBox content--container__category__smallBox1">
                    <div id="defaultCategoryDiv1" class="categoryDiv">=1차분류=</div>
                     <div class="categoryDiv categoryDiv1">신발</div>
		             <div class="categoryDiv categoryDiv1">아우터</div>
		             <div class="categoryDiv categoryDiv1">상의</div>
		             <div class="categoryDiv categoryDiv1">하의</div>
		             <div class="categoryDiv categoryDiv1">가방</div>
		             <div class="categoryDiv categoryDiv1">지갑</div>
		             <div class="categoryDiv categoryDiv1">시계</div>
		             <div class="categoryDiv categoryDiv1">패션잡화</div>
		             <div class="categoryDiv categoryDiv1">기타</div>
                </div>
            </div>
            <div class="content--container__category">
                <span style="font-weight: 700; font-size: 0.9em;">2차 분류</span>
                <div class="content--container__category__smallBox content--container__category__smallBox2">
                    <div id="defaultCategoryDiv2" class="categoryDiv">=2차분류=</div>
                </div>
            </div>
            <div class="content--container__category">
                <span style="font-weight: 700; font-size: 0.9em;">3차 분류</span>
                <div class="content--container__category__smallBox content--container__category__smallBox3">
                    <div class="categoryDiv categoryDiv3">=3차분류=</div>
                    <div class="categoryDiv categoryDiv3 categorySelected">공용</div>
                    <div class="categoryDiv categoryDiv3">남성</div>
                    <div class="categoryDiv categoryDiv3">여성</div>
                    
                </div>
            </div>
        </div>


<!--2. 상품 기본 정보-->
        <div class="right--firstColumn">
            <div class="title"><span class="flex" style="font-size: 0.9em;">상품 기본 정보</span>
                <span style="color:red; transform:translateY(2px)">*</span></div>
                
        </div>
        <div class="content--container">
            <div class="right--productList">
                <table>
                    <thead>
                        <tr class="titleTr" >
                            <th width="70px"><label for="brand">상품번호(수정 불가)</label></th>
                            <td><input class="readonly" type="text" id="productId" name="productId" readonly></td>
                        </tr>
                        <tr class="titleTr" >
                            <th width="70px"><label for="brand">브랜드</label></th>
                            <td><input type="text" id="brand" name="brand"></td>
                        </tr>
                        <tr class="titleTr" >
                            <th><label for="productName">상품명</label></th>
                            <td><input type="text" id="productName" name="productName"></td>
                        </tr>
                        <tr class="titleTr" >
                            <th>상품 간단 설명</th>
                            <td colspan="3"><input type="text" id="productExplain" name="productExplain" maxlength="100" required></td>
                        </tr>
                        <tr class="titleTr">
                        	<th>출시일</th>
                        	<td><input type="date" id="releaseDate" name="releaseDate" required></td>
                    	</tr>
                        <tr class="titleTr">
                        	<th>등록일</th>
                        	<td><input type="text" id="createdDate" name="createdDate" readonly></td>
                    	</tr>
                    </thead>
                </table>
            </div>
        </div>
        
        <!--2-2. 조회수-->
        <div class="right--firstColumn">
            <div class="title"><span class="flex" style="font-size: 0.9em;">조회수</span>
        	</div>
        </div>
            <span style="font-size: 0.8em;">인기 순위 조정을 위해 수정하실 수 있습니다.</span>                
        <div class="content--container">
            <div class="right--productList">
        		 <table>
                    <thead>
                    	<tr class="titleTr">
	                    	<th width="70px">조회수</th>   	
	                    	<td><input type="text" id="hit" name="hit" required></td>
                    	</tr>
            	   </thead>
                </table>
            </div>
        </div>
        
        <!--3. 가격-->
        <div class="right--firstColumn">
            <div class="title"><span class="flex" style="font-size: 0.9em;">가격</span>
                <span style="color:red; transform:translateY(2px)">*</span></div>
        </div>
        <span style="font-size: 0.8em;">옵션별 상품 가격은 동일하게 입력하여야 하며, 옵션별 가격이 다를 경우 별도의 상품으로 등록해 주십시오.</span>
        <div class="content--container">
            <div class="right--productList">
                <table>
                    <thead>
                        <tr class="titleTr" >
                            <th width="70px">가격</th>
                            <td><input type="number" id="price" name="price" required></td>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
        
        
        
        <!--4. 옵션 등록하기-->
        <div class="right--firstColumn">
            <div class="title"><span class="flex" style="font-size: 0.9em;">옵션 등록하기</span>
               </div>
        </div>
        <span style="font-size: 0.8em;">아래에 있는 [+],[-] 버튼을 눌러 옵션을 추가/제거할 수 있습니다.</span>
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
                        
                    <span>옵션은 20개까지 추가 가능합니다.</span>
                </div>
                <div class="deleteNotice--spanContainer">
                    <svg style="width:3px; margin:3px;"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                    <path fill-rule="evenodd" d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8 1a1 1 0 100-2 1 1 0 000 2zm-3-1a1 1 0 11-2 0 1 1 0 012 0zm7 1a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                    </svg>
                    <span>아무 것도 입력하지 않으면 옵션이 등록되지 않습니다.</span>
                </div>
                <div class="deleteNotice--spanContainer">
                    <svg style="width:3px; margin:3px;"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                    <path fill-rule="evenodd" d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8 1a1 1 0 100-2 1 1 0 000 2zm-3-1a1 1 0 11-2 0 1 1 0 012 0zm7 1a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                    </svg>
                    <span>쉼포(,)는 입력하실 수 없습니다.</span>
                </div>
               
                </div>
            </div>

        <div class="content--container">
            <div class="right--productList" style="flex-direction: column; align-items: center;">
                <table>
                    <thead>
                        <tr class="titleTr"> 
                            <th>색상</th>
                            <td>
                                <input type="text" class="productColor" name="productColor[]" maxlength="45">
                            </td>
                            <th>사이즈</th>
                            <td>
                                <input type="text" class="size" name="size[]" maxlength="45">
                            </td>
                            <th>재고</th>
                            <td>
                                <input type="number" class="stock" name="stock[]" required>
                            </td>
                           
                        </tr>
                    </thead>
                </table>
                <!--누르면 class="titleTr과 똑같은 tr이 table내부에 추가되는"+버튼-->
                <div class="plusMinus--container">
                <svg 
                        class="plusBtn"
                        xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                    </svg>
                    <svg 
                        class="minusBtn"
                        xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>
                    </svg>
                </div>    
                
            </div>
        </div>
        
        
        
        <!-- 5. 상품 이미지 -->
        <div class="right--firstColumn">
            <div class="title"><span class="flex" style="font-size: 0.9em;">상품 이미지</span>
                </div>
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
                        
                    <span>상품 이미지 삭제는 해당 상품 이미지의 우측 상단에 [-] 아이콘을 눌러주세요.</span>
                </div>
                <div class="deleteNotice--spanContainer">
                    <svg style="width:3px; margin:3px;"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                    <path fill-rule="evenodd" d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8 1a1 1 0 100-2 1 1 0 000 2zm-3-1a1 1 0 11-2 0 1 1 0 012 0zm7 1a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                    </svg>
                    <span>등록된 상품 이미지 클릭을 통해 상품 이미지를 확대할 수 있습니다.</span>
                </div>
            </div>
         </div>
        <div class="content--container">
            <div class="right--productList">
                <table>
                    <thead>
                        <tr class="titleTr">
                        	<th>이미지 전체 삭제</th>
                        	<td>
                        		<input class="deleteAllImgBtn" type="button" value="이미지 전체 삭제"/>
                        	</td>
                        <tr class="titleTr">
                            <th width="70px" >이미지 수정</th>
                            <td id="showImgList" height="140px">
                             <div class="content--element" style="display:none;">
						        <input id="productImg1" class="productImg" type="file" name="productImg1" style="display:none;" >
						        <input id="productImg2" class="productImg" type="file" name="productImg2" style="display:none;">
						        <input id="productImg3" class="productImg" type="file" name="productImg3" style="display:none;">
						        <input id="productImg4" class="productImg" type="file" name="productImg4" style="display:none;">
						        <input id="productImg5" class="productImg" type="file" name="productImg5" style="display:none;">
						        <input id="productImg6" class="productImg" type="file" name="productImg6" style="display:none;">
						        <input id="productImg7" class="productImg" type="file" name="productImg7" style="display:none;">
						        <input id="productImg8" class="productImg" type="file" name="productImg8" style="display:none;">
						        <input id="productImg9" class="productImg" type="file" name="productImg9" style="display:none;">
						        <input id="productImg10" class="productImg" type="file" name="productImg10" style="display:none;">
						        
						        <input type="text" id="hiddenProductImg1" name="hiddenProductImg1" style="display:none;">
						        <input type="text" id="hiddenProductImg2" name="hiddenProductImg2" style="display:none;">
						        <input type="text" id="hiddenProductImg3" name="hiddenProductImg3" style="display:none;">
						        <input type="text" id="hiddenProductImg4" name="hiddenProductImg4" style="display:none;">
						        <input type="text" id="hiddenProductImg5" name="hiddenProductImg5" style="display:none;">
						        <input type="text" id="hiddenProductImg6" name="hiddenProductImg6" style="display:none;">
						        <input type="text" id="hiddenProductImg7" name="hiddenProductImg7" style="display:none;">
						        <input type="text" id="hiddenProductImg8" name="hiddenProductImg8" style="display:none;">
						        <input type="text" id="hiddenProductImg9" name="hiddenProductImg9" style="display:none;">
						        <input type="text" id="hiddenProductImg10" name="hiddenProductImg10" style="display:none;">
        
   							 </div>
    <div class="uploadIcon--container">
	        <div class="productImg1 productImg--toggle">
		        <svg id="productImg1--upload" class="uploadIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
				  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
				</svg>
				<div class="deleteImgBtn hidden">-</div>
				<svg class="zoomUpIcon1 hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
				  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
				</svg>
				<div class="zoomUpBackground hidden"></div>
								
				<img class="hidden plusImg" id="plusImg1" alt="" />
			</div>
		<div class="productImg2 productImg--toggle">
	        <svg id="productImg2--upload" class="uploadIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
			  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
			</svg>
			<div class="deleteImgBtn hidden">-</div>
				<svg class="zoomUpIcon1 hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
				  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
				</svg>
				
			<div class="zoomUpBackground hidden"></div>
			
			<img class="hidden plusImg" id="plusImg2" alt=""/>
		</div>
		<div class="productImg3 productImg--toggle">
	        <svg id="productImg3--upload" class="uploadIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
			  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
			</svg>
			<div class="deleteImgBtn hidden">-</div>
				<svg class="zoomUpIcon1 hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
				  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
				</svg>
				
			<div class="zoomUpBackground hidden"></div>
			
			<img class="hidden plusImg" id="plusImg3" alt=""/>
		</div>
		<div class="productImg4 productImg--toggle">
	        <svg id="productImg4--upload" class="uploadIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
			  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
			</svg>
			<div class="deleteImgBtn hidden">-</div>
				<svg class="zoomUpIcon1 hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
				  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
				</svg>
				
			<div class="zoomUpBackground hidden"></div>
			
			<img class="hidden plusImg" id="plusImg4" alt=""/>
		</div>
		<div class="productImg5 productImg--toggle">
	        <svg id="productImg5--upload" class="uploadIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
			  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
			</svg>
			<div class="deleteImgBtn hidden">-</div>
				<svg class="zoomUpIcon1 hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
				  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
				</svg>
				
			<div class="zoomUpBackground hidden"></div>
			
			<img class="hidden plusImg" id="plusImg5" alt=""/>
		</div>
		<div class="productImg6 productImg--toggle">
	        <svg id="productImg6--upload" class="uploadIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
			  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
			</svg>
				<div class="deleteImgBtn hidden">-</div>
				<svg class="zoomUpIcon1 hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
				  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
				</svg>
				
			<div class="zoomUpBackground hidden"></div>
			
			<img class="hidden plusImg" id="plusImg6" alt=""/>
		</div>
		<div class="productImg7 productImg--toggle">
	        <svg id="productImg7--upload" class="uploadIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
			  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
			</svg>
			<div class="deleteImgBtn hidden">-</div>
				<svg class="zoomUpIcon1 hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
				  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
				</svg>
				
			<div class="zoomUpBackground hidden"></div>
			
			<img class="hidden plusImg" id="plusImg7" alt=""/>
		</div>
        <div class="productImg8 productImg--toggle">
	        <svg id="productImg8--upload" class="uploadIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
			  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
			</svg>
			<div class="deleteImgBtn hidden">-</div>
				<svg class="zoomUpIcon1 hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
				  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
				</svg>
				
			<div class="zoomUpBackground hidden"></div>
			
			<img class="hidden plusImg" id="plusImg8" alt=""/>
		</div>
		<div class="productImg9 productImg--toggle">
	        <svg id="productImg9--upload" class="uploadIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
			  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
			</svg>
			<div class="deleteImgBtn hidden">-</div>
				<svg class="zoomUpIcon1 hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
				  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
				</svg>
				
			<div class="zoomUpBackground hidden"></div>
			
			<img class="hidden plusImg" id="plusImg9" alt=""/>
		</div>
		<div class="productImg10 productImg--toggle">
	        <svg id="productImg10--upload" class="uploadIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
			  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
			</svg>
			<div class="deleteImgBtn hidden">-</div>
				<svg class="zoomUpIcon1 hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
				  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
				</svg>
				
			<div class="zoomUpBackground hidden"></div>
			
			<img class="hidden plusImg" id="plusImg10" alt=""/>
		</div>
	</div>
    
                            </td>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
        
        
        
        
        <!--6. 상품 상세설명-->
            <div class="right--firstColumn">
                <div class="title"><span class="flex" style="font-size: 0.9em;">상품 상세 설명</span>
                </div>
            </div>
             <div class="description-container">
		        <textarea id="productDetail" name="productDetail" placeholder="상품에 대한 상세한 설명을 입력해주세요."></textarea>
		        <button id="editBtnComplete" class="submitBtnDesign">상품 수정</button>
		        <button id="deleteBtnComplete" class="deleteBtnDesign">상품 삭제</button>
		    </div>
		    
		    

            
		    
		    
		    <div style="width:10px;height:180px;"></div>
        
        
</form>
<div id="myModal" class="modal1">
    <span class="close1">&times;</span>
    <img class="modal-content1" id="img01" alt="">
    <div id="caption"></div>
</div>
	        `;
    $("#right").html(contentToAdd);
    $("#right").append(inputField);
    //로딩 화면 뿌리기
     function showLoadingOverlay() {
	    const loadingOverlay = document.getElementById('loadingOverlay');
	    loadingOverlay.style.display = 'flex'; // 로딩 오버레이 보이기
	
	    setTimeout(function() {
	        loadingOverlay.style.display = 'none'; // 1초 후에 로딩 오버레이 숨기기
	    }, 150);
	}
      showLoadingOverlay();
          
    $("#productId").val(productId);  
  	// 카테고리 선택 함수
	function selectCategory() {
	    // categoryDiv1 클릭 이벤트 발생시키기
	    $('.categoryDiv1').each(function() {
	        if ($(this).text() === $('#category').val()) {
	            $(this).click();
	            // each문에서 값을 찾았다면 종료하기!
	            return false; 
	        }
	    });
	
	    // categoryDiv2 클릭 이벤트 발생시키기
	    $('.categoryDiv2').each(function() {
	        if ($(this).text() === $('#category2').val()) {
	            $(this).click();
	            // each문에서 값을 찾았다면 종료하기!
	            return false;
	        }
	    });
	}
	
	// 이렇게 호출해서 원하는 카테고리를 선택합니다.
	$("#category").val(category);
	$("#category2").val(category2);
	selectCategory();
	
    $("#gender").val(gender);
    $("#brand").val(brand);
    $("#productName").val(productName);
    $("#productExplain").val(productExplain);
    $("#productDetail").val(productDetail);
    $("#price").val(price);
    
    /* 컬러,재고,사이즈 값 세팅하는작업 */
    //쉼표개수만큼 .plusBtn 클릭으로 옵션 만들기
    var clickCount = Math.max(
    (productColor.match(/,/g) || []).length); // 구분자 , 가 없으면 null반환하지말고 ''반환.
	for (var i = 0; i < clickCount; i++) {
	    $('.plusBtn').click();
	}
	
	var productColors = productColor.split(",").map(function(item){
		return item.trim();
	});
	var sizes = size.split(",").map(function(item) {
	    return item.trim();
	});
	var stocks = stock.split(",").map(function(item) {
	    return Number(item.trim());
	});
	
	for (var i = 0; i <= clickCount; i++) {
        // 컬러,사이즈,재고 입력 필드에 값을 삽입
        // 공백이 포함되어있다면 제거시키고, undefine혹은 null이라면 ""로 반환.
        
        $('.productColor').eq(i).val(productColors[i] ? productColors[i] : "");
        $('.size').eq(i).val(sizes[i] ? sizes[i] : "");
        $('.stock').eq(i).val(stocks[i] ? stocks[i] : "");
    }
    
    $("#releaseDate").val(formattedDate);
    $("#createdDate").val(createdformatted);
    $("#hit").val(hit);
    
    
    //상품리스트에서 상품수정란으로 올때, 존재하는 이미지의 url을 가져와서 src속성에 추가시킨다.
    for (let i = 1; i <= 10; i++) {
      if (productImgs[i] != "../storage/null") {
        var plusBoxImg = $(".productImg" + i + " > img");
        plusBoxImg.attr("src", productImgs[i]);
        plusBoxImg.removeClass("hidden").addClass("visible");
        plusBoxImg.parent().find(".deleteImgBtn").addClass("visible").removeClass('hidden');

        var plusBoxSvg = $(".productImg" + i + " > svg");
        plusBoxSvg.addClass("hidden").removeClass('visible');
      }
    }

    //이미지가 등록되면, + 박스에 이미지를 추가시킨다.
    $("body").on("change", ".productImg", function () {
      var productImgN = $(this).attr("name");
      var findImgBox = $("." + productImgN + " > img");
	  var plusBoxSvg = findImgBox.parent().find('.uploadIcon');
      var reader = new FileReader();
      
      var file = this.files[0];
      
      reader.onload = function (e) {
        findImgBox.attr('src',e.target.result);
        findImgBox.removeClass("hidden").addClass("visible");
        if(findImgBox.attr('src')!=null){
 	       findImgBox.parent().find('.deleteImgBtn').addClass('visible').removeClass('hidden');
	        plusBoxSvg.addClass("hidden").removeClass('visible');
        }else{
        	findImgBox.parent().find('.deleteImgBtn').addClass('hidden').removeClass('visible');
	        plusBoxSvg.addClass("visible").removeClass('hidden');
        }
        
        
        
       
      };
      reader.readAsDataURL(file);
    });
    
    
  });
});
