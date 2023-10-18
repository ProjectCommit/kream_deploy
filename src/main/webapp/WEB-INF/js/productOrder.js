$(function () {
    function purchase() {
        if($('#isColorSelect').val() == '0') {
            alert('색상을 먼저 선택해 주세요');
        } else if($('#size').text() == '사이즈') {
            alert('사이즈를 먼저 선택해 주세요');
        } else {
            $.ajax({
                type:'post',
                url:'/kream/order/purchaseForm',
                data:{
                    productId: $('#productId').val(),
                    productColor: $('#color').text(),
                    size: $('#size').text(),
                    stock:$('#stock').val(),
                    quickOrder:$('#quickOrder').val(),
                    totalPrice:$('#price').text()
                },
                success:function () {

                },
                error:function (e) {
                    alert('구매하였습니다.');
                    window.location = '/kream/';
                }
            });
        }
    }

    $('#purchaseBar').click(function () {
        purchase();
    });

    $('#purchaseSection').click(function () {
        purchase();
    });
});