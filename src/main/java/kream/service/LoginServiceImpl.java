package kream.service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kream.bean.UserDTO;
import kream.dao.UserDAO;

@Service
public class LoginServiceImpl implements LoginService {
	
	@Autowired
	private UserDAO userDAO;

	@Override
    public boolean authenticateUser(String email, String pwd) {
		UserDTO userDTO = userDAO.getUser(email, pwd);
        return userDTO != null && userDTO.getPwd().equals(pwd);
    }
}
