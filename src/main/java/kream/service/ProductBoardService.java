package kream.service;

import kream.bean.BoardPaging;
import kream.bean.ProductBoardDTO;

import java.util.List;
import java.util.Map;

public interface ProductBoardService {
    public void setProductBoard(ProductBoardDTO productBoardDTO);

    public List<Object> getBoardList(String productId, String page);

    public List<Object> getReplyList(String productId, String boardId);

    public void setProductReply(String productId, String boardId, String boardContent, String nickname);

    public BoardPaging getBoardPaging(String productId, String page);
}
