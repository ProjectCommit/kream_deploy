package kream.service.cyk;

import java.util.Map;

import kream.bean.AdminProductDTO;
import kream.bean.WishListsDTO;

public interface CykService {
	// =======================김찬영Begin=========================
	//상품단건조회
	public AdminProductDTO getProductOne(String productId);
	
	public void productWrite(AdminProductDTO adminProductDTO);

	public Map<String, Object> getProductList(String pg);

	
	// =======================김찬영End============================
}
