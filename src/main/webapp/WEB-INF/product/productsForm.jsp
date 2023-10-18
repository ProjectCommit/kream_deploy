<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta data-n-head="ssr" data-hid="viewport" name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=yes, viewport-fit=cover">
    <title>products</title>
    <link href="../css/productsForm.css" type="text/css"  rel="stylesheet">
    <link href="../css/footer.css" type="text/css"  rel="stylesheet">
    <link href="../css/productModalForm.css" type="text/css"  rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous" >
</head>
<body>

<input id="productId" type="hidden" value="${param.productId}">
<input id="page" type="hidden" value="${param.page}">
<input id="category2" type="hidden" value="#">
<input id="gender" type="hidden" value="#">
<input id="nickname" type="hidden" value="${sessionScope.nickname}">
<div id="mainContainer">
    <header>
        <div id="menu">
            <div id="topMenu">
                <dl class="topnav">
                    <dt class="blind">top navigation</dt>
                    <dd><a href="#">고객센터</a></dd>
                    <dd><a href="#">마이페이지</a></dd>
                    <dd><a href="#">관심상품</a></dd>
                    <dd><a href="/kream/logout">로그아웃</a></dd>
                </dl>
            </div>
            <div id="secondMenu">
                <div id="logo"><a href="/kream/"><img src="../img/logo.png"></a></div>
            </div>
        </div>
        <div id="bar">
            <div id="prodBar">
                <div id="prodImgBar">
                    <img id="barImg" src="#">
                </div>
                <div id="prodDetailBar">
                    <div id="prodNameBar">
                    </div>
                    <div id="prodExplainBar">
                    </div>
                    <div id="prodDeliveryBar">
                        <img src="../img/quickdel.png">
                    </div>
                </div>
            </div>
            <div id="orderBar">
                <div id="interestBar">
                    <div id="interestBarImg">
                        <img src="../img/noninterest.png" width="20px">
                    </div>
                    <div id="interestBartext">

                    </div>
                </div>
                <div id="purchaseBar">
                    바로구매 >
                </div>
            </div>
        </div>
    </header>

    <div id="mainSection">
        <div id="leftSection">
            <div id="carouselExample" class="carousel slide" style="width: 698px; height: 698px; z-index: 1; position: fixed;">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img id="carouselImg" src="#" class="d-block w-100">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>

        <div id="rightSection">
            <div id="explainSection">
                <div><a id="brand" href="#"></a></div>
                <div id="productName"></div>
                <div id="productExplain"></div>
            </div>
            <div id="colorSection">
                <input id="isColorSelect" type="hidden" value="0">
                <div id="color" style="font-weight: bold; font-size: 0.8em;">
                    색상
                </div>
                <div  id="colorBtn">
                    색상 선택<img src="../img/down.png" width="25px">
                </div>
            </div>
            <div id="sizeSection">
                <div id="size" style="font-weight: bold; font-size: 0.8em;">
                    사이즈
                </div>
                <div id="sizeBtn">
                    사이즈 선택<img src="../img/down.png" width="25px">
                </div>
            </div>
            <div id="priceSection">
                <div style="color: #bbbbbb; font-size: 0.7em;">
                    가격
                </div>
                <div id="price">
                    11
                </div>
            </div>
            <div id="stockSection">
                <div style="color: #bbbbbb; font-size: 0.7em;">
                    수량
                </div>
                <div>
                    <select id="stock" aria-label="stock">
                        <option value="1" selected>1</option>
                    </select>
                </div>
            </div>
            <div id="deliveryTypeSection">
                <div style="color: #bbbbbb; font-size: 0.7em;">
                    배송
                </div>
                <div>
                    <select id="quickOrder" aria-label="quickOrder">
                        <option value="0" selected>일반 배송</option>
                    </select>
                </div>
            </div>
            <div id="purchaseSection">
                <div id="purchase">
                    바로구매 >
                </div>
            </div>
            <div id="interest">
                <input type="hidden" id="isInterest" value="0">
                <img src="../img/noninterest.png" width="20px">관심상품
            </div>

            <div id="eventSection">
                <div style="font-weight: bold; font-size: 1.1em;">
                    추가 혜택
                </div>
                <table>
                    <tr>
                        <th>
                            포인트
                        </th>
                        <td>
                            계좌 간편결제 시 1% 적립
                        </td>
                    </tr>
                    <tr>
                        <th>
                            결제
                        </th>
                        <td>
                            현대카드 즉시할인 5% + 특별 할부 혜택외 3건
                        </td>
                    </tr>
                </table>
            </div>

            <div id="deliverySection">
                <div style="font-weight: bold; font-size: 1.1em;">
                    배송 정보
                </div>
                <table>
                    <tr>
                        <th>
                            <img src="../img/quickdel.png" style="width: 50px; height: 50px;">
                        </th>
                        <td>
                            <div style="margin: 15px 0 0 0;"><span style="font-weight: bold;">빠른배송</span> 5,000원</div>
                            <div id="shipDate" style="margin: 5px 0; font-size: 0.8em; color: #bbbbbb;"></div>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <img src="../img/defaultdel.png" style="width: 50px; height: 50px;">
                        </th>
                        <td>
                            <div style="margin: 15px 0 0 0;"><span style="font-weight: bold;">일반배송</span> 3,000원</div>
                            <div style="margin: 5px 0; font-size: 0.8em; color: #bbbbbb;">검수 후 배송 : 5-7일 내 도착 예정</div>
                        </td>
                    </tr>
                </table>
            </div>

            <div id="assuranceSection">
                <table>
                    <tr>
                        <th>
                            <img src="../img/assurance1.png" style="width: 50px; height: 50px;"><br>
                        </th>
                        <td>
                            <div style="font-weight: bold; font-size: 1.1em">100% 정품 보증</div>
                            <div style="color: #bbbbbb; font-size: 1.1em">KREAM에서 검수한 상품이 정품이 아닐 경우, 구매가의 3배를 보상합니다.</div><br>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <img src="../img/assurance2.png" style="width: 50px; height: 50px;"><br>
                        </th>
                        <td>
                            <div style="font-weight: bold; font-size: 1.1em">엄격한 다중 검수</div>
                            <div style="color: #bbbbbb; font-size: 1.1em;">모든 상품은 검수센터에 도착한 후, 상품별 전문가 그룹의 체계적인 시스템을 거쳐 검수를 진행합니다.</div><br>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <img src="../img/assurance3.png" style="width: 50px; height: 50px;">
                        </th>
                        <td>
                            <div style="font-weight: bold; font-size: 1.1em">정품 인증 패키지</div>
                            <div style="color: #bbbbbb; font-size: 1.1em">검수에 합격한 경우에 한하여 KREAM의 정품 인증 패키지가 포함된 상품이 배송됩니다.</div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>

    <div id="secondBarContainer">
        <div id="secondBar">
            <div id="detailExplainBar">
                상품 상세정보
            </div>
            <div id="boardBar">
                상품 문의
            </div>
            <div id="prodRecommendBar">
                추천 상품
            </div>
        </div>
    </div>

    <div id="detailExplainContainer">
        <div id="detailExplainText">

        </div>
        <div id="detailExplainImg">

        </div>
    </div>

    <div id="questionContainer">
        <div id="questionTitle">
            <div style=" font-weight: bold; font-size: 1.3em;">
                상품 문의
            </div>
            <div>
                <input type="button" value="글쓰기" id="questionBtn">
            </div>
        </div>
        <div id="questionBoard">

        </div>
        <div id="boardPagingDiv">

        </div>
    </div>

    <div id="categoryContainer">
        <div style="display: flex; justify-content: space-between; margin: 100px 210px 30px 210px; border-top: 1px solid #bbbbbb; padding-top: 70px;">
            <div id="categoryRecomend" style="font-weight: bold; font-size: 2em; "></div>
            <div id="goCategoryRecomend" ><br><a href="#">더보기</a></div>
        </div>
        <div id="categoryProdDiv">

        </div>
    </div>

    <div id="brandContainer">
        <div style="display: flex; justify-content: space-between; margin: 30px 210px; ">
            <div id="brandRecomend" style="font-weight: bold; font-size: 2em; "></div>
            <div id="goBrandRecomend" ><br><a href="#">더보기</a></div>
        </div>
        <div id="brandProdDiv">

        </div>
    </div>

    <div id="colorModal" class="modal">
        <div class="modalContent">
            <div style="display: flex;">
                <div id="colorModalTitle">색상</div>
                <div id="closeColorModalBtn" style="font-weight: bold; font-size: 1.5em;">×</div>
            </div>
            <div id="colorModalContents">

            </div>
        </div>
    </div>

    <div id="sizeModal" class="modal">
        <div class="modalContent">
            <div style="display: flex;">
                <div id="sizeModalTitle">사이즈</div>
                <div id="closeSizeModalBtn" style="font-weight: bold; font-size: 1.5em;">×</div>
            </div>
            <div id="sizeModalContents">

            </div>
        </div>
    </div>

    <jsp:include page="/WEB-INF/includeMain/footer.jsp"></jsp:include>

</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
<script src="http://code.jquery.com/jquery-3.7.0.min.js"></script>
<script>
    function boardPaging(pg) {
        location.href = '/kream/product/productsForm?productId=' + $('#productId').val() + '&page=' + pg;
    }
</script>
<script src="../js/productsForm.js"></script>
<script src="../js/productsQuestionForm.js"></script>
<script src="../js/productModal.js"></script>
<script src="../js/productOrder.js"></script>
</body>
</html>