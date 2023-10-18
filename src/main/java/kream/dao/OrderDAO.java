package kream.dao;

import kream.bean.OrderDTO;

public interface OrderDAO {
    public void reserve(OrderDTO orderDTO);
}
