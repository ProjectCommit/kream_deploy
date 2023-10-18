package kream.dao;

import java.util.List;

import kream.bean.OrderDTO;
import kream.bean.ProductBoardDTO;

public interface AdminOrderDAO {
	public List<OrderDTO> loadOrder();

	public void checkOrder(String orderId);

	public void cancleOrder(String orderId);

	public List<OrderDTO> loadOrderCheck();

	public void shippingOrder(String orderId);

	public List<OrderDTO> loadShipping();
}
