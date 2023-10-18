package kream.bean;

import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Component;

@Setter
@Getter
@Component
public class BoardPaging {
    private int currentPage;             //현재페이지
    private int pageBlock;              //pageBlock
    private int pageSize;               // 페이지당 글수
    private int totalNum;                  //총글수
    private StringBuffer pagingHTML;

    public void makePagingHTML() {
        pagingHTML = new StringBuffer();

        int totalPg = (totalNum+pageSize-1)/pageSize;
        int startPg = (currentPage-1) / pageBlock * pageBlock +1;
        int endPg = startPg + pageBlock -1;
        if(endPg > totalPg) endPg=totalPg;

        if(startPg != 1) pagingHTML.append("<div class='paging' onclick=boardPaging(" + (startPg-1) + ") >이전</div>");
        for (int i = startPg; i <= endPg; i++) {
            if(i == currentPage) pagingHTML.append("<div class='currentPaging'>" + i + "</div>");
            else pagingHTML.append("<div class='paging' onclick=boardPaging(" + i + ") >" + i + "</div>");
        }
        if(endPg != totalPg) pagingHTML.append("<div class='paging' onclick=boardPaging(" + (endPg+1) + ") >다음</div>");
    }
}
