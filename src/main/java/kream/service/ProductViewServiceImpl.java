package kream.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kream.bean.AdminProductDTO;
import kream.bean.ProductCategoriesDTO;
import kream.dao.ProductViewDAO;

@Service
public class ProductViewServiceImpl implements ProductViewService {
	@Autowired
	public ProductViewDAO productViewDAO;
	@Autowired
	public List<ProductCategoriesDTO> productCategoriesDTO;
	
	@Override
	public List<AdminProductDTO> kreamProductList() {
		List<AdminProductDTO> list = productViewDAO.kreamProductList();	
		return list;
	}

	@Override
	public List<AdminProductDTO> kreamHitBrand() {
		List<AdminProductDTO> list = productViewDAO.kreamHitBrand();	
		return list;
	}


	@Override
	public List<AdminProductDTO> categoryFilter(ProductCategoriesDTO productCategoriesDTO) {
		List<AdminProductDTO> list = productViewDAO.categoryFilter(productCategoriesDTO);
		return list;
	}

	@Override
	   public List<AdminProductDTO> brandFilter(ProductCategoriesDTO productCategoriesDTO) {
	      List<AdminProductDTO> list = productViewDAO.brandFilter(productCategoriesDTO);
	      return list;
	   }

	@Override
	public List<AdminProductDTO> selectCarouselFilter(ProductCategoriesDTO productCategoriesDTO) {
		List<AdminProductDTO> list = productViewDAO.selectCarouselFilter(productCategoriesDTO);
		return list;
	}

	@Override
	public List<AdminProductDTO> searchProduct(String searchValue) {
		List<AdminProductDTO> list = productViewDAO.searchProduct(searchValue);
		return list;
	}

	@Override
	public List<AdminProductDTO> searchProductCarousel(String searchValue) {
		List<AdminProductDTO> list = productViewDAO.searchProductCarousel(searchValue);
		return list;
	}
	
	
}
