package kream.service;

import kream.bean.BoardPaging;
import kream.bean.ProductBoardDTO;
import kream.dao.ProductDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ProductBoardServiceImpl implements ProductBoardService{
    @Autowired
    private ProductDAO productDAO;
    @Autowired
    private BoardPaging boardPaging;

    @Override
    public void setProductBoard(ProductBoardDTO productBoardDTO) {
        productDAO.setProductBoard(productBoardDTO);
    }

    @Override
    public List<Object> getBoardList(String productId, String page) {
        Map<String, String> productMap = new HashMap<>();
        productMap.put("productId", productId);
        int startNum =0;
        if(!page.equals("1")) {
            startNum = (Integer.parseInt(page)-1)*5 -1;
        }
        productMap.put("startNum", startNum+"");
        return productDAO.getBoardList(productMap);
    }

    @Override
    public List<Object> getReplyList(String productId, String boardId) {
        Map<String, String> productMap = new HashMap<>();
        productMap.put("productId", productId);
        productMap.put("parentBoardId", boardId);
        return  productDAO.getReplyList(productMap);
    }

    @Override
    public void setProductReply(String productId, String boardId, String boardContent, String nickname) {
        Map<String, String> productMap = new HashMap<>();
        productMap.put("productId", productId);
        productMap.put("boardId", boardId);
        productMap.put("boardContent", boardContent);
        productMap.put("nickname", nickname);
        productDAO.setProductReply(productMap);
        productDAO.updateProductBoard(boardId);
    }

    @Override
    public BoardPaging getBoardPaging(String productId, String page) {
        boardPaging.setCurrentPage(Integer.parseInt(page));
        boardPaging.setPageBlock(5);
        boardPaging.setPageSize(5);
        boardPaging.setTotalNum(productDAO.getTotalBoard(productId));
        boardPaging.makePagingHTML();
        return boardPaging;
    }
}
