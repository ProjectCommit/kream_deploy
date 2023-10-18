<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style type="text/css">
table {
	border-collapse: collapse;
}
th, td {
	padding: 5px;
}
</style>
</head>
<body>
<form id="uploadForm">
	<table border="1">
	<!-- 여기저장됨. C:\Spring\workspace\.metadata\.plugins\org.eclipse.wst.server.core\tmp0\wtpwebapps\chapter06_Web\WEB-INF\storage -->
		<tr>
			<th>상품명</th>
			<td>
				<input type="text" name="imageName" size="35">
			</td>
		</tr>
		<tr>
			<th>가격</th>
			<td>
				<input type="text" name="price" size="35">
			</td>
		</tr>
		<tr>
			<td colspan="2">
				<textarea name="imageContent" rows="10" cols="50"></textarea>
			</td>
		</tr>
		
		<tr>
			<td colspan="2">
				<span id="showImgList"></span>
				
				<img id="camera" src="../img/camera.png" width="50" height="50" alt="카메라">
				<input type="file" name="img[]" id="img" multiple="multiple" style="visibility: hidden;">
			</td>
		</tr>
		
		<tr>
			<td colspan="2" align="center">
				<input type="button" value="이미지 업로드" id="uploadBtn">
				<input type="reset" value="취소">
			</td>
		</tr>
	</table>
	<br>
	<div id="resultDiv"></div>	
</form>

<script src="http://code.jquery.com/jquery-3.7.0.min.js"></script>
<script type="text/javascript" src="../js/cykJS/cykupload_AJax.js"></script>
<script type="text/javascript">
$('#camera').click(function(){
	$('#img').trigger('click');
	
});

//여러개 이미지 미리보기
$('#img').change(function(){
	
	$('#showImgList').empty();
	for(i=0; i<this.files.length; i++){
		readURL(this.files[i]);
	}
});

function readURL(file){
	var reader = new FileReader();
	
	var show;
	reader.onload = function(e){
		var img = document.createElement('img');
		img.src = e.target.result;
		img.width = 70;
		img.height = 70;
		$('#showImgList').append(img);
		
	}
	
	reader.readAsDataURL(file);
}
</script>


</body>
</html>