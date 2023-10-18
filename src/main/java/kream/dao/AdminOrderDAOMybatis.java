package kream.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import kream.bean.OrderDTO;

@Repository
@Transactional
public class AdminOrderDAOMybatis implements AdminOrderDAO {
	@Autowired
	private SqlSession sqlSession;

	@Override
	public List<OrderDTO> loadOrder() {
		
		return sqlSession.selectList("adminOrderSQL.load");
	}

	@Override
	public void checkOrder(String orderIdStr) {
		int orderId = Integer.parseInt(orderIdStr);
		sqlSession.update("adminOrderSQL.orderCheck", orderId);
		
	}

	@Override
	public void cancleOrder(String orderIdStr) {
		int orderId = Integer.parseInt(orderIdStr);
		sqlSession.update("adminOrderSQL.orderCancle", orderId);
		
	}

	@Override
	public List<OrderDTO> loadOrderCheck() {
		
		return sqlSession.selectList("adminOrderSQL.loadOrderCheck");
	}

	@Override
	public void shippingOrder(String orderIdStr) {
		int orderId = Integer.parseInt(orderIdStr);
		sqlSession.update("adminOrderSQL.shippingOrder", orderId);
		
	}

	@Override
	public List<OrderDTO> loadShipping() {
		
		return sqlSession.selectList("adminOrderSQL.loadShipping");
	}
}
