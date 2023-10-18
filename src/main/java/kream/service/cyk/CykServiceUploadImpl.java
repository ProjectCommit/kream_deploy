package kream.service.cyk;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kream.bean.AdminProductDTO;
import kream.bean.WishListsDTO;
import kream.dao.cyk.CykProductDAOUpload;
@Service
public class CykServiceUploadImpl implements CykServiceUpload{
	@Autowired
	private CykProductDAOUpload cykProductDAOUpload;


//	@Override
//	public void upload(UserImageDTO userImageDTO, List<String> fileNameList) {
//		cykProductDAOUpload.upload(userImageDTO,fileNameList);
//	}

	@Override
	public List<AdminProductDTO> getUpload_list_AJax() {
		return cykProductDAOUpload.getUpload_list_AJax();
	}

	@Override
	public List<AdminProductDTO> getUpload_list_AJax2() {
		return cykProductDAOUpload.getUpload_list_AJax2();
	}

	@Override
	public List<AdminProductDTO> getUpload_list_AJax3() {
		return cykProductDAOUpload.getUpload_list_AJax3();
	}

	@Override
	public void addWishLists(WishListsDTO wishListsDTO) {
		cykProductDAOUpload.addWishLists(wishListsDTO);
		
	}
}
