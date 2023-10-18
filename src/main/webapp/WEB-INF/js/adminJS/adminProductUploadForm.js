//상품등록 클릭시, 컨텐츠를 표시하는 오른쪽(#right)에 html요소를 동적으로 뿌려주는 파일입니다.


$(function(){
  $(".productUpload").on("click", function () {
    var contentToAdd = `
	           <div class="right--zeroColumn">
            <span style="color:gray; cursor:pointer" onclick='location.href="/kream/admin/adminMain"'>관리자페이지 홈 > </span>
            <span id="adminPageSpan" class="specifyTitle" > 상품 등록</span>
         </div>
        <div class="right--firstColumn">
            <div class="title">
            	<span class="flex">상품 등록</span>
            </div>
        </div>
        
        
	        `;
    var inputField = `
<!-- ----------------------- 상품 등록 HTML 폼--------------------------- -->
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
<form id="uploadForm">
	<!-- 1. 카테고리 상세분류 -->
	<div class="right--firstColumn">
        <div class="title"><span class="flex" style="font-size: 0.9em;">상품 분류 정보</span>
            <span style="color:red; transform:translateY(2px)">*</span></div>
    </div>
	<span style="font-size: 0.8em;">1차 분류를 선택하시면 2차 분류가 자동으로 제안됩니다.</span>
	<div class="content--container">
            <div class="content--container__category">
                <span style="font-weight: 700; font-size: 0.9em;">1차 분류</span>
                <input type="text" id="category" name="category" hidden>
				<input type="text" id="category2" name="category2"  hidden>
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
        
        <!--5. 상품 이미지-->
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
                        <tr class="titleTr" >
                            <th width="70px">상품 등록</th>
                            <td><input id="productImg" type="file" name="productImg[]" multiple></td>
                        </tr>
                        <tr class="titleTr">
                            <th width="70px" >이미지 미리보기</th>
                            <td id="showImgList" height="140px"></td>
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
		        <button id="submitBtn" class="submitBtnDesign">상품 등록</button>
		        <div id="popupClickProductUpload" class="popupClickProductUpload">
		        	<svg
		        		 class="alertImg"
		        		 xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/></svg>
		        	<span>상품 등록시</span>
		        	<span>유의사항</span>
	        	</div>
		    </div>
		    
		    

            
		    
		    
		    <div style="width:10px;height:180px;"></div>
</form>
	        `;
	        
	        

    $("#right").html(contentToAdd);
    $("#right").append(inputField);
      function showLoadingOverlay() {
	    const loadingOverlay = document.getElementById('loadingOverlay');
	    loadingOverlay.style.display = 'flex'; // 로딩 오버레이 보이기
	
	    setTimeout(function() {
	        loadingOverlay.style.display = 'none'; // 1초 후에 로딩 오버레이 숨기기
	    }, 50);
	}
      showLoadingOverlay();
	initializeCategory();//adminProductUpload.js 에서 만들어놓은 함수를 호출!
});

});