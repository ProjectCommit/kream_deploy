var count = 2; 
window.onclick = function(event){
  var target = event.target;

  var classList = target.classList;

  if(classList.contains('containerButton2')){
    //기존 버튼 요소 삭제
    var existingButton = target.parentElement.querySelector('.containerButton2');    
    var bordorBottomLine = target
    if(existingButton){
      existingButton.remove();
    }

	var toAdd1 = document.createElement('div');
	toAdd1.classList.add("productsWrapper");;
		
    var toAdd = document.createElement('div'); 
    toAdd.classList.add("containerButton");
    var button = document.createElement('input');
    button.type = "button";
    button.classList.add("containerButton2");
    button.value = "더보기";
    toAdd.appendChild(button);
    
    if(count<10){
      document.querySelector('.productdivide').appendChild(toAdd1);
      document.querySelector('.productdivide').appendChild(toAdd); 
    }
  }
}