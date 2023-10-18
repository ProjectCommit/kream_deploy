package kream.service;

import java.util.List;

import kream.bean.OrderDTO;

public interface AdminOrderService {

	List<OrderDTO> loadOrder();

	void checkOrder(String orderId);

	void cancleOrder(String orderId);

	List<OrderDTO> loadOrderCheck();

	void shippingOrder(String orderId);

	List<OrderDTO> loadShipping();

}
