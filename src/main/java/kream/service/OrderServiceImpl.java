package kream.service;

import kream.bean.OrderDTO;
import kream.dao.OrderDAO;
import kream.dao.ProductDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderServiceImpl implements OrderService{
    @Autowired
    private OrderDAO orderDAO;

    @Override
    public void reserve(OrderDTO orderDTO) {
        System.out.println(orderDTO);
        orderDAO.reserve(orderDTO);
    }
}
