package kream.service.cyk;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kream.bean.AdminProductDTO;
import kream.bean.ProductPaging;
import kream.bean.WishListsDTO;
import kream.dao.cyk.CykDAO;

@Service
public class CykServiceImpl implements CykService {
	@Autowired
	private CykDAO cykDAO;
	@Autowired
	private ProductPaging productPaging;
	// =======================김찬영Begin=========================
	@Override
	public AdminProductDTO getProductOne(String productId) {
		return cykDAO.getProductOne(productId);
	}

	@Override
	public void productWrite(AdminProductDTO adminProductDTO) {
		cykDAO.productWrite(adminProductDTO);
	}

	@Override
	public Map<String, Object> getProductList(String pg) {
		
		int endNum = Integer.parseInt(pg)*3;
		int startNum = endNum -3; // 원래 -2하면 되는데,, 지금은 -3해야나옴.oracle하고 차이있나봄.
		
		Map<String,Integer> map = new HashMap<String,Integer>();
		map.put("startNum", startNum);
		map.put("endNum", endNum);
		
		//DB
		List<AdminProductDTO> list = cykDAO.getProductList(map);
		System.out.println(list);
		
		//페이징 처리
		int totalA = cykDAO.getTotalA();
		
		productPaging.setCurrentPage(Integer.parseInt(pg));
		productPaging.setPageBlock(3);
		productPaging.setPageSize(3);
		productPaging.setTotalA(totalA);
		
		productPaging.makePagingHTML();
		
		Map<String , Object> map2 = new HashMap<String, Object>();
		map2.put("list", list);
		map2.put("userPaging", productPaging);
		
		return map2;
	}


	// =======================김찬영End============================
}
