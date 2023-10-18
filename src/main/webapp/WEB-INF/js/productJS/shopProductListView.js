$(function () {
 	$.ajax({
	    type: "post",
	    url: "/kream/kreamProductList",
	    dataType: "json",
	    success: function (data) {
	      var result = ""; 
	
	       // 데이터 루프
	      $.each(data, function(index, item) {
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
	    },
	    error: function (e) {
	      console.log(e);
    	}
	});
});