package kream.bean;

import java.time.LocalDateTime;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Repository;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class UserDTO {
	    private String email;
	    private String pwd;
	    private int phone;
	    private int shoeSize;
	    private String userName;
	    private String address;
	    private String address2;
	    private String zipcode;
	    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	    private LocalDateTime createdDate;
	    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	    private LocalDateTime releaseDate;
	    private String profileName;
	    private String introduce;
	    private String nickname;
	    private int admin;
}
