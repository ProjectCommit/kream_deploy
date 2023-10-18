<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../css/cykcss/cyk.css">	<!-- GET http://localhost:8080/favicon.ico 오류 -->
</head>
<link rel="icon" href="data:;base64,iVBORw0KGgo=">
<style>
		.productsWrapper{
			width:1100px; 
		}
		.containerButton{
            width: 1100px; height:62px;
            box-sizing: border-box; padding: 30px 10px;
        }
        .containerButton2{
        	margin-top: -28px;
        }
        body,html{
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            margin: 0;
            padding: 0;
        }
        .wrap{
            flex: 1;
            overflow-y: auto;
            padding-bottom: 500px;
        }
        .footer{
			padding-top: 1000px;
        }
        .container{
        	padding-top: 200px;
        }
        .three {
			border-bottom: 2px solid orange;
		}
</style>
<!-- C:\Spring\miniproject\.metadata\.plugins\org.eclipse.wst.server.core\tmp0\wtpwebapps\kream\WEB-INF\storage
	 C:\Spring\workspace\.metadata\.plugins\org.eclipse.wst.server.core\tmp0\wtpwebapps\kream\WEB-INF\storage
	 저장되는 실제폴더각자워크스페이스 안에 해당프로젝트에 해당하는 링크로 스토리지에 저장되있음.
 -->
<link rel="icon" href="data:;base64,iVBORw0KGgo="><!-- favicon오류 -->
<body>
	<jsp:include page="cykheader.jsp"/>
	<div class="wrap">
        <div class="container1">
            <div class="container2">
                <div class="productstotal">
                
                    <div class="productdivide">
                        <div class="title">  
                            <h1>&nbsp;&nbsp;남성 신발 인기순위</h1>
                        </div>
                        <div class="productsWrapper maleshoes">
                        </div>		<!--  class="productsWrapper" -->
                        <div class="containerButton">
                            <input type="button" class="containerButton2 maleshoes1" value="더보기">
                        </div>
                    </div> 			<!-- class="productdivide" -->
                    
                    <div class="productdivide">
                        <div class="title">  
                            <h1>&nbsp;&nbsp;여성 신발 인기순위</h1>
                        </div>
                        <div class="productsWrapper femaleshoes">
                        </div>		<!--  class="productsWrapper" -->
                        <div class="containerButton">
                            <input type="button" class="containerButton2 femaleshoes1" value="더보기">
                        </div>
                    </div> 			<!-- class="productdivide" -->
                    
                    
                    <div class="productdivide">
                        <div class="title">  
                            <h1>&nbsp;&nbsp;여성 의류 인기순위</h1>
                        </div>
                        <div class="productsWrapper femaleclothes">
                        </div>		<!--  class="productsWrapper" -->
                        <div class="containerButton">
                            <input type="button" class="containerButton2 femaleclothes1" value="더보기">
                        </div>
                    </div> 			<!-- class="productdivide" -->
                    
<!--                     <div class="productdivide">
                        <div class="title">  
                            <h1>&nbsp;&nbsp;가방 인기순위</h1>
                        </div>
                        <div class="productsWrapper bags">
                        </div>		 class="productsWrapper"
                        <div class="containerButton">
                            <input type="button" class="containerButton2 bags1" value="더보기">
                        </div>
                    </div> 			class="productdivide"  시간되면 하기 -->
                    
                    
                </div>				<!-- class="productstotal"  -->
            </div>
        </div>
	</div>     <!-- wrap -->   
<div class="footer"><jsp:include page="cykfooter.jsp"/></div>
<script src="http://code.jquery.com/jquery-3.7.0.min.js"></script>
<script type="text/javascript" src="../js/cykJS/rankingMain.js"></script>
<script type="text/javascript" src="../js/cykJS/rankingMain2.js"></script>
<script type="text/javascript" src="../js/cykJS/rankingMain3.js"></script>
</body>
</html>