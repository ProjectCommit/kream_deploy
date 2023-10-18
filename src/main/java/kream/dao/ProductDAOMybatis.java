package kream.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import kream.bean.AdminProductDTO;
import kream.bean.ProductBoardDTO;

@Component
@Transactional
public class ProductDAOMybatis implements ProductDAO{
    @Autowired
    private SqlSession sqlSession;

    @Override
    public AdminProductDTO getProduct(String productId) {
        return sqlSession.selectOne("product.getProductList", productId);
    }


    @Override
    public List<String> getProductColor(String productId) {
        return sqlSession.selectList("product.getProductColor", productId);
    }

    @Override
    public List<Object> getProductSize(Map<String, String> productMap) {
        return sqlSession.selectList("product.getProductSize", productMap);
    }

    @Override
    public void hitUpdate(String productId) {
        sqlSession.update("product.hitUpdate", productId);
    }

    @Override
    public List<Object> getCategoryRecomend(Map<String, String> productMap) {
        return sqlSession.selectList("product.getCategoryRecomend", productMap);
    }

    @Override
    public List<Object> getBrandRecomend(Map<String, String> productMap) {
        return sqlSession.selectList("product.getBrandRecomend", productMap);
    }

    @Override
    public List<Object> getBoardList(Map<String, String> productMap) {
        return sqlSession.selectList("product.getBoardList", productMap);
    }

    @Override
    public void setProductBoard(ProductBoardDTO productBoardDTO) {
        sqlSession.insert("product.setProductBoard", productBoardDTO);
    }

    @Override
    public List<Object> getReplyList(Map<String, String> productMap) {
        return sqlSession.selectList("product.getReplyList", productMap);
    }

    @Override
    public void setProductReply(Map<String, String> productMap) {
        sqlSession.insert("product.setProductReply", productMap);
    }

    @Override
    public int getTotalBoard(String productId) {
        return sqlSession.selectOne("product.getTotalBoard", productId);
    }


    @Override
	public void updateProductBoard(String boardId) {
		sqlSession.update("product.updateProductBoard",boardId);
		
	}
    
    @Override
    public void setWishList(Map<String, String> productMap) {
        sqlSession.insert("product.setWishList", productMap);
    }

    @Override
    public void deleteWishList(Map<String, String> productMap) {
        sqlSession.delete("product.deleteWishList", productMap);
    }

    @Override
    public int countWishList(String productId) {
        return sqlSession.selectOne("product.countWishList", productId);
    }

    @Override
    public int isWishList(Map<String, String> productMap) {
        return sqlSession.selectOne("product.isWishList", productMap);
    }
}
