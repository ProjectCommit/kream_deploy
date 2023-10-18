$(function () {
    let shipDate = new Date();

    if(shipDate.getHours() < 14) {
        shipDate.setDate(shipDate.getDate()+1);
    }
    if(shipDate.getHours() >= 14) {
        shipDate.setDate(shipDate.getDate()+2);
    }
    if(shipDate.getDay() === 0) {
        shipDate.setDate(shipDate.getDate()+1);
    }

    const month = (shipDate.getMonth() + 1).toString().padStart(2, '0');
    const day = shipDate.getDate().toString().padStart(2, '0');

    const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
    const weekday = weekdays[shipDate.getDay()];

    $('#shipDate').text('지금 결제시 ' + month + '/' + day + '(' + weekday + ')' + ' 도착 예정');

    $.ajax({
        type: 'post',
        url:'/kream/product/productHitService',
        data:{ productId: $('#productId').val() }
    });

    $('#detailExplainBar').click(function () {
        $('#detailExplainText')[0].scrollIntoView({ behavior: 'smooth' });
    });
    $('#boardBar').click(function () {
        $('#questionContainer')[0].scrollIntoView({ behavior: 'smooth' });
    });
    $('#prodRecommendBar').click(function () {
        $('#categoryContainer')[0].scrollIntoView({ behavior: 'smooth' });
    });

    $(window).scroll(function () {
        let scrollPosition = $(this).scrollTop();

        if (scrollPosition>380) {
            $('#carouselExample').css('position', 'unset');
            $('#carouselExample').css('margin-top', '380');
            $('header').css('box-shadow', '0 0 10px  rgba(0,0,0,0.1)');
        } else {
            $('#carouselExample').css('position', 'fixed');
            $('#carouselExample').css('margin-top', '0');
            $('header').css('box-shadow', '');
        }

        if(scrollPosition > 400) {
            $('#bar').css('display', 'flex');
        } else {
            $('#bar').css('display', 'none');
        }
    });

    $.ajax({
        type:'post',
        url:'/kream/product/productService',
        data:{ productId: $('#productId').val() },
        dataType:'json',
        success:function (data) {
            $('#brand').text(data.brand);
            $('#prodNameBar').text(data.productName);
            $('#productName').text(data.productName);
            $('#prodExplainBar').text(data.productExplain);
            $('#productExplain').text(data.productExplain);
            $('#price').text(data.price.toLocaleString()+'원');
            $('#detailExplainText').text(data.productDetail);
            $('#barImg').attr('src', '/kream/storage/' + data.productImg1);
            $('#carouselImg').attr('src', '/kream/storage/' + data.productImg1);
            $('#categoryRecomend').text(data.category2 + ' 상품 추천');
            $('#brandRecomend').text(data.brand + '의 상품 추천');
            $('#category2').val(data.category2);
            $('#gender').val(data.gender);


            function setCarouselImg(img) {
                let result = `<div class="carousel-item">` +
                    `<img src="/kream/storage/${img}" className="d-block w-100">` +
                    `</div>`;
                $('.carousel-inner').append(result);
            }

            if(data.productImg2 != null){
                setCarouselImg(data.productImg2);
            }
            if(data.productImg3 != null){
                setCarouselImg(data.productImg3);
            }

            function setDetailExplainImg(img) {
                let result = `<div class="detailExplainImg">` +
                    `<img src="/kream/storage/${img}" className="d-block w-100">` +
                    `</div>`;
                $('#detailExplainImg').append(result);
            }

            setDetailExplainImg(data.productImg1);

            if(data.productImg2 != null){
                setDetailExplainImg(data.productImg2);
            }
            if(data.productImg3 != null){
                setDetailExplainImg(data.productImg3);
            }
            if(data.productImg4 != null){
                setDetailExplainImg(data.productImg2);
            }
            if(data.productImg5 != null){
                setDetailExplainImg(data.productImg3);
            }
            if(data.productImg6 != null){
                setDetailExplainImg(data.productImg2);
            }
            if(data.productImg7 != null){
                setDetailExplainImg(data.productImg3);
            }
            if(data.productImg8 != null){
                setDetailExplainImg(data.productImg2);
            }
            if(data.productImg9 != null){
                setDetailExplainImg(data.productImg3);
            }
            if(data.productImg10 != null){
                setDetailExplainImg(data.productImg2);
            }

            categoryRecomend();
            brnadRecomend();

        },
        error:function (e) {
            console.log(e);
        }
    });


    function createCategoryCard(productId, productImg1, brand, productName, productExplain, price, wish) {
        let result = `<div class="card">` +
            `<div class="cardImg"><img src="/kream/storage/${productImg1}"></div>` +
            `<div class="cardBrand">${brand}</div>` +
            `<div class="cardProductName">${productName}</div>` +
            `<div class="cardProductExplain">${productExplain}</div>` +
            `<div class="cardShip"><img src="../img/quickdel.png"></div>` +
            `<div class="cardPrice">${price}</div>` +
            `<div class="cardInterest"><img src="../img/noninterest.png">${wish}</div>` +
            `<input class="cardProductId" type="hidden" value="${productId}">` +
            `</div>`;
        $('#categoryProdDiv').append(result);
    }

    function createBrandCard(productId, productImg1, brand, productName, productExplain, price, wish) {
        let result = `<div class="card">` +
            `<div class="cardImg"><img src="/kream/storage/${productImg1}"></div>` +
            `<div class="cardBrand">${brand}</div>` +
            `<div class="cardProductName">${productName}</div>` +
            `<div class="cardProductExplain">${productExplain}</div>` +
            `<div class="cardShip"><img src="../img/quickdel.png"></div>` +
            `<div class="cardPrice">${price}</div>` +
            `<div class="cardInterest"><img src="../img/noninterest.png">${wish}</div>` +
            `<input class="cardProductId" type="hidden" value="${productId}">` +
            `</div>`;
        $('#brandProdDiv').append(result);
    }

    function categoryRecomend() {
        $.ajax({
            type:'post',
            url:'/kream/product/categoryRecomendService',
            data:{
                productId: $('#productId').val(),
                gender: $('#gender').val(),
                category2: $('#category2').val()
            },
            dataType:'json',
            success:function (data) {
                data.forEach(function (items) {
                    createCategoryCard(items.productId, items.productImg1, items.brand, items.productName, items.productExplain, items.price, items.wish);
                });
            },
            error:function (e) {
                console.log(e);
            }
        });
    }

    function brnadRecomend() {
        $.ajax({
            type: 'post',
            url: '/kream/product/brandRecomendService',
            data: {
                productId: $('#productId').val(),
                brand: $('#brand').text()
            },
            dataType: 'json',
            success: function (data) {
                data.forEach(function (items) {
                    createBrandCard(items.productId, items.productImg1, items.brand, items.productName, items.productExplain, items.price, items.wish);
                });
            },
            error: function (e) {
                console.log(e);
            }
        });
    }

    function countWishList() {
        $.ajax({
            type:'post',
            url:'/kream/product/countWishList',
            data:{
                productId: $('#productId').val()
            },
            success:function (data) {
                $('#interestBartext').text(data);
            },
            error:function (e) {
                console.log(e);
            }
        });
    }


    countWishList();

     function interestToggle(isInterest) {
        if(isInterest==0) {
            $.ajax({
                type:'post',
                url:'/kream/product/setWishList',
                data:{
                    productId: $('#productId').val()
                },
                success:function () {
                    $('#isInterest').val('1');
                    $('#interest').children('img').attr('src', '../img/interest.png');
                    $('#interestBarImg').children('img').attr('src', '../img/interest.png');
                    countWishList();
                },
                error:function (e) {
                    console.log(e);
                }
            });
        }
        if(isInterest==1){
            $.ajax({
                type:'post',
                url:'/kream/product/deleteWishList',
                data:{
                    productId: $('#productId').val()
                },
                success:function () {
                    $('#isInterest').val('0');
                    $('#interest').children('img').attr('src', '../img/noninterest.png');
                    $('#interestBarImg').children('img').attr('src', '../img/noninterest.png');
                    countWishList();
                },
                error:function (e) {
                    console.log(e);
                }
            });
        }
    }

    $.ajax({
        type:'post',
        url:'/kream/product/isWishList',
        data:{
            productId: $('#productId').val()
        },
        success:function (data) {
            interestToggle(data);
        },
        error:function (e) {
            console.log(e);
        }
    });

    $('#interest').click(function () {
        interestToggle($('#isInterest').val());
    });
    $('#interestBar').click(function () {
        interestToggle($('#isInterest').val());
    });

    $(document).on('click', '.card', function () {
        location.href = '/kream/product/productsForm?productId=' + $(this).children('.cardProductId').val() +'&page=1';
    });


    $('#questionBtn').click(function () {
        let productId = $('#productId').val();
        let nickname = $('#nickname').val();
        let popup = window.open('/kream/product/boardWriteForm?productId=' + productId + '&nickname=' + nickname, '1', 'width=550,height=470');
        if (popup == null || typeof(popup) === 'undefined') {
            alert('팝업 차단이 감지되었습니다. 팝업 차단을 해제해주세요.');
        }
    });
});