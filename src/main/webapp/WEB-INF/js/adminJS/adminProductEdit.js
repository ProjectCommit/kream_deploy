$(function () {
  // + 이미지를 누르면, 이미지1~10 각각에 해당하는 이미지 한 번에 1개 업로드.
  $("body").on("click", "#productImg1--upload", function () {
    $("#productImg1").trigger("click");
    $(this).parent().find('.zoomUpBackground').addClass('visible').removeClass('hidden');
    
  });
  $("body").on("click", "#productImg2--upload", function () {
    $("#productImg2").trigger("click");
  });
  $("body").on("click", "#productImg3--upload", function () {
    $("#productImg3").trigger("click");
  });
  $("body").on("click", "#productImg4--upload", function () {
    $("#productImg4").trigger("click");
  });
  $("body").on("click", "#productImg5--upload", function () {
    $("#productImg5").trigger("click");
  });
  $("body").on("click", "#productImg6--upload", function () {
    $("#productImg6").trigger("click");
  });
  $("body").on("click", "#productImg7--upload", function () {
    $("#productImg7").trigger("click");
  });
  $("body").on("click", "#productImg8--upload", function () {
    $("#productImg8").trigger("click");
  });
  $("body").on("click", "#productImg9--upload", function () {
    $("#productImg9").trigger("click");
  });
  $("body").on("click", "#productImg10--upload", function () {
    $("#productImg10").trigger("click");
  });

  // zoom 관련 이미지 클릭하면 모달띄우기 ##########################################################################
  $(document).on("click", ".zoomUpIcon1", function () {
    if ($(this).parent().find("img").attr("src") != '') {
      var imgSrc = $(this).parent().find("img").attr("src");
      $("#myModal").css("display", "flex");
      $("#img01").attr("src", imgSrc);
    }
  });

  // X 버튼 또는 모달 밖을 클릭하면 모달 닫기
  $(document).on("click", ".close1", function () {
    $("#myModal").css("display", "none");
  });

  // 모달 바깥 클릭 시 모달 닫기
  $(document).on("click", function (event) {
    if (
      $(event.target).closest("#myModal .modal-content1").length === 0 &&
      $(event.target).closest(".productImg--toggle").length === 0
    ) {
      $("#myModal").css("display", "none");
    }
  });

  //- 버튼 클릭시 이미지src 날리고, + 버튼 visible처리. zoom관련 이미지도 같이 hidden처리.#####################################
  $("body").on("click", ".deleteImgBtn", function () {
    var productImgNClasses = $(this).parent().attr("class");
    var classes = productImgNClasses.split(" ");
    var productImgNClass = classes[0];
	//이미지 src날리고, 화면에서 숨김.
    $(this)
      .parent()
      .find('img')
      .attr("src", null).addClass('hidden').removeClass('visible');
    // - 버튼 화면에서 숨기기.
    $(this).addClass('hidden').removeClass('visible');
   
   $(this).parent().find('.uploadIcon').addClass('visible').removeClass('hidden');
    
    //돋보기도 같이 없어져야함.
    $(this).parent().find('.zoomUpBackground').addClass('hidden').removeClass('visible');
    $(this).parent().find('.zoomUpIcon1').addClass('hidden').removeClass('visible');
  });
  
  //전체 이미지 초기화버튼
  $("body").on("click", ".deleteAllImgBtn", function () {
	//ㄹㅇ이미지 src는 null만들어버리기
    $('#showImgList')
      .find('img')
      .attr("src", null).addClass('hidden').removeClass('visible');
    // - 버튼 화면에서 숨기기.
   $('#showImgList').find('.deleteImgBtn').addClass('hidden').removeClass('visible');
   //이미지 숨기기
   $('#showImgList').find('.plusImg').addClass('hidden').removeClass('visible');
   //+버튼 띄우기
   $('#showImgList').find('.uploadIcon').addClass('visible').removeClass('hidden');
    
  });
  
  //이미지가 있을 때만 hover로 zoomUpIcon, zoomUpBackground 나타내기.#####################################
  $(document).on('mouseenter', '.productImg--toggle', function() {
  if($(this).find('img').attr('src')!=null){
	    $(this).find('.zoomUpIcon1').removeClass('hidden').addClass('visible');
	    $(this).find('.zoomUpBackground').removeClass('hidden').addClass('visible');
	    
    }
  });
  $(document).on('mouseleave', '.productImg--toggle', function() {
  if($(this).find('img').attr('src')!=null){
 	   $(this).find('.zoomUpIcon1').removeClass('visible').addClass('hidden');
       $(this).find('.zoomUpBackground').removeClass('visible').addClass('hidden');
   }
  });
  
  
  
  //상품 수정 눌렀을때, form 데이터 들고 가버리자. 
  $('body').on('click', '#editBtnComplete', function(){
  	
  	//카테고리, 성별 Div text값을 input의 val로 설정
  var category1Val = $('.content--container__category__smallBox1').find('.categorySelected').text();
  var category2Val = $('.content--container__category__smallBox2').find('.categorySelected').text();
  var genderVal = $('.content--container__category__smallBox3').find('.categorySelected').text();
  $('#category').val(category1Val);
  $('#category2').val(category2Val);
  $('#gender').val(genderVal);  	
  
  
  	
  	
  	//파일경로를 지우고 파일명만 반환하는 함수
	function removeStorageString(src) {
	    if (!src) return ''; // src가 undefined나 null일 경우 빈 문자열을 반환
	    return src.replace('../storage/', ''); // '../storage' 문자열을 제거
	}
	
	var srcOfPlusImg1 = null;
	var srcOfPlusImg2 = null;
	var srcOfPlusImg3 = null;
	var srcOfPlusImg4 = null;
	var srcOfPlusImg5 = null;
	var srcOfPlusImg6 = null;
	var srcOfPlusImg7 = null;
	var srcOfPlusImg8 = null;
	var srcOfPlusImg9 = null;
	var srcOfPlusImg10 = null;
	
	//새로 등록한 이미지(input) 값이 없다면, 이미 등록된 이미지의 src에서 경로를 지우는 작업을 수행한다.
	//그게 아니라면, 위에서 선언한 null값 그대로 서버단으로 가게된다.
	var ifInputFileExist = function(inputImg, plusImg){
		if($(inputImg).val()== ''){ //진짜이미지가 없다면
			return removeStorageString($(plusImg).attr('src'));
		}
	}

	var srcOfPlusImg1 = ifInputFileExist($('#productImg1'),$('#plusImg1'));
	var srcOfPlusImg2 = ifInputFileExist($('#productImg2'),$('#plusImg2'));
	var srcOfPlusImg3 = ifInputFileExist($('#productImg3'),$('#plusImg3'));
	var srcOfPlusImg4 = ifInputFileExist($('#productImg4'),$('#plusImg4'));
	var srcOfPlusImg5 = ifInputFileExist($('#productImg5'),$('#plusImg5'));
	var srcOfPlusImg6 = ifInputFileExist($('#productImg6'),$('#plusImg6'));
	var srcOfPlusImg7 = ifInputFileExist($('#productImg7'),$('#plusImg7'));
	var srcOfPlusImg8 = ifInputFileExist($('#productImg8'),$('#plusImg8'));
	var srcOfPlusImg9 = ifInputFileExist($('#productImg9'),$('#plusImg9'));
	var srcOfPlusImg10 = ifInputFileExist($('#productImg10'),$('#plusImg10'));
	
	//이미있는
  	if (srcOfPlusImg1!=null) $('#hiddenProductImg1').val(srcOfPlusImg1);
  	if (srcOfPlusImg2!=null) $('#hiddenProductImg2').val(srcOfPlusImg2);
  	if (srcOfPlusImg3!=null) $('#hiddenProductImg3').val(srcOfPlusImg3);
  	if (srcOfPlusImg4!=null) $('#hiddenProductImg4').val(srcOfPlusImg4);
  	if (srcOfPlusImg5!=null) $('#hiddenProductImg5').val(srcOfPlusImg5);
  	if (srcOfPlusImg6!=null) $('#hiddenProductImg6').val(srcOfPlusImg6);
  	if (srcOfPlusImg7!=null) $('#hiddenProductImg7').val(srcOfPlusImg7);
  	if (srcOfPlusImg8!=null) $('#hiddenProductImg8').val(srcOfPlusImg8);
  	if (srcOfPlusImg9!=null) $('#hiddenProductImg9').val(srcOfPlusImg9);
  	if (srcOfPlusImg10!=null) $('#hiddenProductImg10').val(srcOfPlusImg10);
  	
  	var formData = new FormData($('#editForm')[0]);
  	console.log($('#hiddenProductImg1').val());
  	
  	$.ajax({
  		method : 'post',
  		data : formData,
  		url : '/kream/admin/adminProductEdit_Ajax',
  		processData: false,
    	contentType: false,
		success : function(){
			alert('상품 수정 완료');
			location.href='/kream/admin/adminMain';
		},
		error : function(e){
			console.log(e);
		}  		
  		
  	});
  	
  	
  });
  
});
