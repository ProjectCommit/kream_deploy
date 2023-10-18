$(function(){
	$.ajax({
		type: 'post',
		url: '/kream/ranking/rankingListFemaleshoes',
		success: function(data){
			console.log(JSON.stringify(data));
			console.log(data[0].seq)
			
			var result;
			var plus = 5;
			var maxToshow = 5;
			
			$.each(data,function(index,item){
				if(index < maxToshow){
					result =`<div class="itemdivide">`+
					
							`<div class="product productdetail">`+
								`<span class="productNum" style="display: none">`+item.productId+`</span>` +
							
								`<div class="productImgWrapper">`+
									`<img src="/kream/storage/`+ item.productImg1 +`" class="productImage" alt="상품" ">`+
								`</div>`+ //class="productImgWrapper"
								
								`<div class="numButtonWrapper">`+
									`<input type="button" class="numButton" value="`+ item.hit +`">`+
								`</div>`+  //class="numButtonWrapper"
								
								`<div class="wishButtonWrapper">`+
									`<img src="../css/cykcss/cssimage/wish.png" class="wishButton" alt="위시버튼">`+
								`</div>`+ //class="wishButtonWrapper"
								
							`</div>`+ // class="product productdetail"
																
							`<div class="info_box">` +
								`<div class="brandWrapper">` +
									`<p class="letter brand">`+ item.productName + `</p>` +
								`</div>` +
								`<div class="brandnameWrapper">` +
									`<p class="letter brandname">`+item.productExplain+`</p>` +
								`</div>` +
								`<div class="deliveryWrapper">` +
									`<div class="deliveryWrapper2">` +
										`<p class="letter delivery" onclick="">⚡빠른배송</p>` +
									`</div>` +
								`</div>` +
								`<div class="priceWapper">` +
									`<p class="letter amount">`+item.price+`</p>` +
									`<p class="letter imedeate">즉시 구매가</p>` +
								`</div>` +
							`</div>`+ // class="info_box" 
								
						`</div>`;  //class="itemdivide"
				$('.femaleshoes').append(result);	
				}					 
			});


			//START 선택적 더보기 기능
			var classArray = ["femaleshoes1"];
			var parent;
			var choicebutton = ""; // 변수 초기화 초기화 안하면 초기실행시에 오류남.
			
			// 각 클래스에 대한 클릭 이벤트를 등록
			classArray.forEach(function (maleshoes1) {
				// 클래스 이름을 가진 요소를 선택하고 클릭 이벤트를 추가
				$("." + maleshoes1).on("click", function () {
					$('.container').remove();
					console.log(maleshoes1 + " 버튼이 클릭되었습니다.");
					choicebutton = document.querySelector('.' + maleshoes1);
					parent = $(this).parent().prev().attr('class').split(' ')[1];			
					console.log(parent+"parent");
					parent = document.querySelector('.' + parent);	//$(parent) 쓰면 클래스로 가져와 진다.
					console.log(choicebutton+"choicebutton");
					maxToshow += plus;

					$(parent).empty();
					$.each(data,function(index,item){
						if(index < maxToshow){
							result =`<div class="itemdivide">`+
							
									`<div class="product productdetail">`+
										`<span class="productNum" style="display: none">`+item.productId+`</span>` +
									
										`<div class="productImgWrapper">`+
											`<img src="/kream/storage/`+ item.productImg1 +`" class="productImage" alt="상품" ">`+
										`</div>`+ //class="productImgWrapper"
										
										`<div class="numButtonWrapper">`+
											`<input type="button" class="numButton" value="`+ item.hit +`">`+
										`</div>`+  //class="numButtonWrapper"
										
										`<div class="wishButtonWrapper">`+
											`<img src="../css/cykcss/cssimage/wish.png" class="wishButton" alt="위시버튼">`+
										`</div>`+ //class="wishButtonWrapper"
										
									`</div>`+ // class="product productdetail"
																		
									`<div class="info_box">` +
										`<div class="brandWrapper">` +
											`<p class="letter brand">`+ item.productName + `</p>` +
										`</div>` +
										`<div class="brandnameWrapper">` +
											`<p class="letter brandname">`+item.productExplain+`</p>` +
										`</div>` +
										`<div class="deliveryWrapper">` +
											`<div class="deliveryWrapper2">` +
												`<p class="letter delivery" onclick="">⚡빠른배송</p>` +
											`</div>` +
										`</div>` +
										`<div class="priceWapper">` +
											`<p class="letter amount">`+item.price+`</p>` +
											`<p class="letter imedeate">즉시 구매가</p>` +
										`</div>` +
									`</div>`+ // class="info_box" 
										
								`</div>`;  //class="itemdivide"
						$(parent).append(result);
						}						 
					});var footer = `<div class="container">`+
					`<hr class="footer_hr">`+
					`<div style="display:flex; justify-content:center; width:100vw;">`+
					`<footer style="width:1920px; height:400px;">`+
					`<div class="footer_box1" style="height:300px;">`+
					`<div class="guidenav">`+
						`<div style="font-weight:bold; font-size:1.1em; padding-bottom:5px;">+이용안내</div>`+
						`<div><a href="#">검수기준</a>+</div>`+
						`<div><a href="#">이용정책</a>+</div>`+
						`<div><a href="#">패널티 정책</a>+</div>`+
						`<div><a href="#">커뮤니티 가이드라인</a>+</div>`+
					`</div>`+
				
					`<div class="supportnav">`+
						`<div style="font-weight:bold; font-size:1.1em; padding-bottom:5px;">고객지원</div>`+
						`<div><a href="#">공지사항</a>+</div>`+
						`<div><a href="#">서비스 소개</a>+</div>`+
						`<div><a href="#">스토어 안내</a>+</div>`+
						`<div><a href="#">판매자 방문접수</a></div>`+
					`</div>`+ 
					`<div class="supportTel">`+
						`<div style="font-weight:bold; font-size:1.1em; margin-bottom:10px;">고객센터 1588-7813</div>`+
						`<div class="supporTeltnav">`+
							`<div>운영시간 평일 11:00 - 18:00 (토/일, 공휴일 근무)</div>`+
							`<div>점심시간 평일 13:00 - 14:00</div>`+
							`<div style="color:black; margin-top:10px;"><b>1:1문의하기는 앱에서만 가능합니다.</b></div>`+
						`<div class="question">자주묻는 질문</div>`+
					`</div>`+
					`</div>`+
					`</div>`+
					`<hr class="footer_hr">`+
					`<br>`+
					`<div class="footer_box2" style="height:100px;">`+
					`<div class="company_infonav" style="width:1320px;">`+
						`<div>크림 주식회사 · 대표 정지안 &nbsp;&nbsp; 사업자등록번호 : 123-45-67890 &nbsp;&nbsp; 사업자정보확인통신판매업 : 제 2023-비트캠프C-0602호</div>`+
						`<div>사업장소재지 : 서울특별시 강남구 비트캠프 602호, 호스팅 서비스 : 네이버 클라우드 ㈜</div>`+
					`</div>`+
					`</div>`+
					`</footer>`+
					`</div>`+
				`</div>`;
				$(".container1").append(footer);
				});
			});
			//END 선택적 더보기 기능
		},
		error: function(e){
			console.log(e);
		}
	});
});