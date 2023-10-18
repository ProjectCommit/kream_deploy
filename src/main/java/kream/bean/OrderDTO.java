package kream.bean;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Setter
@Getter
public class OrderDTO {
	private int orderId;
	private int productId;
	private Integer parentId;
	private String email;
	private String productColor;
	private String size;
	private int stock;
	private int totalPrice;
	private String phone;
	private int quickOrder;
	private String address;
	private String address2;
	private String zipcode;
	private int orderState;
	private String receiverName;
	private String receiverPhone;
	private Date orderDate;
}