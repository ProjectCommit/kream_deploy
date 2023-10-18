package kream.dao.cyk;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import kream.bean.AdminProductDTO;
import kream.bean.WishListsDTO;

@Component
@Transactional
public class CykDAOMyBatis implements CykDAO {

	// =======================김찬영Begin=========================

	@Autowired
	private SqlSession sqlSession;
	
	@Override
	public AdminProductDTO getProductOne(String id) {
		return sqlSession.selectOne("cykSQL.getProductOne",id);
	}

	@Override
	public void productWrite(AdminProductDTO adminProductDTO) {
		sqlSession.insert("cykSQL.productWrite", adminProductDTO);
	}

	@Override
	public List<AdminProductDTO> getProductList(Map<String, Integer> map) {
		return sqlSession.selectList("cykSQL.getProductList",map);
	}

	@Override
	public int getTotalA() {
		return sqlSession.selectOne("cykSQL.getTotalA");
	}
	// =======================김찬영End============================




}
