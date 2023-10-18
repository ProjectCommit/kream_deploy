$(function () {
  $("body").on("click", "#userEditBtn", function () {
	var email = $(this).closest("tr").find('td[name="email"]').text();

    var contentToAdd = `
		<div class="right--zeroColumn">
			<span style="color:gray; cursor:pointer" onclick='location.href="/kream/admin/adminMain"'>관리자페이지 홈 > </span>
			<span id="adminPageSpan" class="specifyTitle" > 회원 목록 조회/수정</span>
		 </div>
		<div class="right--firstColumn">
			<div class="title"><span class="flex">전체 회원 조회/수정</span></div>
		</div>
	        `;
    var inputField = `
<!-- ----------------------- 전체 상품 HTML 폼--------------------------- -->
		
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
	    
			<svg style="width:3px; margin:3px;"
			xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
		  <path fill-rule="evenodd" d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8 1a1 1 0 100-2 1 1 0 000 2zm-3-1a1 1 0 11-2 0 1 1 0 012 0zm7 1a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
		</svg>
			<span>관리자는 관리자를 해임할 수 없습니다.</span>
    	</div>
    	</div>
    </div>
    <div class="tableInfo--container">
    	<div class="tableInfo">
		</div>
    	<div class="selectedUserDeleteBtn">
    		<span>선택 상품 일괄 삭제처리</span>
		</div>
    </div>
    
<div class="right--productList">
		<table>
    <thead>
        <tr class="titleTr">
            <th>선택</th>
            <th>수정</th>
            <th>삭제</th>
            <th>이메일</th>
            <th>비밀번호</th>
            <th>전화번호</th>
            <th>신발 사이즈</th>
            <th>이름</th>
            <th>주소</th>
            <th>추가 주소</th>
            <th>우편번호</th>
            <th>계정 생성일</th>
            <th>최종 수정일</th>
            <th>프로필 이름</th>
            <th>소개</th>
            <th>닉네임</th>
            <th>관리자 여부</th>
        </tr>
    </thead>
    <tbody id="firstTr">
    </tbody>
</table>

</div>

	        `;

    $("#right").html(contentToAdd);
    $("#right").append(inputField);
    result = ``;
    $.ajax({
			url : '/kream/admin/adminUserList_Ajax',
			type:'post',
			dataType: 'json',
			success:function(data){
			var numOfProduct;
	        var totalCount = data.length;
	        var searchCount = data.length; // 실제 검색시 변경필요.
	
	        numOfProduct = `<span>[TOTAL: ${totalCount} 개 / 검색 ${searchCount} 개]</span>`;
	        $('.tableInfo').html(numOfProduct);
	        
	        let reversedData = [...data].reverse();
	        
	        
	        
	        reversedData.forEach(function(user){
	        	if(user.email == email){//현재 수정하는 사용자 정보일경우
	        	
	        	   result += `
					        <tr>
					            <th>
					               <input id="cancleBtn" type="button" value="취소" class="editDeleteCompleteBtn"/>
					            </th>
					            <td><input id="userEditCompleteBtn" type="button" value="수정" class="editDeleteCompleteBtn"/><br></td>
					            <td><input id="userDeleteBtn" type="button" value="삭제" class="deleteBtn"/></td>  
					            <td align="center"><input type="text" name="email" id="email" value="${user.email}" hidden/>${user.email}</td>
					            <td align="center"><input type="text" name="pwd" id="pwd" value="${user.pwd}" /></td>
					            <td align="center"><input type="text" name="phone" id="phone" value="${user.phone}" /></td>
					            <td align="center"><input type="text" name="shoeSize" id="shoeSize" value="${user.shoeSize}" /></td>
					            <td align="center"><input type="text" name="userName" id="userName" value="${user.userName}" /></td>
					            <td align="center"><input type="text" name="address" id="address" value="${user.address}" /></td>
					            <td align="center"><input type="text" name="address2" id="address2" value="${user.address2}" /></td>
					            <td align="center"><input type="text" name="zipcode" id="zipcode" value="${user.zipcode}" /></td>
					            <td align="center"><input type="text" id="createdDate" value="${user.createdDate}" hidden/>${user.createdDate}</td>
					            <td align="center"><input type="text" id="releaseDate" value="${user.releaseDate}" hidden/>${user.releaseDate}</td>
					            <td align="center"><input type="text" name="profileName" id="profileName" value="${user.profileName}" /></td>
					            <td align="center"><input type="text" name="introduce" id="introduce" value="${user.introduce}" /></td>
					            <td align="center"><input type="text" name="nickname" id="nickname" value="${user.nickname}" /></td>
					            <td align="center"><input type="text" name="admin" id="admin" value="${user.admin}" /></td>
					        </tr>
					        `;
			       
	        	}else{
	        		result+=`
	        		<tr>
					    <th>
					       <svg 
					        class="checkBox unchecked"
					        data-checked="false" data-user-id="1"
					            xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
					        </svg>
					    </th>
					    <td><input id="editBtn" type="button" value="수정" class="editDeleteBtn"/><br></td>
					    <td><input id="deleteBtn" type="button" value="삭제" class="deleteBtn"/></td>  
					    <td align="center" name="email">${user.email}</td>
					    <td align="center" name="pwd">${user.pwd}</td>
					    <td align="center" name="phone">${user.phone}</td>
					    <td align="center" name="shoeSize">${user.shoeSize}</td>
					    <td align="center" name="userName">${user.userName}</td>
					    <td align="center" name="address">${user.address}</td>
					    <td align="center" name="address2">${user.address2}</td>
					    <td align="center" name="zipcode">${user.zipcode}</td>
					    <td align="center">${user.createdDate}</td>
					    <td align="center" name="updatedDate">${user.updatedDate}</td>
					    <td align="center" name="profileName">${user.profileName}</td>
					    <td align="center" name="introduce">${user.introduce}</td>
					    <td align="center" name="nickname">${user.nickname}</td>
					    <td align="center" name="admin">${user.admin}</td>
					</tr>
	        		`;
	        	}
	        	
	        	
          		$('#firstTr').html(result);
	        
	        });
	        
	        },
			error: function(e){
				console.log(e);
			}
			
	});//ajax
    
    

  });
});
