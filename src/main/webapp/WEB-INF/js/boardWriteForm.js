$(function () {
    $('#closeBtn').click(function () {
        window.close();
    });

    $('#securityCheck').change(function () {
        if ($(this).prop('checked')) {
            $('#security').val('1');
        } else {
            $('#security').val('0');
        }
    });

    $('#submitBtn').click(function () {
        if($('#title').val() === '') {
            alert('제목을 작성해 주세요.');
            $('#title').focus();
            return false;
        }
        if($('#boardContent').val() === '') {
            alert('문의 사항을 작성해 주세요.');
            $('#boardContent').focus();
            return false;
        }
        $.ajax({
            type:'post',
            url:'/kream/product/setProductBoard',
            data: {
                productId: $('#productId').val(),
                boardTitle: $('#title').val(),
                boardContent: $('#boardContent').val(),
                nickname: $('#nickname').val(),
                security: $('#security').val()
            },
            success: function () {
                alert('작성에 성공하였습니다.')
                window.opener.location.reload();
                window.close();
            },
            error:function (e) {
                alert('작성에 실패하였습니다. 잠시 후 다시 시도해 주세요.')
                window.close();
            }
        });
    });


});