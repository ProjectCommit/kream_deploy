package kream.bean;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor // 파라미터가 없는 기본 생성자를 자동으로 생성
@AllArgsConstructor // 모든 필드를 인자로 받는 생성자를 자동으로 생성
@ToString
public class AddressDTO {
	private int addressId;
	private String email;
	private String addressName;
	private String phone;
    private String zipcode;
    private String address;
    private String address2;
    private boolean isDefault = false;
}
