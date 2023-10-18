package kream.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import kream.bean.AddressDTO;
import kream.bean.UserDTO;
import kream.bean.UserEmailsDTO;
import kream.bean.WishListsDTO;

@Repository
@Transactional
public class UserDAOMybatis implements UserDAO {
	@Autowired
	private SqlSession sqlSession;

/*지안------------------------------------------------*/
	@Override
	public List<UserDTO> load() {

		return sqlSession.selectList("userSQL.load");
	}

	@Override
	public void editUser(UserDTO userDTO) {
		sqlSession.update("userSQL.editUser",userDTO);
		
	}

	@Override
	public void delete(UserDTO userDTO) {
		sqlSession.delete("userSQL.deleteUser",userDTO);
		
	}

	@Override
	public void selectDelete(UserEmailsDTO userEmailsDTO) {
		sqlSession.delete("userSQL.selectDelete",userEmailsDTO);
	}
//------------------------------------------------
	
	
/*병권님------------------------------------------------*/
	// 로그인
	@Override
	public UserDTO getUser(String email, String pwd) {
		 Map<String, String> parameters = new HashMap<>();
			parameters.put("email", email);
			parameters.put("pwd", pwd);
			return sqlSession.selectOne("userSQL.getUser", parameters);
	}
	
	// 회원정보 조회
	@Override
	public UserDTO getUserInfo(String userEmail) {
		return sqlSession.selectOne("userSQL.getUserInfo", userEmail);
	}
	
	// 이메일 중복체크
	@Override
	public UserDTO isExistId(String email) {
		return sqlSession.selectOne("userSQL.isExistId", email);
	}
	
	// 이메일 변경반영
	public int updateEmail(Map<String, Object> params) {
		System.out.println("email in DAO: " + params);
		return sqlSession.update("userSQL.updateEmail", params);
	}
	
	public int verifyPassword(String userEmail, String oldPassword) {
		Map<String, String> parameters = new HashMap<>();
		parameters.put("email", userEmail);
		parameters.put("oldPassword", oldPassword);
		return sqlSession.selectOne("userSQL.verifyPassword", parameters);
	}
	
	/*
	public boolean updatePassword(String userEmail, String newPassword) {
		Map<String, Object> parameters = new HashMap<>();
		parameters.put("email", userEmail);
		parameters.put("newPassword", newPassword);
		parameters.put("rowsAffected", 0); // Initialize rowsAffected

		sqlSession.update("userSQL.updatePassword", parameters);

		int rowsAffected = (int) parameters.get("rowsAffected");
		return rowsAffected > 0;
	}*/
	
	public int updatePassword(String userEmail, String newPassword) {
		System.out.println("DAO = " + userEmail);
		System.out.println("DAO = " + newPassword);
		
		Map<String, String> parameters = new HashMap<>();
		parameters.put("email", userEmail);
		parameters.put("newPassword", newPassword);
		return sqlSession.update("userSQL.updatePassword", parameters);
	}
	
	// 관심상품 불러오기
	@Override
	public List<Map<String, Object>> getWishList(String email) {
		System.out.println("DAO = " + email);
		
		List<Map<String, Object>> wishList = sqlSession.selectList("userSQL.getWishList", email);
		System.out.println("DAO - WishList Contents: " + wishList);
		return wishList;
		//return sqlSession.selectList("userSQL.getWishList", email);
	}
	// 관심상품 삭제하기
	@Override
	public void deleteWishList(WishListsDTO wishListsDTO) {
		sqlSession.delete("userSQL.deleteWishList", wishListsDTO);
		
	}
	
	// 주소 목록 조회
	@Override
	public List<AddressDTO> getAddressList(@Param("email") String userEmail) {
		return sqlSession.selectList("userSQL.getAddressList", userEmail);
	}

	
	// 새 배송지 추가
	@Override
	public AddressDTO insertAddress(@Param("email") String email, @Param("addressDTO") AddressDTO addressDTO) {
		//Map<String, Object> map = new HashMap<>();
		//map.put("email", email);
		//map.put("addressDTO", addressDTO);
		
		System.out.println("DAO : " + email + " & " + addressDTO.isDefault());

		sqlSession.insert("userSQL.insertAddress", addressDTO);
		return addressDTO;
	}
	
	
	
//-----------------------------------------------------

}
