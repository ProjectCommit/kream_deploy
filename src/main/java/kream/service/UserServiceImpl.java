package kream.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kream.bean.UserDTO;
import kream.bean.UserEmailsDTO;
import kream.dao.UserDAO;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private UserDAO userDAO;
	@Autowired
	private List<UserDTO> userList;
	
	@Override
	public List<UserDTO> loadUser() {
		userList = userDAO.load();
		return userList;
	}

	@Override
	public void editUser(UserDTO userDTO) {
		userDAO.editUser(userDTO);
		
	}

	@Override
	public void delete(UserDTO userDTO) {
		userDAO.delete(userDTO);
		
	}

	@Override
	public void selectDelete(UserEmailsDTO userEmailsDTO) {
		userDAO.selectDelete(userEmailsDTO);
		
	}

	@Override
	public UserDTO getUserInfo(String userEmail) {

		return userDAO.getUserInfo(userEmail);
	}


}