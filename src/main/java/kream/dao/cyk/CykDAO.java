package kream.dao.cyk;

import java.util.List;
import java.util.Map;

import kream.bean.AdminProductDTO;
public interface CykDAO {
	
	// =======================김찬영Begin=========================
	
	public AdminProductDTO getProductOne(String id);

	public void productWrite(AdminProductDTO adminProductDTO);

	public List<AdminProductDTO> getProductList(Map<String, Integer> map);

	public int getTotalA();
	

	// =======================김찬영End============================
}
