<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>관리자 페이지</title>
    <link
      rel="stylesheet"
      href="https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css"
    />
    
    <link rel="stylesheet" href="../css/adminMain.css"/>
      
  </head>
  <body>
  <input id="adminNickname" type="hidden" value="${adminNickname}">

    <!--관리자페이지-->
    <div id="top">
      <img
        id="logo"
        src="../img/logoAdmin.png"
        alt="logo"
        onclick="location.href='/kream/'"
      	alt=""/>
    </div>
    <!--좌측메뉴-->
    <div id="left-right--container">
      <div id="left">
        <div id="left--menu__else">
          <div id="left--menu--element">
            <div
              class="element home"
              onclick='location.href="/kream/admin/adminMain"'
            >
              <div class="left-side">
                <svg
                  class="left--menu--element__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"
                  />
                  <path
                    d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"
                  />
                </svg>

                <span>관리자페이지 홈</span>
              </div>
              <svg
                class="right-side"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
                style="opacity: 0"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="element">
              <div class="left-side">
                <svg
                  class="left--menu--element__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                  />
                </svg>
                <span>상품 관리</span>
              </div>
              <svg
                class="right-side"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="elementSubMenu productUpload">
              <div class="left--menu--element__icon"></div>
              <span>상품 등록</span>
            </div>
            <div class="elementSubMenu productSelect productList">
              <div class="left--menu--element__icon"></div>
              <span>전체 상품 조회/수정</span>
            </div>
            <!-- 상품관리를 클릭하면, .element_child 메뉴가 펼쳐져야함.
	 .element_child 메뉴는 상품관리와 형식이 똑같이 생겼고, 메뉴가 펼쳐질 때 위치는 x값 변동 없이
	아래로만 내려와야한다.
	-->

            <div class="element">
              <div class="left-side">
                <svg
                  class="left--menu--element__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>회원 관리</span>
              </div>
              <svg
                class="right-side"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            
            <div class="elementSubMenu userList">
              <div class="left--menu--element__icon"></div>
              <span>회원 목록 조회/수정</span>
            </div>
            <div class="element">
              <div class="left-side">
                <svg
                  class="left--menu--element__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                  />
                </svg>
                <span>주문 관리</span>
              </div>
              <svg
                class="right-side"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="elementSubMenu orderListForm">
              <div class="left--menu--element__icon"></div>
              <span>주문 확인</span>
            </div>
            <div class="elementSubMenu orderCheckListForm">
              <div class="left--menu--element__icon"></div>
              <span>발주 관리</span>
            </div>
            <div class="elementSubMenu orderShippingListForm">
              <div class="left--menu--element__icon"></div>
              <span>배송 관리</span>
            </div>
            
            <div class="element">
              <div class="left-side productBoard--leftSide">
                <svg class="alertComment" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
				  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
				</svg>
                
                <svg
                  class="left--menu--element__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>리뷰관리</span>
              </div>
              <svg
                class="right-side"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="elementSubMenu productBoardList">
              <div class="left--menu--element__icon"></div>
              <span>문의/리뷰관리</span>
            </div>
          </div>
        </div>
      </div>
      <div id="right">
        <div class="right--zeroColumn">
          <span style="color:gray; cursor:pointer" onclick='location.href="/kream/admin/adminMain"'>관리자페이지 홈</span>
        </div>
        
	        <div class="first-second--container">
		        <div class="right--firstColumn">
		        <div class="right--firstColumn-1"><span>상품 관리</span></div>
		        <div class="right--firstColumn-2"></div>
		        <div class="right--firstColumn-3"><span>회원 관리</span></div>
		          
		        </div>
		        
		        <div class="right--secondColumn">
		          <div class="whiteBox productUpload elementSubMenu">
		            <span>상품 등록</span>
		            <span>DB에 상품을 등록합니다.</span>
		          </div>
		          <div class="whiteBox elementSubMenu productList">
		            <span>전체 상품 조회/수정</span>
		            <span>전체 상품을 조회합니다.</span>
		          </div>
			          
			          <div id="userList" class="whiteBox elementSubMenu userList">
			            <span>회원 목록 조회/수정</span>
			            <span>전체 회원을 조회합니다.</span>
			          </div>
			        
		        </div>
	        </div>
	        
	        
	        <div class="first-second--container">
		        <div class="right--firstColumn">
		        <div class="right--firstColumn-1"><span>주문 관리</span></div>
		        <div class="right--firstColumn-2"></div>
		        <div class="right--firstColumn-3"><span></span></div>
		          
		        </div>
		        
		        <div class="right--secondColumn">
		          <div class="whiteBox orderListForm elementSubMenu">
		            <span>주문 확인</span>
		            <span>주문 목록을 관리합니다.</span>
		          </div>
		          <div class="whiteBox elementSubMenu orderCheckListForm">
		            <span>발주 관리</span>
		            <span>발주 상품을 조회합니다.</span>
		          </div>
			          
			          <div id="userList" class="whiteBox elementSubMenu userList">
			            <span>배송 관리</span>
			            <span>배송 현황을 조회합니다.</span>
			          </div>
			        
		        </div>
	        </div>
	        <div class="first-second--container">
		        <div class="right--firstColumn">
		        <div class="right--firstColumn-1"><span>리뷰 관리</span></div>
		        <div class="right--firstColumn-2"></div>
		        <div class="right--firstColumn-3"><span></span></div>
		          
		        </div>
		        
		        <div class="right--secondColumn">
		          <div class="whiteBox orderListForm elementSubMenu">
		            <span>문의/리뷰 관리</span>
		            <span>고객 문의를 관리합니다.</span>
		          </div>
		         
			        
		        </div>
	        </div>
	      
	        
	        
	        
      </div>
    </div>
    
    
    <script
      type="text/javascript"
      src="http://code.jquery.com/jquery-3.7.0.min.js"
    ></script>
    <script src="../js/adminJS/adminProductUpload.js"></script>
    <script src="../js/adminJS/adminProductUploadForm.js"></script>
    <script src="../js/adminJS/adminProductListForm.js"></script>
    <script src="../js/adminJS/adminProductList.js"></script>
    <script src="../js/adminJS/adminProductEditForm.js"></script>
    <script src="../js/adminJS/adminProductEdit.js"></script>
    <script src="../js/adminJS/adminProductDelete.js"></script>
    <script src="../js/adminJS/adminUserListForm.js"></script>
    <script src="../js/adminJS/adminUserEditForm.js"></script>
    <script src="../js/adminJS/adminUserEdit.js"></script>
    <script src="../js/adminJS/adminUserDelete.js"></script>
    <script src="../js/adminJS/adminProductBoardListForm.js"></script>
    <script src="../js/adminJS/adminProductBoardDelete.js"></script>
    <script src="../js/adminJS/adminProductBoardReply.js"></script>
    <script src="../js/adminJS/adminProductBoardList.js"></script>
    <script src="../js/adminJS/adminProductBoardReplyEdit.js"></script>
    <script src="../js/adminJS/adminProductBoardGPT.js"></script>
    <script src="../js/adminJS/adminProductUploadPopup.js"></script>
    <!-- 주문확인 -->
    <script src="../js/adminJS/adminOrderListForm.js"></script>
    <script src="../js/adminJS/adminOrderList.js"></script>
    <script src="../js/adminJS/adminOrderCheckListForm.js"></script>
    <script src="../js/adminJS/adminOrderCheckList.js"></script>
    <script src="../js/adminJS/adminOrderShippingListForm.js"></script>
    <script src="../js/adminJS/adminOrderShippingList.js"></script>
    

    <script>
    $(function(){
    	
    	$(function(){
    		$.ajax({
    		    type: 'post', 
    		    url: '/kream/checkComment',
    		    dataType: 'text',
    		    success: function(response) {
    		        if (response != 0) {
    		            $('.alertComment').addClass('visible').removeClass('hidden');
    		        } else {
    		            $('.alertComment').addClass('hidden').removeClass('visible');
    		        }
    		        	
    		    },
    		    error: function(e) {
    		        console.log(e);
    		    }
    		});

    	});
    	
            // 좌측 메뉴 클릭시 서브메뉴 나타나게하기.
    	$('.element').on('click', function() {
            var nextElem = $(this).next();
            while (nextElem.length && !nextElem.hasClass('element')) {
                if (nextElem.hasClass('elementSubMenu')) {
                    nextElem.toggleClass('active');
                }
                nextElem = nextElem.next();
            }
        });
    /*chatGPT*/
    	 $("#terminalInput").keydown(function(event) {
    	        if(event.key === "Enter") {
    	            const userInput = $(this).val();

    	            // Display the user input on the terminal window
    	            $("#terminalOutput").append('<div>&gt; ' + userInput + '</div>');

    	            // AJAX request to the /chatGPT endpoint
    	            $.ajax({
    	                url: '/kream/chatGPT',
    	                method: 'POST',
    	                contentType: 'application/json',
    	                data: JSON.stringify({ inputText: userInput }),
    	                dataType:'text',
    	                success: function(response) {
    	                    // Display server response on the terminal window
    	                    $("#terminalOutput").html('<div>' + response + '</div>');
    	                },
    	                error: function(error) {
    	                    // Display an error message on the terminal window
    	                    $("#terminalOutput").html('<div style="color:red;">Error: ' + error.responseText + '</div>');
    	                }
    	            });

    	            $(this).val('');  // Clear input after sending request
    	        }
    	    });


    
    
    });

    
    

    </script>
  </body>
</html>