package kream.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import kream.bean.AdminProductDTO;
import kream.bean.ProductCategoriesDTO;

@Repository
@Transactional
public class ProductViewDAOMybatis implements ProductViewDAO {
	@Autowired
	private SqlSession sqlSession;
	
	@Override
	public List<AdminProductDTO> kreamProductList() {
		return sqlSession.selectList("productViewSQL.listView");
	}

	@Override
	public List<AdminProductDTO> kreamHitBrand() {
		return sqlSession.selectList("productViewSQL.hitBrandView");
	}


	@Override
	public List<AdminProductDTO> categoryFilter(ProductCategoriesDTO productCategoriesDTO) {
		List<AdminProductDTO> list = sqlSession.selectList("productViewSQL.categoryFilter", productCategoriesDTO);
		return list;
	}
	
	@Override
    public List<AdminProductDTO> brandFilter(ProductCategoriesDTO productCategoriesDTO) {      
		List<AdminProductDTO> list = sqlSession.selectList("productViewSQL.brandFilter", productCategoriesDTO);
		return list;
    }

	@Override
	public List<AdminProductDTO> selectCarouselFilter(ProductCategoriesDTO productCategoriesDTO) {
		List<AdminProductDTO> list = sqlSession.selectList("productViewSQL.selectCarouselFilter", productCategoriesDTO);
		return list;
	}

	@Override
	public List<AdminProductDTO> searchProduct(String searchValue) {
		List<AdminProductDTO> list = sqlSession.selectList("productViewSQL.searchProduct", searchValue);
		return list;
	}

	@Override
	public List<AdminProductDTO> searchProductCarousel(String searchValue) {
		List<AdminProductDTO> list = sqlSession.selectList("productViewSQL.searchProductCarousel", searchValue);
		return list;
	}
}
