
//여기는 상품등록과 관련된 이벤트들을 모아놓았습니다.
//1. 좌측메뉴 중 하나를 클릭시, 하위메뉴가 등장하는 토글.
//2. 상품등록의 카테고리 선택시 카테고리2를 설정하는 로직.
//3. 카테고리 드롭다운 항목이 변경될 때 동작하는 이벤트 핸들러
//4. 페이지 로드 시, 초기 하위 카테고리 옵션을 설정하기 위해 change 이벤트를 트리거한다.
//5. 파일 업로드시, 어떤 이미지가 올라오는지 이미지 뜨게 해주는 로직
//6. 업로드 버튼을 누르기 전에 선택한 이미지가 맞는지 확인하기 위해, 이미지를 보여준다.
//7. submitBtn 버튼 누르면 이미지 및 dto를 post타입 ajax로 전송.

$(function () {
var subCategories = {
      신발: ["스니커즈", "샌들/슬리퍼", "플랫", "로퍼","기타"],
      아우터: ["자켓", "아노락", "코트", "패딩", "기타"],
      상의: [
        "반팔 티셔츠",
        "긴팔 티셔츠",
        "가디건",
        "셔츠",
        "후드",
        "후드 집업",
        "기타"
      ],
      하의: ["바지", "반바지", "스커트","기타"],
      가방: ["프리미엄가방", "미니백", "백팩","기타"],
      지갑: ["반지갑", "장지갑", "카드지갑","기타"],
      시계: ["프리미엄시계", "전자 시계", "가죽 시계","기타"],
      패션잡화: ["귀걸이", "목걸이", "팔찌","기타"],
      기타:["기타"]
    };
    
    // .categoryDiv1 클릭 이벤트 핸들러
    $('body').on('click', '.categoryDiv1', function() {
        // 다른 .categoryDiv1의 categorySelected 클래스 제거
        $('.categoryDiv1').removeClass('categorySelected');
        
        // 현재 클릭된 .categoryDiv1에 categorySelected 클래스 추가
        $(this).addClass('categorySelected');

        // 클릭된 .categoryDiv1의 텍스트 값을 가져옴
        let key = $(this).text();
        
        // 가져온 텍스트 값을 key로 하여 subCategories에서 해당하는 배열을 가져옴
        let values = subCategories[key];
        
        // .categoryDiv2를 초기화한 후, 가져온 배열의 값을 이용하여 .categoryDiv2에 append
        
        $('.content--container__category__smallBox2').find('.categoryDiv2').remove();
        

        $.each(values, function(index, value) {
    		$('.content--container__category__smallBox2').append(`<div class="categoryDiv categoryDiv2">${value}</div>`);
        });
    });

    // .categoryDiv2 클릭 이벤트 핸들러
    $('body').on('click', '.categoryDiv2', function() {
        // 다른 .categoryDiv2의 categorySelected 클래스 제거
        $('.categoryDiv2').removeClass('categorySelected');
        
        // 현재 클릭된 .categoryDiv2에 categorySelected 클래스 추가
        $(this).addClass('categorySelected');
    });
    // .categoryDiv3 클릭 이벤트 핸들러
    $('body').on('click', '.categoryDiv3', function() {
        // 다른 .categoryDiv2의 categorySelected 클래스 제거
        $('.categoryDiv3').removeClass('categorySelected');
        
        // 현재 클릭된 .categoryDiv2에 categorySelected 클래스 추가
        $(this).addClass('categorySelected');
    });
    


  //-------------5. 파일 업로드시, 어떤 이미지가 올라오는지 이미지 뜨게 해주는 로직-------------------

  $("body").on("click", "#camera", function () {
    //강제 이벤트 발생
    $("#productImg").trigger("click");
  });

  // 6. 업로드 버튼을 누르기 전에 선택한 이미지가 맞는지 확인하기 위해, 이미지를 보여준다.
  function readURL(file) {
    var reader = new FileReader();

    reader.onload = function (e) {
      var img = document.createElement("img");
      img.src = e.target.result;
      img.className = "showImgClass";
      $("#showImgList").append(img);
    };
    reader.readAsDataURL(file);
  }
  $("body").on("change", "#productImg", function () {
    $("#showImgList").empty();
    for (var i = 0; i < this.files.length; i++) {
      readURL(this.files[i]);
    }
  });


//옵션추가기능
$("body").on("click", ".plusBtn",function() {
        var table = $(this).closest(".plusMinus--container").prev("table");
        var rowCount = table.find('.titleTr').length;

        if(rowCount < 20) {
            var clonedRow = table.find('.titleTr').first().clone();
            clonedRow.find('input').val('');
            table.append(clonedRow);
        } else {
            alert('옵션은 20개까지만 추가 가능합니다.');
        }
    });

    $("body").on('click',".minusBtn", function() {
        var table = $(this).closest(".plusMinus--container").prev("table");
        var lastRow = table.find('.titleTr').last();
        if(lastRow.index() !== 0) {
            lastRow.remove();
        } else {
            alert('기본 옵션 행은 제거할 수 없습니다.');
        }
    });


  // 7. submitBtn 버튼 누르면 이미지 및 dto를 post타입 ajax로 전송.
  $("body").on("click", "#submitBtn", function () {
  
  	//카테고리, 성별 Div text값을 input의 val로 설정
  var category1Val = $('.content--container__category__smallBox1').find('.categorySelected').text();
  var category2Val = $('.content--container__category__smallBox2').find('.categorySelected').text();
  var genderVal = $('.content--container__category__smallBox3').find('.categorySelected').text();
  $('#category').val(category1Val);
  $('#category2').val(category2Val);
  $('#gender').val(genderVal);

  
    var formData = new FormData($("#uploadForm")[0]);

    $.ajax({
      type: "post",
      enctype: "multipart/form-data",
      processData: false,
      contentType: false,
      url: "/kream/admin/adminProductUpload",
      data: formData, 
      success: function (data) {
        alert("상품 등록 완료");
        location.href="/kream/admin/adminMain";
      },
      error: function (e) {
        console.log(e);
      },
    });
    
    
});
});
