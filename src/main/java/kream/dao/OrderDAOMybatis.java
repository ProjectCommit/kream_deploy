package kream.dao;

import kream.bean.OrderDTO;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
@Transactional
public class OrderDAOMybatis implements OrderDAO{
    @Autowired
    private SqlSession sqlSession;

    @Override
    public void reserve(OrderDTO orderDTO) {
        sqlSession.insert("order.reserve", orderDTO);
    }
}
