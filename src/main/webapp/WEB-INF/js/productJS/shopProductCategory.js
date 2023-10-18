$(function () {	
		var cate1Values = [];
		var cate2Values = [];
		var cate3Values = [];
		var cate4Values = [];
		var cate5Values = [];
		
		const menuItems = document.querySelectorAll('.mainnav a');
		
	  	menuItems.forEach(item => {
	    item.addEventListener('click', function(event) {
	      // 기존에 bold 스타일이 적용된 요소의 스타일을 초기화합니다.
	      menuItems.forEach(menuItem => {
	        menuItem.style.fontWeight = 'normal';
	        menuItem.style.borderBottom = 'none'; // 기존 border 제거
	      });
		  cate1Values = [];
		  
	      // 클릭한 요소에 bold 스타일과 밑줄 스타일을 적용합니다.
	      this.style.fontWeight = 'bold';
	      this.style.borderBottom = '2px solid black'; // 원하는 border 스타일 적용
	      var category = $(this).text();
		  cate1Values.push(category);
		  
		  //-----------------------------------------------------------------------
		  sendValuesToServer(cate1Values, cate2Values, cate3Values, cate4Values, cate5Values);
		  sendCarouselValuesToServer(cate1Values, cate2Values, cate3Values, cate4Values, cate5Values);
		  //fetch----------------------------------------------------
		  fetchBrandFilter(cate1Values, cate2Values);		
		
	      // 예외: "전체" 링크에 대한 처리
	      if (this.id === "product_all") {
	        var newHref = "/kream/shopMain";
	      }
	    });
	  });
  
  	   //Ajax 요청을 보낼 함수를 정의 
	    function sendValuesToServer(cate1Values, cate2Values, cate3Values, cate4Values, cate5Values){
	    $('.row.row-cols-1.row-cols-md-4.g-4').empty();
	    
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
	                    <small class="text-body-secondary"><img src='/kream/img/noninterest.png' style='width:20px; height:20px;' alt=''>&nbsp;` + dotHit + `</small>
	                </div>
		            </div>
		        </div>`;
		
		        result += cardHtml; // 결과에 현재 카드 추가
		
		   		 });
		    	$('.row.row-cols-1.row-cols-md-4.g-4').append(result); // 결과를 row row-cols-1 row-cols-md-4 g-4에 추가	
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
			             $('#carousel_img'+index).attr('src', './storage/'+item.productImg1);
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
		  var result = "";
		  $('.row.row-cols-1.row-cols-md-4.g-4').append(result);
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
           $('.row.row-cols-1.row-cols-md-4.g-4').empty();
           
           //sendValuesToServer(cate1Values, cate2Values, cate3Values, cate4Values, cate5Values);   
           //sendCarouselValuesToServer(cate1Values, cate2Values, cate3Values, cate4Values, cate5Values);  
       });
  
});