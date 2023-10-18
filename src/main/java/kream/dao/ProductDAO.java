package kream.dao;

import java.util.List;
import java.util.Map;

import kream.bean.AdminProductDTO;
import kream.bean.ProductBoardDTO;

public interface ProductDAO {

    public AdminProductDTO getProduct(String productId);

    public List<String> getProductColor(String productId);

    public List<Object> getProductSize(Map<String, String> productMap);

    public void hitUpdate(String productId);

    public List<Object> getCategoryRecomend(Map<String, String> productMap);

    public List<Object> getBrandRecomend(Map<String, String> productMap);

    public List<Object> getBoardList(Map<String, String> productMap);

    public void setProductBoard(ProductBoardDTO productBoardDTO);

    public List<Object> getReplyList(Map<String, String> productMap);

    public void setProductReply(Map<String, String> productMap);

    public int getTotalBoard(String productId);

	public void updateProductBoard(String boardId);
	
	public void setWishList(Map<String, String> productMap);

    public void deleteWishList(Map<String, String> productMap);

    public int countWishList(String productId);

    public int isWishList(Map<String, String> productMap);
}
