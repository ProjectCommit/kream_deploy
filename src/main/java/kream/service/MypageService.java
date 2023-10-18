package kream.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;

import kream.bean.AddressDTO;
import kream.bean.UserDTO;
import kream.bean.WishListsDTO;

public interface MypageService {
	@Autowired
	public UserDTO getUserInfo(String userEmail);
	public String isExistId(String email);
	public boolean updateEmail(String newEmail, String oldEmail);
	public boolean verifyPassword(String userEmail, String oldPassword);
	public boolean updatePassword(String userEmail, String newPassword);
	public List<Map<String, Object>> getWishList(String email);
	public void deleteWishList(WishListsDTO wishListsDTO);
	public List<AddressDTO> getAddressList(String userEmail);
	public AddressDTO insertAddress(String email, AddressDTO addressDTO);
	/*@Autowired
	public UserDTO getUserDTO(String email);*/
	
}
