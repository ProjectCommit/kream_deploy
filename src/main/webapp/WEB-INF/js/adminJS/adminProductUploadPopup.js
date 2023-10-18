
$(function(){
	
	
	$('body').on('click','#popupClickProductUpload',function(){
	
	// 팝업의 너비와 높이
    var popupWidth = 400;
    var popupHeight = 400;

    // 화면의 너비와 높이
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    // 팝업을 화면 중앙에 위치시키기 위한 x, y 좌표 계산
    var left = (screenWidth / 2) - (popupWidth / 2);
    var top = (screenHeight / 2) - (popupHeight / 2);

    // 팝업 열기
    
	 window.open('/kream/admin/adminPopup', 'newWindow', 'width=400, height=400, left=' + left + ', top=' + top);
	});
	
	
});
