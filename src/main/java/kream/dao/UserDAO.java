package kream.dao;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;

import kream.bean.AddressDTO;
import kream.bean.UserDTO;
import kream.bean.UserEmailsDTO;
import kream.bean.WishListsDTO;

public interface UserDAO {
/*병권님------------------------------------------------*/
	@Autowired
	public UserDTO getUser(String email, String pwd);
	public UserDTO getUserInfo(String userEmail);
	public UserDTO isExistId(String email);
	public int updateEmail(Map<String, Object> params);
	public int verifyPassword(String userEmail, String oldPassword);
	public int updatePassword(String userEmail, String newPassword);
	public List<Map<String, Object>> getWishList(String email);
	public void deleteWishList(WishListsDTO wishListsDTO);
	public List<AddressDTO> getAddressList(String userEmail);
	public AddressDTO insertAddress(String email, AddressDTO addressDTO);
//-------------------------------------------------------
	
/*지안------------------------------------------------*/
	public List<UserDTO> load();

	public void editUser(UserDTO userDTO);

	public void delete(UserDTO userDTO);

	public void selectDelete(UserEmailsDTO userEmailsDTO);
	
	//1013이후 추가
	
//-------------------------------------------------------
	
	
}
