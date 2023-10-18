package kream.bean;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class UserEmailsDTO {
	@Autowired
	private List<String> userEmailList;
}
