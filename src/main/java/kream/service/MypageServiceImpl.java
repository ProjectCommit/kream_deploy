package kream.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kream.bean.AddressDTO;
import kream.bean.UserDTO;
import kream.bean.WishListsDTO;
import kream.dao.UserDAO;

@Service
public class MypageServiceImpl implements MypageService {
	@Autowired // UserDAO와 의존관계 형성
	private UserDAO userDAO;

	@Override
	public UserDTO getUserInfo(String userEmail) {
		// UserDAOMybatis를 사용하여 사용자 정보 조회
        UserDTO user = userDAO.getUserInfo(userEmail);
        return user;
	}

	@Override
	public String isExistId(String email) {
		// DB
		UserDTO userDTO = userDAO.isExistId(email);
		// String타입으로 구성된 DTO는 true, false값을 주고받을 수 없으므로 이런식으로 로직을 짠다.
		if(userDTO == null)
			return "non_exist";
		else
			return "exist";
	}
	
	/*
	@Override
	public boolean updateEmail(String email) {
		System.out.println(email);
		// 이메일 업데이트 로직을 수행하고 성공 여부를 반환
        return userDAO.updateEmail(email);
	}*/
	@Override
	public boolean updateEmail(String newEmail, String oldEmail) {
		 Map<String, Object> params = new HashMap<>();
		 
		 System.out.println("newEmail = " + newEmail);
		 System.out.println("oldEmail = " + oldEmail);
		 
	    params.put("newEmail", newEmail);
	    params.put("oldEmail", oldEmail);
	    int rowsAffected = userDAO.updateEmail(params);
	    return rowsAffected > 0;
	}
	
	// 기존 비밀번호 변경 확인
    public boolean verifyPassword(String userEmail, String oldPassword) {
    	// DAO를 통해 기존 비밀번호가 올바른지 확인
        Integer result = userDAO.verifyPassword(userEmail, oldPassword);
        return result != null && result > 0;
    }
    
    // 새 비밀번호 변경
    public boolean updatePassword(String userEmail, String newPassword) {
    	System.out.println("service = " + userEmail);
    	System.out.println("service = " + newPassword);
    	
    	// DAO를 통해 비밀번호 업데이트
        int rowsAffected = userDAO.updatePassword(userEmail, newPassword);
        return rowsAffected > 0;
    }
	
	/*
	@Override
	public UserDTO getUserDTO(String email) {
		// DB
		return userDAO.getUser(email);
	}*/
    
    //관심상품 불러오기
    @Override
    public List<Map<String, Object>> getWishList(String email) {
    	System.out.println("service = " + email);
    	
    	List<Map<String, Object>> list = userDAO.getWishList(email);
    	System.out.println("service List = " + list);
    	return list;
    	//return userDAO.getWishList(email);
    }
    
    //관심상품 삭제하기
	@Override
	public void deleteWishList(WishListsDTO wishListsDTO) {
		userDAO.deleteWishList(wishListsDTO);
	}

	// 주소지 목록 조회
	@Override
	public List<AddressDTO> getAddressList(String userEmail) {
		return userDAO.getAddressList(userEmail);
	}
	
	// 새 주소지 추가
	@Override
	public AddressDTO insertAddress(String email, AddressDTO addressDTO) {
		System.out.println("service : " + email + " & " + addressDTO.isDefault());
		return userDAO.insertAddress(email, addressDTO);
	}
	
}
