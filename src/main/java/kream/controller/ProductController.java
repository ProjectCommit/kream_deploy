package kream.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import kream.bean.AdminProductDTO;
import kream.bean.ProductCategoriesDTO;
import kream.service.ProductViewService;

@Controller
public class ProductController {
	
	
	@Autowired
	private ProductViewService productViewService;
	
	@PostMapping(value="kreamProductList")
	@ResponseBody
	public List<AdminProductDTO> kreamProductList() {
		return productViewService.kreamProductList();
	}
	
	@PostMapping(value="kreamHitBrand")
	@ResponseBody
	public List<AdminProductDTO> kreamHitBrand() {
		return productViewService.kreamHitBrand();
	}
	
	@PostMapping(value="categoryFilter")
	@ResponseBody
	public List<AdminProductDTO> categoryFilter(@RequestBody ProductCategoriesDTO productCategoriesDTO) {
		System.out.println("카테고리1:"+productCategoriesDTO.getCate1Values());
		System.out.println("카테고리2:"+productCategoriesDTO.getCate2Values());
		System.out.println("카테고리3:"+productCategoriesDTO.getCate3Values());
		System.out.println("카테고리4:"+productCategoriesDTO.getCate4Values());
		System.out.println("카테고리5:"+productCategoriesDTO.getCate5Values());
		
		return productViewService.categoryFilter(productCategoriesDTO);
	}
	
	@PostMapping(value="selectCarouselFilter")
	@ResponseBody
	public List<AdminProductDTO> selectCarouselFilter(@RequestBody ProductCategoriesDTO productCategoriesDTO) {
		System.out.println("카테고리1:"+productCategoriesDTO.getCate1Values());
		System.out.println("카테고리2:"+productCategoriesDTO.getCate2Values());
		System.out.println("카테고리3:"+productCategoriesDTO.getCate3Values());
		System.out.println("카테고리4:"+productCategoriesDTO.getCate4Values());
		System.out.println("카테고리5:"+productCategoriesDTO.getCate5Values());
		
		return productViewService.selectCarouselFilter(productCategoriesDTO);
	}
	
	@PostMapping(value = "searchProduct")
	@ResponseBody
    public List<AdminProductDTO> searchProduct(@RequestParam("searchValue") String searchValue) {
		//System.out.println("검색어:"+ searchValue);
        return productViewService.searchProduct(searchValue); // 결과 페이지 이름 반환
    }
	
	@PostMapping(value="brandFilter")
	@ResponseBody
	public List<AdminProductDTO> brandFilter(@RequestBody ProductCategoriesDTO productCategoriesDTO){	      
	return productViewService.brandFilter(productCategoriesDTO);
	}
	
	@PostMapping(value="searchProductCarousel")
	@ResponseBody
	public List<AdminProductDTO> searchProductCarousel(@RequestParam("searchValue") String searchValue) {
		System.out.println("캐러셀 검색어:"+ searchValue);
		
		return productViewService.searchProductCarousel(searchValue);
	}
	
	
}
