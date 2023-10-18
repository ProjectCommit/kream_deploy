package kream.dao.cyk;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;

import kream.bean.AdminProductDTO;
import kream.bean.WishListsDTO;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
@Repository
@Transactional
public class CykProductDAOUploadMybatis implements CykProductDAOUpload {
	@Autowired
	private SqlSession sqlSession;

//	@Override
//	public void upload(UserImageDTO userImageDTO, List<String> fileNameList) {
//		for(String fileName: fileNameList) {
//			userImageDTO.setImage1(fileName);
//			sqlSession.insert("cykUploadSQL.upload" , userImageDTO);
//		}//for
//		
//	}

	@Override
	public List<AdminProductDTO> getUpload_list_AJax() {
		return sqlSession.selectList("cykUploadSQL.getUpload_list_AJax");
	}

	@Override
	public List<AdminProductDTO> getUpload_list_AJax2() {
		return sqlSession.selectList("cykUploadSQL.getUpload_list_AJax2");
	}

	@Override
	public List<AdminProductDTO> getUpload_list_AJax3() {
		return sqlSession.selectList("cykUploadSQL.getUpload_list_AJax3");
	}
	

	@Override
	public void addWishLists(WishListsDTO wishListsDTO) {
		sqlSession.insert("cykUploadSQL.addWishLists", wishListsDTO);
	}
}
