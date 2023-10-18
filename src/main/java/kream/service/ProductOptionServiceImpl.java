package kream.service;

import kream.dao.ProductDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

@Service
public class ProductOptionServiceImpl implements ProductOptionService{
    @Autowired
    private ProductDAO productDAO;

    @Override
    public List<String> getProductColor(String productId) {
        return productDAO.getProductColor(productId);
    }

    @Override
    public List<Object> getProductSize(String productId, String productColor) {
        Map<String, String> productMap = new HashMap<>();
        productMap.put("productId", productId);
        productMap.put("productColor", productColor);
        return productDAO.getProductSize(productMap);
    }
}
