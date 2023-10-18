package kream.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kream.bean.UserDTO;

@Service
public interface LoginService {
	@Autowired
	public boolean authenticateUser(String email, String pwd);
	//public UserDTO getUserById(String email);
}
