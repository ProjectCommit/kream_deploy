package kream.service;

import java.util.List;

import kream.bean.UserDTO;
import kream.bean.UserEmailsDTO;

public interface UserService {
	public List<UserDTO> loadUser();

	public void editUser(UserDTO userDTO);

	public void delete(UserDTO userDTO);

	public void selectDelete(UserEmailsDTO userEmailsDTO);

	public UserDTO getUserInfo(String userEmail);
}
