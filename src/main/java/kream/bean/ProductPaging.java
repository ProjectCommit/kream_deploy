package kream.bean;

import org.springframework.stereotype.Component;

import lombok.Getter;
import lombok.Setter;
//[ 김찬영  2023-10-9 오후 08:04:42 ]	
@Component
@Getter
@Setter
public class ProductPaging {
	private int currentPage;
	private int pageBlock;
	private int pageSize;
	private int totalA;
	private StringBuffer pagingHTML;
	
	public void makePagingHTML() {
		pagingHTML = new StringBuffer();
		
		int totalP = (totalA + pageSize - 1) / pageSize; //총 페이지 수
		
		int startPage = (currentPage-1) / pageBlock * pageBlock + 1;
		int endPage = startPage + pageBlock - 1;
		if(endPage > totalP) endPage = totalP;
		
		if(startPage != 1) {
			pagingHTML.append("<span id='paging' onclick='productPaging("+ (startPage-1) + ")'>이전</span>");
		}
		
		for(int i=startPage; i<=endPage; i++) {
			if(i == currentPage) {
				pagingHTML.append("<span id='currentPaging' onclick='productPaging(" + i + ")'>" + i + "</span>");
				
			}else {
				pagingHTML.append("<span id='paging' onclick='productPaging(" + i + ")'>" + i + "</span>");
			}
		}//for
		
		if(endPage < totalP) {
			pagingHTML.append("<span id='paging' onclick='productPaging(" + (endPage+1) + ")'>다음</span>");
		}
		
	}//makePagingHTML()
	
	
	
}
