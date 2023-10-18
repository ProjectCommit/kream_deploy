package kream.dao.cyk;

import java.util.List;

import kream.bean.AdminProductDTO;
import kream.bean.WishListsDTO;

public interface CykProductDAOUpload {

	//public void upload(UserImageDTO userImageDTO, List<String> fileNameList);
	
	public List<AdminProductDTO> getUpload_list_AJax();
	
	public List<AdminProductDTO> getUpload_list_AJax2();

	public List<AdminProductDTO> getUpload_list_AJax3();

	public void addWishLists(WishListsDTO wishListsDTO);
}
