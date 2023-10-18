$(function () {
    function setSelectColorBtn(color) {
        let result = `<div class="selectColorBtn">${color}</div>`;
        $('#colorModalContents').append(result);
    }

    $.ajax({
        type:'post',
        url:'/kream/product/productColorService',
        data:{ productId: $('#productId').val() },
        dataType:'json',
        success:function (data) {
            data.forEach(function (item) {
                setSelectColorBtn(item);
            });
        },
        error:function (e) {
            console.log(e);
        }
    });

    const colorModal = $('#colorModal');
    const body = $('body');

    $('#colorSection').click(function () {
        colorModal.css('display', 'block');
        body.addClass('modalOpen');
    });

    $('#closeColorModalBtn').click(function () {
        colorModal.css('display', 'none');
        body.removeClass('modalOpen');
    });

    $(window).click(function (event) {
        if (event.target === colorModal[0]) {
            colorModal.css('display', 'none');
            body.removeClass('modalOpen');
        }
    });

    function setSelectSizeBtn(size, stock, quickShip) {
        let result ='';

        if(stock==0) {
            result = `<div class="noSelectSizeBtn"><div class="sizeText">${size}`;
            if(quickShip==1) {
                result+=`<img class="shipImg" src="../img/quickdel.png"><input type="hidden" class="shipVal" value="1">`;
            }
            if(quickShip==0) {
                result+=`<img class="shipImg" src="../img/defaultdel.png"><input type="hidden" class="shipVal" value="0">`;
            }
            result += `</div><div class="sizeStock">재고 없음</div></div>`;
        }
        if(stock!=0) {
            result = `<div class="selectSizeBtn"><div class="sizeText">${size}`;
            if(quickShip==1) {
                result+=`<img class="shipImg" src="../img/quickdel.png"><input type="hidden" class="shipVal" value="1">`;
            }
            if(quickShip==0) {
                result+=`<img class="shipImg" src="../img/defaultdel.png"><input type="hidden" class="shipVal" value="0">`;
            }
            result += `</div><div class="sizeStock"><div>재고 : </div> <div class="stockNo">${stock}</div></div></div>`;
        }
        $('#sizeModalContents').append(result);
    }

    function setSelectStock(stock) {
        $('#stock').empty();
        for(let i=1; i <= stock; i++) {
            if(i==11) break;
            let result = `<option value="${i}">${i}</option>`;
            $('#stock').append(result);
        }
    }

    $(document).on('click', '.selectColorBtn', function () {
        $(body).removeClass('modalOpen');
        $('#color').text($(this).text());
        $('#isColorSelect').val('1');
        colorModal.css('display', 'none');
        $('#size').text('사이즈');
        $('#sizeModalContents').empty();

        $.ajax({
            type:'post',
            url:'/kream/product/productSizeService',
            data:{
                productId: $('#productId').val(),
                productColor: $(this).text()
            },
            dataType:'json',
            success:function (data) {
                data.forEach(function (items) {
                    setSelectSizeBtn(items.size, items.stock, items.quickShip);
                });
            },
            error:function (e) {
                console.log(e);
            }
        });
    });

    $(document).on('click', '.selectSizeBtn', function () {
        $(body).removeClass('modalOpen');
        $('#size').text($(this).children('.sizeText').text());
        setSelectStock($(this).children().children('.stockNo').text());
        sizeModal.css('display', 'none');

        let shipVal = $(this).children().children('.shipVal');

        if(shipVal.val() == 0) {
            $('#quickOrder').empty();
            $('#quickOrder').append('<option value="0" selected>일반 배송</option>');
        } else {
            $('#quickOrder').empty();
            $('#quickOrder').append('<option value="0" selected>일반 배송</option><option value="1">빠른 배송</option>');
        }

    });

    const sizeModal = $('#sizeModal');

    $('#closeSizeModalBtn').click(function () {
        sizeModal.css('display', 'none');
        body.removeClass('modalOpen');
    });

    $(window).click(function (event) {
        if (event.target === sizeModal[0]) {
            sizeModal.css('display', 'none');
            body.removeClass('modalOpen');
        }
    });

    $('#sizeSection').click(function () {
        if($('#isColorSelect').val() == '0') {
            alert('색상을 먼저 선택해 주세요');
        }
        if($('#isColorSelect').val() == '1') {
            sizeModal.css('display', 'block');
            body.addClass('modalOpen');
        }
    });
});