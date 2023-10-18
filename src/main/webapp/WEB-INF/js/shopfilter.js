$(function(){
	  // cate1과 cate2 값을 저장할 배열 초기화
	    var cate1Values = []; //카테고리
	    var cate2Values = []; //카테고리2
	    var cate3Values = []; //성별
	    var cate4Values = []; //브랜드
	    var cate5Values = []; //사이즈
	    var searchValue = "";
	    var searchInput = $("#searchInput");
	    
	    
	    //Ajax 요청을 보낼 함수를 정의 
	    function sendValuesToServer(cate1Values, cate2Values, cate3Values, cate4Values, cate5Values){
	    $.ajax({
	        type: 'post', // 또는 'GET', HTTP 요청 방식 선택
	        url: '/kream/categoryFilter', // 서버 측 엔드포인트 URL을 적절히 수정
	        data: JSON.stringify({
	            cate1Values: cate1Values,
	            cate2Values: cate2Values,
	            cate3Values: cate3Values,
	            cate4Values: cate4Values,
	            cate5Values: cate5Values
	        }),
	        contentType: 'application/json',
	        success: function (response) {
		    var result = "";
		
		    // 데이터 루프
		    $.each(response, function (index, item) {
		        var formattedPrice = (item.price ? item.price.toLocaleString('en-US') : '') + '원';
		        var dotHit = (item.hit ? item.hit.toLocaleString('en-US') : '');
		
		        // 카드 HTML 생성
		        var cardHtml =
		        `<div class="col">
		            <div class="card h-100" id="card` + index + `" style="cursor:pointer; width:230px; height:345px;">
		                <img src="/kream/storage/` + item.productImg1 +
		                `" class="card-img-top" style="display:block; margin:10px auto; width:200px; height:200px;"
		                alt="` + item.productName +
		                `" onclick="location.href='/kream/product/productsForm?productId=` + item.productId + `&page=1'">
		                <div class="card-body" onclick="location.href='/kream/product/productsForm?productId=` + item.productId + `&page=1'">
		                    <h5 class="card-title" style="font-size:13px; font-weight:bold;">` + item.brand + `</h5>
		                    <h5 class="card-title" style="font-size:13px;">` + item.productName + `</h5>
		                    <p class="card-text" style="font-size:12px; color:gray">` + item.productExplain + `</p>
		                    <p class="card-text" style="font-weight:bold; font-size:14px; color:#000">` + formattedPrice + `</p>
		                </div>
		                <div class="card-footer">
		                    <small class="text-body-secondary"><img src='/kream/img/noninterest.png' style='width:20px; height:20px;'>&nbsp;` + dotHit + `</small>
		                </div>
		            </div>
		        </div>`;
		
		        result += cardHtml; // 결과에 현재 카드 추가
		
		   		 });
		    	$('.row.row-cols-1.row-cols-md-4.g-4').append(result); // 결과를 row row-cols-1 row-cols-md-4 g-4에 추가
		    	result="";
			},
	        error: function (error) {
	            console.error('오류 발생:', error);
	        }
	     });
	   } 
	   
	   //필터에 따라 불러올 캐러셀 데이터 함수 정의 
	    function sendCarouselValuesToServer(cate1Values, cate2Values, cate3Values, cate4Values, cate5Values) {
		
		    $.ajax({
		        type: "post",
		        url: "/kream/selectCarouselFilter",
		        data: JSON.stringify({
		            cate1Values: cate1Values,
		            cate2Values: cate2Values,
		            cate3Values: cate3Values,
		            cate4Values: cate4Values,
		            cate5Values: cate5Values
		        }),
		        contentType: 'application/json',
		        success: function (data) {
			        for(var index=0; index<21; index++){
			        	$('#carousel_img' + index).attr('src', '/kream/img/null_img.png');
		                $('#carousel_img' + index).attr('alt', '');
		                $('#carousel_img' + index).css('cursor', '');
		
		                $('#figcaption_img' + index).text('');
		                $('#figcaption_img' + index).css('cursor', '');
		                
		                $('#carousel_img' + index).off("click");
		                $('#figcaption_img' + index).off("click"); 
			        }
			        $.each(data, function(index, item){

					  if (item) {				  	 
			            // 캐러셀 HTML 생성
			             $('#carousel_img'+index).attr('src', '/kream/storage/'+item.productImg1);
				         $('#carousel_img'+index).attr('alt', item.productName);
				         $('#carousel_img'+index).css('cursor', 'pointer');     
				         		      	
				         $('#figcaption_img'+index).text(item.brand);
				         $('#figcaption_img'+index).css('cursor', 'pointer');
						
						$('#carousel_img' + index).off("click");
			            // 클릭 이벤트 처리
			            $('#carousel_img' + index).on('click', function() {
			                if (item && item.brand !== "null") {
			                    var brandSearch = "";
			                    brandSearch = item.brand;
			                    searchProduct(brandSearch);
			                }
			            });
						
						$('#figcaption_img' + index).off("click");
			            $('#figcaption_img' + index).on('click', function() {
			                if (item && item.brand !== "null") {
			                    var brandSearch = "";
			                    brandSearch = item.brand;
			                    searchProduct(brandSearch);
			                }
			             });
			          } else{
			            $('#carousel_img' + index).attr('src', '/kream/img/null_img.png');
		                $('#carousel_img' + index).attr('alt', '');
		                $('#carousel_img' + index).css('cursor', '');
		
		                $('#figcaption_img' + index).text('');
		                $('#figcaption_img' + index).css('cursor', '');
			          
			          } 
			      });	          
		        },
		        error: function (e) {
		            console.log(e);
		        }
		    });
		}
	    
	    //---------------------------------
		function fetchBrandFilter(cate1Values, cate2Values) {
		    // 먼저 빈 데이터 객체를 만듭니다.
		    var dataToSend = {};
		    // 각각의 배열이 비어있지 않으면 데이터 객체에 값을 추가합니다.
		    if (cate1Values && cate1Values.length != 0) dataToSend.cate1Values = cate1Values;
		    if (cate2Values && cate2Values.length != 0) dataToSend.cate2Values = cate2Values;
		       
		    $.ajax({
		        type: 'POST', 
		        url: '/kream/brandFilter', 
		        data: JSON.stringify(dataToSend),
		        dataType: 'json',
		        contentType: 'application/json',
		        success: function (response) {
		            var result = '';
		            $.each(response, function(index, product){
		                result += `<div><input class="cate4 subitemBrand" type="checkbox">${product.brand}</div>`;
		            }); 
		            // each문으로 브랜드이름 뿌리기.
		            $('#category3').next().html(result);
		        },
		        error: function (error) {
		            console.error('오류 발생:', error);
		        }
		    });
		}
	    	
	    	
		if($("#all_category_brand").text()=== "-"){//브랜드 창이 열려있다면, 브랜드 관련 ajax동작시키기.
		    fetchBrandFilter(cate1Values, cate2Values);
		  }
	    		    	
		  $('body').on('click','.cate4', function () {
		
		   // cate4의 값을 배열에 추가 또는 제거
		   var text = $(this).parent().text();
		   var isChecked = $(this).prop('checked');
		   
		   if (isChecked) {
		       if (cate4Values.indexOf(text) === -1) {
		           cate4Values.push(text);
		       }
		       $(this).addClass('checked');
		   } else {
		    	cate4Values.splice(index, 1); // 체크 해제 시 배열에서 제거
		       var index = cate4Values.indexOf(text);
		       if (index !== -1) {
		          $(this).removeClass('checked');
		       }
		   } 
           // 배열 내용을 출력
           console.log('cate4 값들:', cate4Values);
           $('.row.row-cols-1.row-cols-md-4.g-4').empty();
           
           sendValuesToServer(cate1Values, cate2Values, cate3Values, cate4Values, cate5Values);   
           sendCarouselValuesToServer(cate1Values, cate2Values, cate3Values, cate4Values, cate5Values);

            
       });
       
        $("#category3").on("click", function() {
       var allProductViewBrand = $(".all_product_view_brand");
       var allProductTextBrand = $("#all_product_brand");
                     
       // allProductView의 상태를 토글합니다.
       if (allProductViewBrand.is(":hidden")) {
         allProductViewBrand.show();
         allProductTextBrand.hide(); // "모든 카테고리" 숨기기
         $("#all_category_brand").text("-");
                  
           //fetch----------------------------------------------------
	         fetchBrandFilter(cate1Values, cate2Values);
         //--------------------------------------------------------
	       } else {
	         allProductViewBrand.hide();
	         allProductTextBrand.show(); // "모든 카테고리" 표시
	         $("#all_category_brand").text("+");
	       }        
	     });
	     
	     
	    
	    //------------------------------검색 기능 구현----------------------------
	    //검색 버튼
	    $(".searchImgDiv img").on('click', function (e) {
	    	e.preventDefault(); // 기본 링크 동작을 막음
	    	var searchInput = $("#searchInput");
			// 검색 입력란을 토글(나타내거나 숨김)
   			$(".searchImgDiv img").hide();
   			$("#searchInput").show();
		    
		    // 입력란에 포커스가 있을 때 플레이스홀더를 비워둠
		    searchInput.on('focus', function() {
		        $(this).attr('placeholder', '');
		    });
		
		    // 입력란에서 포커스를 잃을 때 플레이스홀더를 설정
		    searchInput.on('blur', function() {
		        $(this).attr('placeholder', '카테고리, 상품이름, 브랜드 입력');
		        $(".searchImgDiv img").show();
		        $("#searchInput").hide();
		    });
	    });
	    
	    //검색
	    searchInput.keypress(function(event) {
	        if (event.which === 13) { // Enter 키의 키 코드는 13입니다.
	        	cate1Values=[];
	        	cate2Values=[];
	        	cate3Values=[];
	        	cate4Values=[];
	        	cate5Values=[];
	        	       
	            searchValue = searchInput.val(); // 입력값 가져오기
	            // inputValue를 다루는 코드를 여기에 추가합니다.
	            searchProduct(searchValue);
	            cate1Values.push(searchValue);      		

	            searchProductCarousel(searchValue);
	        }
	    });
	    
	    function searchProduct(searchValue) {    
	    	var result = "";
	    	$('.row.row-cols-1.row-cols-md-4.g-4').empty();  	    	
	    	  
		    $.ajax({
		        type: 'post', 
		        url: '/kream/searchProduct', 
		        data: { searchValue: searchValue },
		        dataType: 'json',
		        success: function (response) {
				// 데이터 루프
				$.each(response, function (index, item) {
					var formattedPrice = (item.price ? item.price.toLocaleString('en-US') : '') + '원';
			        var dotHit = (item.hit ? item.hit.toLocaleString('en-US') : '');
			
			        // 카드 HTML 생성
			        var cardHtml =
			        `<div class="col">
			            <div class="card h-100" id="card` + index + `" style="cursor:pointer; width:230px; height:345px;">
			                <img src="/kream/storage/` + item.productImg1 +
			                `" class="card-img-top" style="display:block; margin:10px auto; width:200px; height:200px;"
			                alt="` + item.productName +
			                `" onclick="location.href='/kream/product/productsForm?productId=` + item.productId + `&page=1'">
			                <div class="card-body" onclick="location.href='/kream/product/productsForm?productId=` + item.productId + `&page=1'">
			                    <h5 class="card-title" style="font-size:13px; font-weight:bold;">` + item.brand + `</h5>
			                    <h5 class="card-title" style="font-size:13px;">` + item.productName + `</h5>
			                    <p class="card-text" style="font-size:12px; color:gray">` + item.productExplain + `</p>
			                    <p class="card-text" style="font-weight:bold; font-size:14px; color:#000">` + formattedPrice + `</p>
			                </div>
			                <div class="card-footer">
			                    <small class="text-body-secondary"><img src='/kream/img/noninterest.png' style='width:20px; height:20px;'>&nbsp;` + dotHit + `</small>
			                </div>
			            </div>
			        </div>`;
					
			        result += cardHtml; // 결과에 현재 카드 추가			         				
					});
					
					$('.row.row-cols-1.row-cols-md-4.g-4').append(result);
					searchValue="";
				},
		        error: function (error) {
		            console.error('오류 발생:', error);
		        }
		    });		    
		}
	    
	    
	    function searchProductCarousel(searchValue){ 
	    	    
	     $.ajax({
			    type: 'post', 
		        url: '/kream/searchProductCarousel', 
		        data: { searchValue: searchValue },
		        dataType: 'json',
			    success: function (data) {
	            for (var index = 0; index < 21; index++) {
	                (function (data, index) { // 현재 data 및 index를 캡처하기 위해 클로저를 사용합니다
	                
	                    $('#carousel_img' + index).attr('src', '/kream/img/null_img.png');
	                    $('#carousel_img' + index).attr('alt', '');
	                    $('#carousel_img' + index).css('cursor', '');
	
	                    $('#figcaption_img' + index).text('');
	                    $('#figcaption_img' + index).css('cursor', '');
	                    
	                    $('#carousel_img' + index).off("click");
		                $('#figcaption_img' + index).off("click"); 
	
	                    if (data[index] && data[index].productImg1) {
	                        $('#carousel_img' + index).attr('src', './storage/' + data[index].productImg1);
	                        $('#carousel_img' + index).attr('alt', data[index].productName);
	                        $('#carousel_img' + index).css('cursor', 'pointer');
	                        
	                        $('#figcaption_img' + index).text(data[index].brand);
	                        $('#figcaption_img' + index).css('cursor', 'pointer');
	
	                        $('#carousel_img' + index).on('click', function() {
	                            searchValue = data[index].brand;
	                            searchProduct(searchValue);
	                        });
	                        
	                        $('#figcaption_img' + index).on('click', function() {
	                            searchValue = data[index].brand;
	                            searchProduct(searchValue);
	                        });
	                        
	                    } else {
	                        $('#carousel_img' + index).attr('src', '/kream/img/null_img.png');
	                        $('#carousel_img' + index).attr('alt', "");
	                        $('#carousel_img' + index).css('cursor', '');
	                        
	                        $('#figcaption_img' + index).text("");
	                        $('#figcaption_img' + index).css('cursor', '');
	                    }
	                })(data, index);
	            }
		        },
			    error: function (e) {
			      console.log(e);
			    }
			});
	   } 	  
	    
	    //------------------------------체크박스로 상품 데이터를 불러옴------------------------------------	
	    // cate1 체크박스를 클릭했을 때
	    $('.cate1').on('click', function () {
	            
	    	var result = "";
	    	$('.row.row-cols-1.row-cols-md-4.g-4').empty();
	        // cate1 체크 여부에 따라 하위 cate2 체크박스들을 처리
	        var isChecked = $(this).prop('checked');
	        $(this).find('.cate2').prop('checked', isChecked);
	        	
	        // cate1의 값을 배열에 추가 또는 제거
	        var text = $(this).parent().text();
	        
	        if ($(this).prop('checked')) {
	            if (cate1Values.indexOf(text) === -1) {
	                cate1Values.push(text);
	            }
	        } else {
	            var index = cate1Values.indexOf(text);
	            if (index !== -1) {
	                cate1Values.splice(index, 1); // 체크 해제 시 배열에서 제거
	                $('.cate2').prop('checked', false);
	            	cate2Values.splice(index); // 체크 해제 시 배열에서 제거
	            }
	            
	        }
	        // 배열 내용을 출력
	        console.log('cate1 값들:', cate1Values);	        
	        sendValuesToServer(cate1Values, cate2Values, cate3Values, cate4Values, cate5Values);
	        sendCarouselValuesToServer(cate1Values, cate2Values, cate3Values, cate4Values, cate5Values);
	        //fetch----------------------------------------------------
	         fetchBrandFilter(cate1Values, cate2Values);
       	    //--------------------------------------------------------
	        
	        // cate1 체크 해제 시 하위 cate2 체크박스도 해제
	        if (!isChecked) {
	            $(this).find('.cate2').prop('checked', false);
	            cate2Values.splice(index, 1); // 체크 해제 시 배열에서 제거
	        }
	        
	    });
	
	    // cate2 체크박스를 클릭했을 때
	    $('.cate2').on('click', function () {
	    	var result = "";
	    	$('.row.row-cols-1.row-cols-md-4.g-4').append(result);
	        // cate2의 값을 배열에 추가 또는 제거
	        var text = $(this).parent().text();
	        if ($(this).prop('checked')) {
	            if (cate2Values.indexOf(text) === -1) {
	                cate2Values.push(text);
	            }
	            $(this).addClass('checked');
	        } else {
	            var index = cate2Values.indexOf(text);
	            if (index !== -1) {
	            	$(this).removeClass('checked');
	                cate2Values.splice(index, 1); // 체크 해제 시 배열에서 제거
	            }
	        }
	
	        // 배열 내용을 출력
	        console.log('cate2 값들:', cate2Values);
	        $('.row.row-cols-1.row-cols-md-4.g-4').empty();
	        sendValuesToServer(cate1Values, cate2Values, cate3Values, cate4Values, cate5Values);
	        sendCarouselValuesToServer(cate1Values, cate2Values, cate3Values, cate4Values, cate5Values);  
	    });
	    
	    // cate3 체크박스를 클릭했을 때
	    $('.cate3').on('click', function () {
	    	var result = "";
	    	$('.row.row-cols-1.row-cols-md-4.g-4').append(result);
	        var isChecked = $(this).prop('checked');
	        	
	        // cate3의 값을 배열에 추가 또는 제거
	        var text = $(this).parent().text();
	        
	        if ($(this).prop('checked')) {
	            if (cate3Values.indexOf(text) === -1) {
	                cate3Values.push(text);
	            }
	        } else {
	            var index = cate3Values.indexOf(text);
	            if (index !== -1) {
	                cate3Values.splice(index); // 체크 해제 시 배열에서 제거
	            }
	            
	        }
	        // 배열 내용을 출력
	        console.log('cate3 값들:', cate3Values);
	        $('.row.row-cols-1.row-cols-md-4.g-4').empty();
	        
	        sendValuesToServer(cate1Values, cate2Values, cate3Values, cate4Values, cate5Values);
	        sendCarouselValuesToServer(cate1Values, cate2Values, cate3Values, cate4Values, cate5Values);  
	        //fetch----------------------------------------------------
	         fetchBrandFilter(cate1Values, cate2Values);
       	    //--------------------------------------------------------
            
	    });
	    
	    // 신발 사이즈 테이블 요소를 클릭했을 때
		$(".shoesSizeTable td").on("click", function() {
		    var currentBorderStyle = $(this).css("border-width");
		    var value = $(this).text();
			
		    // 클릭한 td 요소의 테두리를 토글합니다.
		    if (currentBorderStyle === "1px") {
		        $(this).css("border-color", "#19C37D");
		        $(this).css("border-width", "2px");
		        cate5Values.push(value);
		    } else {    
		        // 다시 클릭했을 때 해당 값 제거
		        $(this).css("border-color", "gray");
		        $(this).css("border-width", "1px");
		        var index = cate5Values.indexOf(value);
		        if (index !== -1) {
		            cate5Values.splice(index);
		        }
		    }	    
		    $('.row.row-cols-1.row-cols-md-4.g-4').empty();
		    sendValuesToServer(cate1Values, cate2Values, cate3Values, cate4Values, cate5Values);
		    sendCarouselValuesToServer(cate1Values, cate2Values, cate3Values, cate4Values, cate5Values);  
		    //fetch----------------------------------------------------
		    fetchBrandFilter(cate1Values, cate2Values);
	       	//--------------------------------------------------------
		    console.log('cate5 값들:', cate5Values);
		});

	
		//상의 사이즈를 클릭했을때
			$(".topClothSizeTable td").on("click", function() {
		        var currentBorderStyle = $(this).css("border");
			    var value = $(this).text();
			    value = value.toLowerCase();
			    
			    // 클릭한 td 요소의 테두리를 토글합니다.
			    if (currentBorderStyle.indexOf("1px") !== -1) {
			    	$(this).css("border-color", "#19C37D");
			        $(this).css("border-width", "2px");
			        cate5Values.push(value);
			    } else {
			        // 다시 클릭했을 때 해당 값 제거
			        $(this).css("border-color", "gray");
			        $(this).css("border-width", "1px");
			        var index = cate5Values.indexOf(value);
			        if (index !== -1) {
			            cate5Values.splice(index);
			        }
			    }
		    $('.row.row-cols-1.row-cols-md-4.g-4').empty();
		    sendValuesToServer(cate1Values, cate2Values, cate3Values, cate4Values, cate5Values);
		    sendCarouselValuesToServer(cate1Values, cate2Values, cate3Values, cate4Values, cate5Values);  
		    //fetch----------------------------------------------------
	    	fetchBrandFilter(cate1Values, cate2Values);
       		//--------------------------------------------------------
		    console.log('cate5 값들:', cate5Values);
		});
		
		//하의 사이즈를 클릭했을때
		$(".bottomClothSizeTable td").on("click", function() {
		    var currentBorderStyle = $(this).css("border");
		    var value = $(this).text();
		    
		    // 클릭한 td 요소의 테두리를 토글합니다.
		    if (currentBorderStyle.indexOf("1px") !== -1) {
		    	$(this).css("border-color", "#19C37D");
		        $(this).css("border-width", "2px");
		        cate5Values.push(value);
		    } else {
		        // 다시 클릭했을 때 해당 값 제거
		        $(this).css("border-color", "gray");
		        $(this).css("border-width", "1px");
		        var index = cate5Values.indexOf(value);
		        if (index !== -1) {
		            cate5Values.splice(index);
		        }
		    }
		    $('.row.row-cols-1.row-cols-md-4.g-4').empty();
		    sendValuesToServer(cate1Values, cate2Values, cate3Values, cate4Values, cate5Values);
		    sendCarouselValuesToServer(cate1Values, cate2Values, cate3Values, cate4Values, cate5Values);  
		    console.log('cate5 값들:', cate5Values);
		    //fetch----------------------------------------------------
	    	fetchBrandFilter(cate1Values, cate2Values);
       		//--------------------------------------------------------
		}); 
	   
	  //------------------------------카테고리 숨김관련------------------------------------  	  
	  //카테고리 1 숨김관련
	  $("#category1").on("click", function() {
	    const allProductView = $(".all_product_view");
	    const allProductText = $("#all_product");
	    const subItems1 = $(".sub-items1");
	    const subItems2 = $(".sub-items2");
	    const subItems3 = $(".sub-items3");
	    const subItems4 = $(".sub-items4");
	    const subItems5 = $(".sub-items5");
	    const subItems6 = $(".sub-items6");
	    const subItems7 = $(".sub-items7");
	    
	    // allProductView의 상태를 토글합니다.
	    if (allProductView.is(":hidden")) {
	      allProductView.show();
	      allProductText.hide(); // "모든 카테고리" 숨기기
	      $("#all_category").text("-");
	  	  subItems1.hide(); // 체크 해제되면 숨김
	  	  subItems2.hide(); // 체크 해제되면 숨김
	  	  subItems3.hide(); // 체크 해제되면 숨김
	  	  subItems4.hide(); // 체크 해제되면 숨김
	  	  subItems5.hide(); // 체크 해제되면 숨김
	  	  subItems6.hide(); // 체크 해제되면 숨김
	  	  subItems7.hide(); // 체크 해제되면 숨김
	    } else {
	      allProductView.hide();
	      allProductText.show(); // "모든 카테고리" 표시
	      $("#all_category").text("+");
	    }
	  });
	  
	  $(".checkShoes").on("change", function() {
	    const subItems1 = $(".sub-items1");
	    
	    if (this.checked) {
	    console.log("체크박스 변경됨"); // 디버깅 메시지
	      subItems1.show(); // 체크되면 보이게 함
	    } else {
	      subItems1.hide(); // 체크 해제되면 숨김
	    }
	  });
	  
	  $(".checkOutter").on("change", function() {
	    const subItems2 = $(".sub-items2");
	    
	    if (this.checked) {
	    console.log("체크박스 변경됨"); // 디버깅 메시지
	      subItems2.show(); // 체크되면 보이게 함
	    } else {
	      subItems2.hide(); // 체크 해제되면 숨김
	    }
	  });
	  
	  $(".checkBag").on("change", function() {
	    const subItems3 = $(".sub-items3");
	    
	    if (this.checked) {
	    console.log("체크박스 변경됨"); // 디버깅 메시지
	      subItems3.show(); // 체크되면 보이게 함
	    } else {
	      subItems3.hide(); // 체크 해제되면 숨김
	    }
	  });
	  
	  $(".checkTopCloth").on("change", function() {
	    const subItems4 = $(".sub-items4");
	    
	    if (this.checked) {
	    console.log("체크박스 변경됨"); // 디버깅 메시지
	      subItems4.show(); // 체크되면 보이게 함
	    } else {
	      subItems4.hide(); // 체크 해제되면 숨김
	    }
	  });
	  
	  $(".checkBottomCloth").on("change", function() {
	    const subItems5 = $(".sub-items5");
	    
	    if (this.checked) {
	    console.log("체크박스 변경됨"); // 디버깅 메시지
	      subItems5.show(); // 체크되면 보이게 함
	    } else {
	      subItems5.hide(); // 체크 해제되면 숨김
	    }
	  });
	  
	  $(".checkWatch").on("change", function() {
	    const subItems6 = $(".sub-items6");
	    
	    if (this.checked) {
	    console.log("체크박스 변경됨"); // 디버깅 메시지
	      subItems6.show(); // 체크되면 보이게 함
	    } else {
	      subItems6.hide(); // 체크 해제되면 숨김
	    }
	  });
	  
	  $(".checkWallet").on("change", function() {
	    const subItems7 = $(".sub-items7");
	    
	    if (this.checked) {
	    console.log("체크박스 변경됨"); // 디버깅 메시지
	      subItems7.show(); // 체크되면 보이게 함
	    } else {
	      subItems7.hide(); // 체크 해제되면 숨김
	    }
	  });
	  
	  //카테고리2 숨김관련
	  $("#category2").on("click", function() {
	    const allGenderView = $(".all_gender_view");
	    const allGenderText = $("#all_gender");
	    
	    // allProductView의 상태를 토글합니다.
	    if (allGenderView.is(":hidden")) {
	      allGenderView.show();
	      allGenderText.hide(); // "모든 카테고리" 숨기기
	      $("#genderPlus").text("-");
	    } else {
	      allGenderView.hide();
	      allGenderText.show(); // "모든 카테고리" 표시
	      $("#genderPlus").text("+");
	    }
	});
	
	//카테고리4 숨김관련
	  $("#category4").on("click", function() {
	    const allSizeView = $(".all_size_view");
	    const allSizeText = $("#all_size");
	    const categoryhr = $('.category4_hr');
	    
	    // allProductView의 상태를 토글합니다.
	    if (allSizeView.is(":hidden")) {
	      categoryhr.hide();
	      allSizeView.show();
	      allSizeText.hide(); // "모든 카테고리" 숨기기
	      $("#sizePlus").text("-");
	    }else{
	      categoryhr.show();
	      allSizeView.hide();
	      allSizeText.show(); // "모든 카테고리" 숨기기
	      $("#sizePlus").text("+");
	    }	    
	});	
	
				 
});
