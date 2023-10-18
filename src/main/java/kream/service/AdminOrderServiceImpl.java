package kream.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kream.bean.OrderDTO;
import kream.dao.AdminOrderDAO;

@Service
public class AdminOrderServiceImpl implements AdminOrderService {
	@Autowired
	private AdminOrderDAO adminOrderDAO;
	
	
	@Override
	public List<OrderDTO> loadOrder() {
		return adminOrderDAO.loadOrder();
		
	}


	@Override
	public void checkOrder(String orderId) {
		adminOrderDAO.checkOrder(orderId);
		
	}


	@Override
	public void cancleOrder(String orderId) {
		adminOrderDAO.cancleOrder(orderId);
		
	}


	@Override
	public List<OrderDTO> loadOrderCheck() {
		
		return adminOrderDAO.loadOrderCheck();
	}


	@Override
	public void shippingOrder(String orderId) {
		adminOrderDAO.shippingOrder(orderId);
		
	}


	@Override
	public List<OrderDTO> loadShipping() {
		
		return adminOrderDAO.loadShipping();
	}

}
