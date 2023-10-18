package kream.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import kream.bean.AdminProductDTO;
import kream.bean.AdminProductIdsDTO;
import kream.bean.ProductBoardDTO;

@Repository
@Transactional
public class AdminProductMybatis implements AdminProductDAO {
	@Autowired
	private SqlSession sqlSession;
	
	@Override
	public void upload(AdminProductDTO adminProductDTO, List<String> fileNameList) {
		//리스트에 N번째 담긴 이미지라면, productImg의 N번째 방에 저장하는 로직.
		for(int i=0; i<fileNameList.size(); i++) {
			if(i==0) adminProductDTO.setProductImg1(fileNameList.get(i));
			if(i==1) adminProductDTO.setProductImg2(fileNameList.get(i));
			if(i==2) adminProductDTO.setProductImg3(fileNameList.get(i));
			if(i==3) adminProductDTO.setProductImg4(fileNameList.get(i));
			if(i==4) adminProductDTO.setProductImg5(fileNameList.get(i));
			if(i==5) adminProductDTO.setProductImg6(fileNameList.get(i));
			if(i==6) adminProductDTO.setProductImg7(fileNameList.get(i));
			if(i==7) adminProductDTO.setProductImg8(fileNameList.get(i));
			if(i==8) adminProductDTO.setProductImg9(fileNameList.get(i));
			if(i==9) adminProductDTO.setProductImg10(fileNameList.get(i));
		}
		
		sqlSession.insert("adminProductSQL.upload",adminProductDTO);
		
	}

	@Override
	public List<AdminProductDTO> load() {
		return sqlSession.selectList("adminProductSQL.load");
		
	}

	@Override
	public void edit(AdminProductDTO adminProductDTO) {
		sqlSession.update("adminProductSQL.edit",adminProductDTO);
		
	}

	@Override
	public void delete(AdminProductDTO adminProductDTO) {
		sqlSession.delete("adminProductSQL.delete",adminProductDTO);
		
	}

	@Override
	public void selectDelete(AdminProductIdsDTO adminProductIdsDTO) {
		sqlSession.delete("adminProductSQL.selectDelete",adminProductIdsDTO);
		
	}

	@Override
	public List<ProductBoardDTO> boardLoad() {

		return sqlSession.selectList("adminProductSQL.boardLoad");
	}

	@Override
	public void boardDelete(ProductBoardDTO productBoardDTO) {
		sqlSession.delete("adminProductSQL.boardDelete",productBoardDTO);
		
	}

	@Override
	public List<ProductBoardDTO> boardLoadYetReply() {
		
		return sqlSession.selectList("adminProductSQL.boardLoadYetReply");
	}

	@Override
	public List<ProductBoardDTO> boardLoadAllReply() {
		
		return sqlSession.selectList("adminProductSQL.boardLoadAllReply");
	}

	@Override
	public List<ProductBoardDTO> boardLoadCompleteReply() {
		
		return sqlSession.selectList("adminProductSQL.boardLoadCompleteReply");
	}

	@Override
	public String checkComment() {
		
		return sqlSession.selectOne("adminProductSQL.checkComment");
	}

	@Override
	public List<ProductBoardDTO> replyCheck(String boardId) {
		int intBoardId = Integer.parseInt(boardId);
		return sqlSession.selectList("adminProductSQL.replyCheck", intBoardId);
	}

	@Override
	public void replyEdit(Map<String, Object> productMap) {
		sqlSession.update("adminProductSQL.replyEdit", productMap);
		
	}

}
