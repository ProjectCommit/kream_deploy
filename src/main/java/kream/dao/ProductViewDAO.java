package kream.dao;

import java.util.List;
import java.util.Map;

import kream.bean.AdminProductDTO;
import kream.bean.ProductCategoriesDTO;

public interface ProductViewDAO {

	public List<AdminProductDTO> kreamProductList();

	public List<AdminProductDTO> kreamHitBrand();

	public List<AdminProductDTO> categoryFilter(ProductCategoriesDTO productCategoriesDTO);
	
	public List<AdminProductDTO> brandFilter(ProductCategoriesDTO productCategoriesDTO);

	public List<AdminProductDTO> selectCarouselFilter(ProductCategoriesDTO productCategoriesDTO);

	public List<AdminProductDTO> searchProduct(String searchValue);

	public List<AdminProductDTO> searchProductCarousel(String searchValue);
}
